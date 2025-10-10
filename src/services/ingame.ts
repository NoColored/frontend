import { IngameReady } from '@/types/ingame';

import { api } from '@/features/api';

export const getIngameReady = async () => {
  try {
    const response = await api.get<IngameReady>(true, '/ingame/ready');
    return response.data;
  } catch (e) {
    // console.log(e);
    return null;
  }
};
