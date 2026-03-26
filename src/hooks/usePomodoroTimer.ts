'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { DURATIONS, type Mode } from '@/types/timer';

export type TimerState = {
  mode: Mode;
  timeLeft: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
  switchMode: () => void;
};

export function usePomodoroTimer(): TimerState {
  const [mode, setMode] = useState<Mode>('focus');
  const [timeLeft, setTimeLeft] = useState(DURATIONS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);

  const start = useCallback(() => {
    if (isRunning || timeLeft === 0) return;
    setIsRunning(true);
  }, [isRunning, timeLeft]);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(DURATIONS[mode]);
  }, [mode]);

  const switchMode = useCallback(() => {
    setIsRunning(false);
    setMode((prev) => {
      const next: Mode = prev === 'focus' ? 'break' : 'focus';
      setTimeLeft(DURATIONS[next]);
      return next;
    });
  }, []);

  return { mode, timeLeft, isRunning, start, pause, reset, switchMode };
}
