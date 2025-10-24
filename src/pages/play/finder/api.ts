import type { CreateRoom, RequestEnterRoom, RoomListItem } from '@/types/play';

import { api } from '@/features/api';

export const getRoomList = async (offset: number) => {
  return api
    .get<RoomListItem[]>(true, `play/friendly/list/${offset}`)
    .then((response) => {
      return response.data;
    });
};

export const postCreateRoom = async (roomRequest: CreateRoom) => {
  return (
    api
      .post<string, CreateRoom>(true, 'play/friendly', roomRequest)
      .then((res) => {
        // console.log('방 생성 요청 성공');
        return res.data;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(error);
        return '';
      })
  );
};

export const postEnterRoom = async (roomInfo: RequestEnterRoom) => {
  return await api
    .post<string, RequestEnterRoom>(true, 'play/friendly/enter', roomInfo)
    .then((res) => {
      return res.data;
    })
    // eslint-disable-next-line
    .catch((error) => {
      console.log(error);
      return '';
    });
};
