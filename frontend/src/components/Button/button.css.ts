import { style } from '@vanilla-extract/css';
// 폰트가 필요하다면 여기서 추가
import { dnfFont } from '@/styles/font.css.ts';
import { vars } from '@/styles/vars.css.ts';

// 버튼의 기본 스타일을 정의하는 부분
export const buttonStyle = style({
    padding: '10px 20px',
    fontSize: '16px',
    fontFamily: dnfFont,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s  box-shadow 0.2s',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

// 버튼의 크기에 따른 스타일 변형을 정의하는 부분
export const sizeVariants = {
    small: style({
        fontSize: '20px',
        padding: '8px',
        height: '42px',
        width: '96px',
    }),
    medium: style({
        fontSize: '16px',
        padding: '16px',
    }),
    large: style({
        fontSize: '32px',
        padding: '16px',
        height: '80px',
        width: '256px',
    }),
};

// 버튼의 색상에 따른 스타일 변형을 정의합니다.
export const colorVariants = {
    cancel: style({
        backgroundColor: vars.colors.navy,
        boxShadow: `0 8px 12px ${vars.colors.navyDark}`,
        ':hover': {
            backgroundColor: '#0056b3',
        },
    }),
    confirm: style({
        backgroundColor: vars.colors.green,
        ':hover': {
            backgroundColor: '#545b62',
        },
    }),
    signUp: style({
        backgroundColor: vars.colors.blue,
        ':hover': {
            backgroundColor: '#545b62',
        },
    }),
    // 추가 색상 변형을 정의
};
