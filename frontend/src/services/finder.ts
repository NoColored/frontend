import type { CreateRoom, RoomListItem } from '@/types/play';

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
  return api
    .post<string, CreateRoom>(true, 'play/friendly', roomRequest)
    .then((res) => {
      console.log('방 생성 요청 성공');
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return '';
    });
};
