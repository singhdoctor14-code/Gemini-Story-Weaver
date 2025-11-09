import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { GameState, GameCategory, LoadedStory, NarrativeScene, Story, Scene } from './types';
import { CATEGORIES, STORY_TITLES, Icons } from './constants';
import * as GeminiService from './services/geminiService';
import { useGameAudio } from './hooks/useGameAudio';

// Helper Components (defined outside App to prevent re-renders)

const GameButton: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string }> = ({ onClick, children, className = '' }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 ${className}`}
    >
        {children}
    </button>
);

// Fix: Add optional className prop to IconButton to allow custom styling.
const IconButton: React.FC<{ onClick: () => void; children: React.ReactNode; label: string; className?: string }> = ({ onClick, children, label, className = '' }) => (
    <button onClick={onClick} aria-label={label} className={`p-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ${className}`}>
        {children}
    </button>
);

const LoadingScreen: React.FC<{ message: string }> = ({ message }) => (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-500"></div>
        <p className="mt-8 text-xl font-semibold animate-pulse">{message}</p>
    </div>
);

const WelcomeScreen: React.FC<{ storyTitle: string; onStart: () => void }> = ({ storyTitle, onStart }) => (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4 animate-fade-in-down">{storyTitle}</h1>
        <GameButton onClick={onStart} className="mt-8 animate-fade-in-up">Begin Story</GameButton>
    </div>
);

const PassFailScreen: React.FC<{ isPass: boolean; onContinue: () => void; consequence?: string | null }> = ({ isPass, onContinue, consequence }) => (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fade-in`}>
        <div className="text-center p-4 max-w-lg bg-gray-800 rounded-xl shadow-2xl">
            <h2 className={`text-6xl md:text-8xl font-bold mb-4 ${isPass ? 'text-green-500' : 'text-red-500'}`}>
                {isPass ? 'Success!' : 'Not Quite...'}
            </h2>
            {!isPass && consequence && (
                <p className="text-lg text-gray-300 mb-6">{consequence}</p>
            )}
            <GameButton onClick={onContinue}>{isPass ? 'Continue' : 'Try Again'}</GameButton>
        </div>
    </div>
);

const EndScreen: React.FC<{ onReplay: () => void; onNext: () => void; onMenu: () => void }> = ({ onReplay, onNext, onMenu }) => (
     <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-center p-4">
        <h1 className="text-9xl font-bold text-cyan-400 mb-8 animate-fade-in-down">The End</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up">
            <GameButton onClick={onReplay}>Replay Story</GameButton>
            <GameButton onClick={onNext}>Next Story</GameButton>
            <GameButton onClick={onMenu}>Main Menu</GameButton>
        </div>
    </div>
);

