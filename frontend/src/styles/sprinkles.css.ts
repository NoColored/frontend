import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

import { vars } from './vars.css.ts';

const displayProperties = defineProperties({
  properties: {
    display: vars.display,
    justifyContent: vars.justifyContent,
    alignItems: vars.alignItems,
    flexDirection: vars.flexDirection,
    position: vars.position,
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: { selector: '' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
  },
});

const fontProperties = defineProperties({
  properties: {
    fontFamily: vars.fontFamily,
    fontWeight: vars.fontWeight,
    fontSize: vars.fontSize,
    lineHeight: vars.fontSize,
  },
  shorthands: {
    textSize: ['fontSize', 'lineHeight'],
  },
});

const spaceProperties = defineProperties({
  properties: {
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,

    marginLeft: vars.space,
    marginRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const borderProperties = defineProperties({
  properties: {
    borderStyle: vars.borderStyle,
    borderWidth: vars.borderWidth,
    borderRadius: vars.borderRadius,
    borderColor: vars.colors,
  },
  shorthands: {
    border: ['borderWidth', 'borderRadius', 'borderColor'],
  },
});

const sizeProperties = defineProperties({
  properties: {
    width: vars.size,
    height: vars.size,
  },
  shorthands: {
    size: ['width', 'height'],
  },
});

const zIndexProperties = defineProperties({
  properties: {
    zIndex: vars.zIndex,
  },
});

export const sprinkles = createSprinkles(
  displayProperties,
  borderProperties,
  spaceProperties,
  colorProperties,
  fontProperties,

  sizeProperties,
  zIndexProperties,
);
