'use client';

import { usePomodoroTimer } from '@/hooks/usePomodoroTimer';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function HomePage() {
  const { mode, timeLeft, isRunning, start, pause, reset, switchMode } = usePomodoroTimer();

  const isFocus = mode === 'focus';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-8 rounded-2xl bg-white px-16 py-12 shadow-sm">
        {/* Title */}
        <h1 className="text-lg font-semibold tracking-widest text-gray-400 uppercase">
          Focus Log
        </h1>

        {/* Mode badge */}
        <span
          className={`rounded-full px-4 py-1 text-sm font-medium ${
            isFocus
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-emerald-100 text-emerald-700'
          }`}
        >
          {isFocus ? 'Focus' : 'Break'}
        </span>

        {/* Timer display */}
        <p className="font-mono text-8xl font-bold tabular-nums text-gray-800">
          {formatTime(timeLeft)}
        </p>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={start}
            disabled={isRunning || timeLeft === 0}
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Start
          </button>
          <button
            onClick={pause}
            disabled={!isRunning}
            className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Pause
          </button>
          <button
            onClick={reset}
            className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-300"
          >
            Reset
          </button>
          <button
            onClick={switchMode}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
              isFocus
                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }`}
          >
            Switch Mode
          </button>
        </div>
      </div>
    </main>
  );
}
