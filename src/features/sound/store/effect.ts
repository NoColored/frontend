import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { SETTING_KEY } from '../constants';

export const sfxAudioAtom = atom(new Audio('/music/blop.mp3'));

export const sfxSettingMutedAtom = atomWithStorage(SETTING_KEY.sfx, false);
