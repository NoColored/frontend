// Button.tsx
import React, { ReactNode } from 'react';
import * as styles from './button.css.ts';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    size?: 'small' | 'medium' | 'large';
    color?: 'cancel' | 'confirm' | 'signUp'; // 추가 색상 옵션을 포함할 수 있음
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    size = 'medium',
    color = 'cancel',
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${styles.buttonStyle} ${styles.sizeVariants[size]} ${styles.colorVariants[color]}`}
        >
            {children}
        </button>
    );
};

export default Button;
