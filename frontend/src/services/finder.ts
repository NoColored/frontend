import type { Lobby, CreateRoom, RoomListItem, CodeRoom } from '@/types/play';

import { api } from '@/services/index';

export const getRoomList = async (offset: number) => {
  try {
    const response = await api.get<RoomListItem[]>(
      true,
      `play/friendly/list/${offset}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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

export const postEnterRoom = async (roomInfo: CodeRoom) => {
  return await api
    .post<string, CodeRoom>(true, 'play/friendly/enter', roomInfo)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return '';
    });
};
