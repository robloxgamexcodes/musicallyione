import type { StoriesBlock } from './ui';

export const p = (text: string): StoriesBlock => ({ t: 'p', text });
export const ul = (...items: string[]): StoriesBlock => ({ t: 'ul', items });
export const steps = (...items: [string, string][]): StoriesBlock => ({
  t: 'steps',
  items: items.map(([title, text]) => ({ title, text })),
});
export const callout = (text: string): StoriesBlock => ({ t: 'callout', text });
