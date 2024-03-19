// iphone 14 pro max
import { ReactNode } from 'react';

export const MAX_HEIGHT = 431;
export const MAX_WIDTH = 932;
export const MAX_FRAME_HEIGHT = `${MAX_HEIGHT}px`;
export const MAX_FRAME_WIDTH = `${MAX_WIDTH}px`;

// iphone se
export const MIN_WIDTH = 667;
export const MIN_HEIGHT = 320;
export const PADDING = 16;
export const MIN_FRAME_HEIGHT = `${MIN_HEIGHT}px`;
export const MIN_FRAME_HEIGHT_WITH_PADDING = `${MIN_HEIGHT - PADDING * 2}px`;

export const MODAL_TYPE = {
  info: 'info',
  settings: 'settings',
} as const;

export type ModalType = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];

export interface Props {
  children: ReactNode;
  backButtonLabel?: string;
}
