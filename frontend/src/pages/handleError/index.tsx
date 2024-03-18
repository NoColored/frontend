import { useNavigate } from 'react-router-dom';

import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';
import ColoredButton from '@/components/button/ColoredButton/index.tsx';

const HandleError = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <BasicContentFrame>
      <div className={styles.errorWrapper}>
        <pre className={styles.errorMessage}>
          에러가 발생했습니다. 메인화면으로 돌아가시겠습니까?
        </pre>
        <ColoredButton
          text='확인'
          color='green'
          size='small'
          onClick={goBack}
        />
      </div>
    </BasicContentFrame>
  );
};

export default HandleError;
