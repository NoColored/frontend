export const INPUT_TEXT_BOX_SIZE = {
  small: {
    width: '360px',
    height: '40px',
  },
  medium: {
    width: '400px',
    height: '48px',
  },
  large: {
    width: '480px',
    height: '64px',
    margin: 8,
  },
} as const;

export const INPUT_SIZE_TYPE = ['small', 'medium', 'large'] as const;

export const INPUT_TYPE = ['text', 'number', 'password'] as const;
