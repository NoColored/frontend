import { api } from '@/features/api';

export const getMatching = async () => {
  return (
    api
      .get<string>(true, '/play/ranking')
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
    api
      .delete<string>(true, '/play/ranking')
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
