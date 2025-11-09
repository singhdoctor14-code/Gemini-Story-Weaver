import { GoogleGenAI, Modality, Type } from "@google/genai";
import { GameCategory, Story, NarrativeScene } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const storySchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING, description: "The title of the story." },
        category: { type: Type.STRING, description: "The category of the story (e.g., Thriller, Horror)." },
        scenes: {
            type: Type.ARRAY,
            description: "An array of scenes that make up the story.",
            items: {
                type: Type.OBJECT,
                properties: {
                    type: { type: Type.STRING, description: "Either 'narrative' or 'interactive'." },
                    text: { type: Type.STRING, description: "The narrative text for the scene. Null for interactive scenes.", nullable: true },
                    character: { type: Type.STRING, description: "The character speaking or being focused on. Null for interactive scenes.", nullable: true },
                    imagePrompt: { type: Type.STRING, description: "A detailed prompt for generating a background image for this scene. Null for interactive scenes.", nullable: true },
                    voice: { type: Type.STRING, description: "The pre-defined voice for the character. Assign one voice from this list to each character consistently: ['Puck', 'Charon', 'Fenrir', 'Zephyr']. The Narrator should always use 'Kore'.", nullable: true },
                    prompt: { type: Type.STRING, description: "The question or prompt for the player. Null for narrative scenes.", nullable: true },
                    hint: { type: Type.STRING, description: "A hint for the player. Null for narrative scenes.", nullable: true },
                    options: {
                        type: Type.ARRAY,
                        description: "The choices for the player. Null for narrative scenes.",
                        nullable: true,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                text: { type: Type.STRING, description: "The text for the choice." },
                                isCorrect: { type: Type.BOOLEAN, description: "Whether this is the correct choice." },
                                consequence: { type: Type.STRING, description: "The negative outcome if this wrong choice is selected.", nullable: true },
                            },
                             required: ['text', 'isCorrect']
                        }
                    }
                },
                 required: ['type']
            }
        }
    },
    required: ['title', 'category', 'scenes']
};

export async function generateStory(category: GameCategory, title: string): Promise<Story | null> {
    const prompt = `
        You are a creative storyteller for an interactive game.
        Generate a complete, short story with the title "${title}" in the "${category}" category.
        The story must feature multiple distinct characters with their own dialogue.
        For each narrative scene, assign a specific voice to the character from this list: ['Puck', 'Charon', 'Fenrir', 'Zephyr']. 
        A character must have the same voice throughout the entire story. The Narrator should always use the 'Kore' voice.
        Ensure the 'voice' field is correctly populated in the JSON for every narrative scene.

        The story must have the following structure:
        1.  Start with a clear problem or mystery.
        2.  Include exactly 4-5 interactive scenes where the player must make a choice.
        3.  One option must be correct. The incorrect options must have a descriptive 'consequence' explaining the negative outcome.
        4.  Incorporate a surprising plot twist in the later part of the story.
        5.  The final scene should resolve the initial problem.
        6.  The story should be engaging, coherent, and fit the category's tone.
        7.  Provide detailed 'imagePrompt' descriptions for all narrative scenes. They should be atmospheric and suitable for an AI image generator.
        
        Return ONLY a single, valid JSON object that adheres to the provided schema. Do not add any extra text or markdown formatting around the JSON.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro', // Using a more capable model for complex generation
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: storySchema,
            },
        });
        
        let jsonText = response.text.trim();

        if (jsonText.startsWith('```json')) {
            jsonText = jsonText.substring(7);
            if (jsonText.endsWith('```')) {
                jsonText = jsonText.substring(0, jsonText.length - 3);
            }
        }
        
        const storyData = JSON.parse(jsonText) as Story;

        if (storyData && storyData.title && storyData.scenes && storyData.scenes.length > 0) {
            return storyData;
        } else {
             console.error("Generated story data is invalid or empty:", storyData);
             return null;
        }

    } catch(error) {
        console.error("Failed to generate or parse story:", error);
        return null;
    }
}


export async function generateSceneImage(prompt: string): Promise<string | null> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
            return `data:image/png;base64,${part.inlineData.data}`;
        }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
}

export async function generateCharacterAudio(text: string, voiceName: string = 'Kore'): Promise<string | null> {
  if (!text.trim()) return null;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say with appropriate emotion: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName || 'Kore' }, 
          },
        },
      },
    });
    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    return base64Audio || null;
  } catch (error) {
    console.error(`Audio generation failed for voice ${voiceName}:`, error);
    return null;
  }
}