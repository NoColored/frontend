import { globalFontFace } from '@vanilla-extract/css';

// 글꼴 이름을 정확한 이름으로 변경
export const textFont = 'DNFBitBitv2';
export const numFont = 'PixelAEBold';
export const loadingTextFont = 'DOSPilgiMedium';
export const loadingNumFont = 'Chonkly';

// 웹에서 호스팅되는 글꼴에 대한 정의
globalFontFace(textFont, {
  src: 'url("//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf") format("opentype")',
});

globalFontFace(loadingTextFont, {
  src: 'url("//cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2") format("woff2")',
});

// 로컬에 저장된 글꼴에 대한 정의 (public 폴더 내의 경로 반영)
globalFontFace(numFont, {
  src: 'url("/fonts/PixelAE-Bold.ttf") format("truetype")',
});

globalFontFace(loadingNumFont, {
  src: 'url("/fonts/Chonkly.otf") format("opentype")',
});
