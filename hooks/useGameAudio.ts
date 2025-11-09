import { useState, useRef, useCallback, useEffect } from 'react';
import { decode, decodeAudioData } from '../audioUtils';

// Webkit browsers require their own audio context
// Fix: Cast window to any to allow access to webkitAudioContext for Safari compatibility.
const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

export const useGameAudio = (isSoundEnabled: boolean) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioQueueRef = useRef<string[]>([]);
  const currentSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const onFinishedCallbackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Initialize AudioContext on first user interaction (or component mount)
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new AudioContext({ sampleRate: 24000 });
      } catch (e) {
        console.error("Web Audio API is not supported in this browser", e);
      }
    }
    
    return () => {
        audioContextRef.current?.close();
    }
  }, []);

  const stop = useCallback(() => {
    if (currentSourceRef.current) {
      currentSourceRef.current.onended = null;
      currentSourceRef.current.stop();
      currentSourceRef.current = null;
    }
    audioQueueRef.current = [];
    setIsPlaying(false);
  }, []);


  const playNextInQueue = useCallback(async () => {
    if (audioQueueRef.current.length === 0 || !isSoundEnabled || !audioContextRef.current) {
      setIsPlaying(false);
      onFinishedCallbackRef.current?.();
      onFinishedCallbackRef.current = null;
      return;
    }

    setIsPlaying(true);
    const base64Audio = audioQueueRef.current.shift();

    if (!base64Audio) {
      playNextInQueue();
      return;
    }

    try {
      const decodedData = decode(base64Audio);
      const audioBuffer = await decodeAudioData(decodedData, audioContextRef.current, 24000, 1);

      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.onended = () => {
        currentSourceRef.current = null;
        playNextInQueue();
      };
      source.start(0);
      currentSourceRef.current = source;
    } catch (error) {
      console.error("Error playing audio:", error);
      playNextInQueue();
    }
  }, [isSoundEnabled]);

  const play = useCallback((base64Audio: string | null, onFinished?: () => void) => {
    stop(); // PREVENTS ECHO: Stop any currently playing audio and clear the queue.
    if (!base64Audio || !isSoundEnabled) {
      onFinished?.();
      return;
    }
    audioQueueRef.current = [base64Audio];
    onFinishedCallbackRef.current = onFinished || null;
    playNextInQueue();
  }, [playNextInQueue, isSoundEnabled, stop]);

  const pause = useCallback(() => {
      if(audioContextRef.current?.state === 'running') {
          audioContextRef.current.suspend();
          setIsPlaying(false);
      }
  }, []);
  
  const resume = useCallback(() => {
    if(audioContextRef.current?.state === 'suspended' && isSoundEnabled) {
        audioContextRef.current.resume();
        setIsPlaying(true);
    }
  }, [isSoundEnabled]);


  return { play, stop, pause, resume, isPlaying };
};