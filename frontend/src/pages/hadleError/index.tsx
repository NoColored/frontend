import { useNavigate } from 'react-router-dom';

import * as styles from './index.css.ts';

import ColoredButton from '@/components/button/ColoredButton/index.tsx';

import useModal from '@/hooks/useModal.tsx';

const HadleError = () => {
  const { Modal, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  openModal();

  const goBack = () => {
    closeModal();
    navigate('/');
  };

  return (
    <Modal>
      <div className={styles.errorText}>
        에러가 발생했습니다. 메인화면으로 돌아가시겠습니까?
      </div>
      <ColoredButton text='확인' color='green' size='small' onClick={goBack} />
    </Modal>
  );
};

export default HadleError;
