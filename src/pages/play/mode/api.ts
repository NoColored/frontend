import { client } from '@/shared/api';

export const getMatching = async () => {
  return (
    client
      .get<string>('/play/ranking')
      .then((response) => {
        // console.log('매칭 요청 성공');
        return response.status === 200;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.error(error);
        return false;
      })
  );
};

export const deleteMatching = async () => {
  return (
    client
      .delete<string>('/play/ranking')
      .then((response) => {
        // console.log('매칭 취소 요청 성공');
        return response.status === 200;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.error(error);
        return false;
      })
  );
};
