import { api } from '@/shared/api';

export const getRoomList = async (offset: number) => {
  return api
    .get<RoomPreview[]>(`play/friendly/list/${offset}`)
    .then(({ data }) => {
      console.debug('room list:', data);
      return data;
    });
};

export const postEnterRoom = async (roomInfo: EnterRoomRequest) => {
  return (
    api
      .post<string>('play/friendly/enter', roomInfo)
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
