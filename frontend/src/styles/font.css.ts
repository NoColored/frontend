import { globalFontFace, style } from '@vanilla-extract/css';

// 글꼴 이름을 정확한 이름으로 변경
export const dnfFont = 'DNFBitBitv2';
export const numPixel = 'PixelAEBold';
export const loadingMain = 'DOSPilgiMedium';
export const numLoading = 'Chonkly';

// 웹에서 호스팅되는 글꼴에 대한 정의
globalFontFace(dnfFont, {
    src: 'url("//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf") format("opentype")',
});

globalFontFace(loadingMain, {
    src: 'url("//cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2") format("woff2")',
});

// 로컬에 저장된 글꼴에 대한 정의 (public 폴더 내의 경로 반영)
globalFontFace(numPixel, {
    src: 'url("/fonts/PixelAE-Bold.ttf") format("truetype")',
});

globalFontFace(numLoading, {
    src: 'url("/fonts/Chonkly.otf") format("opentype")',
});

// 스타일 정의에서 글꼴 이름을 실제 문자열 값으로 변경
export const mainFont = style({
    fontFamily: dnfFont,
});

export const numFont = style({
    fontFamily: numPixel,
});

export const loadingFont = style({
    fontFamily: loadingMain,
});

export const loadingNum = style({
    fontFamily: numLoading,
});

/*
* 사용 예시
* import * as styles from "@/styles/font.css.ts"; 를 선언
* className에 styles.mainFont와 같이 필요한 폰트를 선언.
*
* <div className={styles.mainFont}>This is text with the DNFBitBitv2 font.</div>
*  */