import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

import { vars } from './vars.css.ts';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    // 여기서 선언한 것 외에는 못씀
    margin: vars.space,
    padding: vars.space,
    display: vars.display,
    justifyContent: vars.justifyContent,
    alignItems: vars.alignItems,
    flexDirection: vars.flexDirection,
    alignItem: vars.alignItems,
    borderRadius: vars.borderRadius,
    lineHeight: vars.lineHeight,
  },
});

const colorProperties = defineProperties({
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
  },
});

const textProperties = defineProperties({
  properties: {
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
  },
});
export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  textProperties,
);
