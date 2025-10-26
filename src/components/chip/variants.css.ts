import { sprinkles, variant } from '@/shared/styles';

export const color = variant(
  ['red', 'yellow', 'green', 'blue', 'pink', 'navy'] as const,
  (backgroundColor) =>
    sprinkles({
      backgroundColor,
    }),
);
