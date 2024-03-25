import type { Lobby, CreateRoom } from '@/types/play';

import { api } from '@/services/index';

export const postCreateRoom = async (roomRequest: CreateRoom) => {
  try {
    const response = await api.post<Lobby, CreateRoom>(
      true,
      'play/friendly',
      roomRequest,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
