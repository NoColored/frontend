import { sprinkles } from '@/styles/sprinkles.css';
import { variant } from '@/styles/utils';

export const color = variant(
  ['red', 'yellow', 'green', 'blue', 'pink', 'navy'] as const,
  (backgroundColor) =>
    sprinkles({
      backgroundColor,
    }),
);
