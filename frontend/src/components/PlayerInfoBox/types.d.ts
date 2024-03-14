import * as constants from './constants.ts';

interface PlayerInfoBoxProps {
  label: string;
  nickname: string;

  // url 혹은 넘버 등으로 추후 변경 예정.
  skin?: string;
  tier?: string;
}
