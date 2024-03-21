import { createVar, style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const dashboardWrapper = style([
  sprinkles({
    borderRadius: '2x',
    borderColor: 'black',
    borderWidth: '3x',
    borderStyle: 'solid',
    padding: '1x',
  }),
  {
    minHeight: '64px',
    maxHeight: '84px',
    minWidth: '300px',
    width: '55%',
    display: 'grid',
    gridTemplateColumns: '75% 5% 20%',
    alignItems: 'center',
    justifyItems: 'center',
    color: 'white',
    backgroundColor: 'rgba(32, 29, 53, 0.6)',
  },
]);

export const cpAndNicknameWrapper = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween',
    height: 'full',
    width: 'full',
  }),
  {
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
]);
export const cpBarWrapper = style([
  sprinkles({
    borderStyle: 'solid',
    borderWidth: '1x',
    borderColor: 'black',
    backgroundColor: 'navy',
    borderRadius: '2x',
    height: 'full',
  }),
  {
    width: '100%',
    minWidth: '180px',
    maxWidth: '240px',
  },
]);

export const cpBarWidth = createVar();
export const cpBarGauge = style([
  sprinkles({
    borderRadius: '2x',
    backgroundColor: 'yellow',
    height: 'full',
  }),
  {
    width: cpBarWidth,
  },
]);

export const cpText = style([
  sprinkles({
    color: 'gray100',
    fontFamily: 'loadingTextFont',
    paddingLeft: '2x',
  }),
  {
    justifyContent: 'end',
    fontSize: '10px',
    textAlign: 'center',
    width: '100%',
    minWidth: '180px',
    maxWidth: '240px',
  },
]);

export const nicknameAndLevelWrapper = style([
  {
    display: 'grid',
    gridTemplateColumns: '80% 20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '2px',
    height: '100%',
  },
  {
    minWidth: '180px',
    maxWidth: '240px',
  },
]);

export const levelText = style([
  sprinkles({
    textSize: '1x',
    fontFamily: 'loadingNumFont',
    color: 'white',
  }),
]);
export const nicknameText = style([
  sprinkles({
    textSize: '1x',
  }),
]);

export const crossLine = style([
  sprinkles({
    backgroundColor: 'gray300',
  }),
  {
    minHeight: '48px',
    width: '2px',
    height: '70%',
  },
]);
