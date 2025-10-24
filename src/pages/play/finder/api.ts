import { api } from '@/features/api';

export const getRoomList = async (offset: number) => {
  return api
    .get<RoomListItem[]>(true, `play/friendly/list/${offset}`)
    .then((response) => {
      return response.data;
    });
};

export const postEnterRoom = async (roomInfo: RequestEnterRoom) => {
  return (
    api
      .post<string, RequestEnterRoom>(true, 'play/friendly/enter', roomInfo)
      .then((res) => {
        return res.data;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(error);
        return '';
      })
  );
};
