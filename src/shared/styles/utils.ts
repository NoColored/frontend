import { style } from '@vanilla-extract/css';

type Style = ReturnType<typeof style>;

export function variant<T extends string>(
  arr: T[],
  styleFn: (item: T) => Style,
): Record<T, Style>;

export function variant<T extends string, V>(
  obj: Record<T, V>,
  styleFn: (entry: [T, V]) => Style,
): Record<T, Style>;

export function variant<T extends string, V>(
  obj: T[] | Record<T, V>,
  styleFn: (value: T | [T, V]) => Style,
) {
  if (Array.isArray(obj)) {
    return Object.fromEntries(obj.map((item) => [item, styleFn(item)]));
  }
  return Object.fromEntries(
    (Object.entries(obj) as [T, V][]).map((entry) => [
      entry[0],
      styleFn(entry),
    ]),
  );
}
