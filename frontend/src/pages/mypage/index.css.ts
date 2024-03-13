import { style } from '@vanilla-extract/css';

export const mainImage = style([]);

export const categoryButton = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px', // 버튼 사이의 간격
});

export const imageContainer = style({
  display: 'inline-block',
  width: '240px',
  height: '240px',
  left: '32px',
  top: '60px',
  position: 'absolute',
  overflow: 'hidden',
});

export const title = style({
  position: 'absolute',
  top: '0',
  width: '100%',
  textAlign: 'center',
});
export const characterImage = style({
  position: 'absolute',
  left: '-403%',
});

export const shadow = style({
  position: 'absolute',
  width: '240px',
  height: '48px',
  bottom: '70px',
  left: '24px',
  background:
    'radial-gradient(50% 50% at 50% 50%, #201D35 0%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '24px',
});

export const saveButton = style({
  position: 'absolute',
  bottom: '40px',
  left: '15%',
});
