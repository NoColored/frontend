import { IngameReady } from '@/types/ingame';

import { api } from '@/services/index';

export const getIngameReady = async () => {
  try {
    const response = await api.get<IngameReady>(true, '/ingame/ready/dummy');
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
