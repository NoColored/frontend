import { client } from '@/features/api';

export const createRoom = async (setting: RoomSetting) => {
  return client.post<string>('play/friendly', setting).then(({ data }) => data);
};

export const updateRoom = async (setting: RoomSetting) => {
  return client
    .post<string>('/play/friendly/renew', setting)
    .then(({ data }) => {
      console.log('room update:', data);
      return '';
    });
};
