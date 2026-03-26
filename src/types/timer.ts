export type Mode = 'focus' | 'break';

export const DURATIONS: Record<Mode, number> = {
  focus: 25 * 60,
  break: 5 * 60,
};
