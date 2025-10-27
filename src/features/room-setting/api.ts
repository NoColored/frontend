import { api } from '@/shared/api';

export const createRoom = async (setting: RoomSetting) => {
  return api.post<string>('play/friendly', setting).then(({ data }) => data);
};

export const updateRoom = async (setting: RoomSetting) => {
  return api.post<string>('/play/friendly/renew', setting).then(({ data }) => {
    console.log('room update:', data);
    return '';
  });
};
