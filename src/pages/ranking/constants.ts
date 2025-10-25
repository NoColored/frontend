import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/shared/styles';

export const TITLE_TEXT_WIDTH = '193px';
export const TITLE_TEXT_HEIGHT = '56px';

export const RANKINGITEMBOX_HEIGHT = '48px';

export const MYRANKINGITEMBOX_HEIGHT = '60px';

export const TIERANDSORE_WIDTH = '140px';

export const PLAYERINFOBOX_WIDTH = '212px';

export const RANKINGWRAPPER_HEIGHT = calc.subtract(
  '92%',
  calc.add(
    calc.add(TITLE_TEXT_HEIGHT, vars.space['3x']),
    calc.add(MYRANKINGITEMBOX_HEIGHT, vars.space['3x']),
  ),
);

export const RANKING_TITLE = 'RANKING';

export const GUEST_TEXT = '게스트는 티어가 부여되지 않아요';

export const GUEST_TEXT_SIZE = '13px';

export const GUEST_TEXT_WIDTH = '644px';

export const RANKTEXT_WARRAPER_WIDTH = '63px';
