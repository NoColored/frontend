import type { RoomInfo, RoomRequest } from '@/types/play';

import { api } from '@/services/index';

export const postCreateRoom = async (roomRequest: RoomRequest) => {
  try {
    const response = await api.post<RoomInfo, RoomRequest>(
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
