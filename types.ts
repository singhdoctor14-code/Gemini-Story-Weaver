export enum GameState {
  MAIN_MENU,
  STORY_SELECTION,
  LOADING,
  WELCOME,
  PLAYING,
  INTERACTIVE,
  PAUSED,
  PASS_FAIL,
  END,
}

export type GameCategory = 'Thriller' | 'Horror' | 'Moral' | 'Fun';

export interface NarrativeScene {
  type: 'narrative';
  text: string;
  character: string;
  imagePrompt: string;
  voice?: string; // e.g., 'Kore', 'Puck', 'Zephyr'
}

export interface InteractiveScene {
  type: 'interactive';
  prompt: string;
  hint: string;
  options: {
    text: string;
    isCorrect: boolean;
    consequence?: string;
  }[];
}

export type Scene = NarrativeScene | InteractiveScene;

export interface Story {
  title: string;
  category: GameCategory;
  scenes: Scene[];
}

export interface LoadedStory extends Story {
  assets: {
    images: (string | null)[];
    audio: (string | null)[];
  };
}