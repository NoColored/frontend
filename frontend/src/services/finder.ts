import type { RoomInfo, RoomListInfo, RoomRequest } from '@/types/play';

import { api } from '@/services/index';

export const getRoomList = async () => {
  try {
    const response = await api.get<RoomListInfo>(true, 'play/friendly/{}');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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