// Main App Component
export default function App() {
    const [gameState, setGameState] = useState<GameState>(GameState.MAIN_MENU);
    const [loadingMessage, setLoadingMessage] = useState('Loading...');
    const [selectedCategory, setSelectedCategory] = useState<GameCategory | null>(null);
    const [selectedStoryTitle, setSelectedStoryTitle] = useState<string | null>(null);
    const [currentStory, setCurrentStory] = useState<LoadedStory | null>(null);
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);
    const [showSettings, setShowSettings] = useState(false);
    const [passFailStatus, setPassFailStatus] = useState<boolean | null>(null);
    const [interactionConsequence, setInteractionConsequence] = useState<string | null>(null);
    const [showHint, setShowHint] = useState(false);

    const gameAudio = useGameAudio(isSoundEnabled);

    const handleSceneEnd = useCallback(() => {
        if (!currentStory) return;
        if (currentSceneIndex < currentStory.scenes.length - 1) {
            setCurrentSceneIndex(prev => prev + 1);
        } else {
            setGameState(GameState.END);
        }
    }, [currentStory, currentSceneIndex]);

    useEffect(() => {
        if (gameState === GameState.PLAYING && currentStory) {
            const scene = currentStory.scenes[currentSceneIndex];
            if (scene.type === 'narrative') {
                const audio = currentStory.assets.audio[currentSceneIndex];
                gameAudio.play(audio, handleSceneEnd);
            } else if (scene.type === 'interactive') {
                // When we hit an interactive scene, stop all audio and change state
                gameAudio.stop();
                setGameState(GameState.INTERACTIVE);
            }
        }
    }, [gameState, currentStory, currentSceneIndex, gameAudio, handleSceneEnd]);

    const loadStory = useCallback(async (category: GameCategory, title: string) => {
        setGameState(GameState.LOADING);
        setLoadingMessage('Weaving your story...');
        try {
            const storyContent = await GeminiService.generateStory(category, title);
            
            if (!storyContent) {
                console.error("Story could not be generated:", title);
                alert("Sorry, we couldn't create that story. Please try a different one.");
                setGameState(GameState.STORY_SELECTION);
                return;
            }
            
            setLoadingMessage('Painting the scenes...');
            const imagePromises = storyContent.scenes
                .filter(s => s.type === 'narrative')
                .map(s => GeminiService.generateSceneImage((s as NarrativeScene).imagePrompt));
            
            setLoadingMessage('Giving characters a voice...');
            const audioPromises = storyContent.scenes
                .filter(s => s.type === 'narrative')
                .map(s => {
                    const scene = s as NarrativeScene;
                    return GeminiService.generateCharacterAudio(scene.text, scene.voice);
                });

            const images = await Promise.all(imagePromises);
            const audio = await Promise.all(audioPromises);

            let imageCounter = 0;
            let audioCounter = 0;
            const assets = {
                images: storyContent.scenes.map(s => s.type === 'narrative' ? images[imageCounter++] : null),
                audio: storyContent.scenes.map(s => s.type === 'narrative' ? audio[audioCounter++] : null),
            };

            setCurrentStory({ ...storyContent, assets });
            setCurrentSceneIndex(0);
            setGameState(GameState.WELCOME);

        } catch (error) {
            console.error("Failed to load story assets:", error);
            alert("Sorry, we couldn't load the story's assets. Please check your connection and try again.");
            setGameState(GameState.MAIN_MENU);
        }
    }, []);

    const selectCategory = (category: GameCategory) => {
        setSelectedCategory(category);
        setGameState(GameState.STORY_SELECTION);
    };

    const selectStory = (title: string) => {
        if (selectedCategory) {
            setSelectedStoryTitle(title);
            loadStory(selectedCategory, title);
        }
    };
    
    const handleReplay = () => {
        if(selectedCategory && selectedStoryTitle) {
            loadStory(selectedCategory, selectedStoryTitle);
        }
    };
    
    const handleNextStory = () => {
        if(selectedCategory && selectedStoryTitle) {
            const stories = STORY_TITLES[selectedCategory];
            const currentIndex = stories.indexOf(selectedStoryTitle);
            const nextIndex = (currentIndex + 1) % stories.length;
            const nextTitle = stories[nextIndex];
            selectStory(nextTitle);
        }
    };
    
    const handleMenu = () => {
        gameAudio.stop();
        setSelectedCategory(null);
        setSelectedStoryTitle(null);
        setCurrentStory(null);
        setGameState(GameState.MAIN_MENU);
    };

    const handleInteraction = (option: { text: string; isCorrect: boolean; consequence?: string; }) => {
        gameAudio.stop();
        setPassFailStatus(option.isCorrect);
        if (!option.isCorrect) {
            setInteractionConsequence(option.consequence || "That wasn't the right choice. Let's think about it again.");
        }
        setGameState(GameState.PASS_FAIL);
        setShowHint(false);
    };
    
    const continueAfterPassFail = () => {
        if(passFailStatus) {
            setPassFailStatus(null);
            setInteractionConsequence(null);
            setGameState(GameState.PLAYING);
            handleSceneEnd(); // Move to next scene
        } else {
            setPassFailStatus(null);
            setInteractionConsequence(null);
            setGameState(GameState.INTERACTIVE); // Try again
        }
    };
    
    const currentScene = useMemo(() => currentStory?.scenes[currentSceneIndex], [currentStory, currentSceneIndex]);
    const backgroundImage = useMemo(() => {
        if (currentScene?.type === 'narrative' && currentStory?.assets.images[currentSceneIndex]) {
            return currentStory.assets.images[currentSceneIndex];
        }
        // find previous image
        if(currentStory && currentSceneIndex > 0) {
            for(let i = currentSceneIndex - 1; i >= 0; i--) {
                if(currentStory.scenes[i].type === 'narrative' && currentStory.assets.images[i]) {
                    return currentStory.assets.images[i];
                }
            }
        }
        return null;
    }, [currentStory, currentSceneIndex, currentScene]);


    const renderContent = () => {
        switch (gameState) {
            case GameState.MAIN_MENU:
                return (
                    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 p-4">
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-2">Gemini</h1>
                        <h2 className="text-4xl md:text-6xl font-thin text-cyan-400 mb-12">Story Weaver</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {CATEGORIES.map(cat => <GameButton key={cat} onClick={() => selectCategory(cat)}>{cat}</GameButton>)}
                        </div>
                    </div>
                );
            case GameState.STORY_SELECTION:
                return (
                    <div className="w-full min-h-screen bg-gray-900 p-8">
                        <button onClick={() => setGameState(GameState.MAIN_MENU)} className="mb-8 text-cyan-400 hover:text-cyan-300">&larr; Back to Categories</button>
                        <h1 className="text-5xl font-bold text-center mb-8">{selectedCategory} Stories</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {STORY_TITLES[selectedCategory!].map(title => (
                                <button key={title} onClick={() => selectStory(title)} className="p-4 bg-gray-800 rounded-lg text-left hover:bg-cyan-900 transition-colors duration-300">
                                    {title}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case GameState.LOADING:
                return <LoadingScreen message={loadingMessage} />;
            case GameState.WELCOME:
                return <WelcomeScreen storyTitle={currentStory!.title} onStart={() => setGameState(GameState.PLAYING)} />;
            case GameState.PLAYING:
            case GameState.PAUSED:
            case GameState.INTERACTIVE:
                if (!currentStory || !currentScene) return <LoadingScreen message="Something went wrong..." />;
                return (
                    <div className="relative w-full h-screen overflow-hidden bg-black">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                            style={{ backgroundImage: `url(${backgroundImage})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        </div>

                        {/* Game Controls */}
                        <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
                            {gameState === GameState.PLAYING && <IconButton onClick={() => { gameAudio.pause(); setGameState(GameState.PAUSED); }} label="Pause">{Icons.pause}</IconButton>}
                            {gameState === GameState.PAUSED && <IconButton onClick={() => { gameAudio.resume(); setGameState(GameState.PLAYING); }} label="Play">{Icons.play}</IconButton>}
                            <IconButton onClick={handleReplay} label="Replay">{Icons.replay}</IconButton>
                            <IconButton onClick={() => setShowSettings(true)} label="Settings">{Icons.settings}</IconButton>
                            <IconButton onClick={handleMenu} label="Main Menu">{Icons.home}</IconButton>
                        </div>

                        {/* Story Text */}
                        {currentScene.type === 'narrative' && (
                             <div className="absolute bottom-0 left-0 right-0 p-8 z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <p className="text-xl md:text-2xl font-semibold mb-2 text-cyan-300">{currentScene.character}</p>
                                <p className="text-lg md:text-xl text-gray-200">{currentScene.text}</p>
                            </div>
                        )}

                        {/* Interactive Prompt */}
                        {gameState === GameState.INTERACTIVE && currentScene.type === 'interactive' && (
                            <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-30 p-4">
                               <div className="w-full max-w-2xl text-center">
                                    <p className="text-2xl mb-8 text-gray-200">{currentScene.prompt}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {currentScene.options.map((opt, i) => (
                                            <GameButton key={i} onClick={() => handleInteraction(opt)}>{opt.text}</GameButton>
                                        ))}
                                    </div>
                                    <button onClick={() => setShowHint(true)} aria-label="Show Hint" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-cyan-300 font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                        {Icons.hint}
                                        Show Hint
                                    </button>
                                    {showHint && <p className="mt-4 p-4 bg-gray-800 rounded-lg text-cyan-300">{currentScene.hint}</p>}
                               </div>
                            </div>
                        )}

                        {/* Settings Modal */}
                        {showSettings && (
                            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-40">
                                <div className="bg-gray-800 p-8 rounded-lg shadow-2xl relative w-full max-w-md">
                                    <h2 className="text-3xl font-bold mb-6">Settings</h2>
                                    <IconButton onClick={() => setShowSettings(false)} label="Close" className="absolute top-4 right-4">{Icons.close}</IconButton>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl">Sound</span>
                                        <IconButton onClick={() => setIsSoundEnabled(!isSoundEnabled)} label="Toggle Sound">
                                            {isSoundEnabled ? Icons.soundOn : Icons.soundOff}
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            case GameState.PASS_FAIL:
                return <PassFailScreen isPass={passFailStatus!} onContinue={continueAfterPassFail} consequence={interactionConsequence} />;
            case GameState.END:
                return <EndScreen onReplay={handleReplay} onNext={handleNextStory} onMenu={handleMenu} />;
            default:
                return <div>Unknown game state</div>
        }
    };

    return <div className="font-sans">{renderContent()}</div>;
}