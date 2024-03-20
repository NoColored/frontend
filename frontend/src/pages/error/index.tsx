import { useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/index';
import ColoredButton from '@/components/button/ColoredButton/index';

const HandleError = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <BasicContentFrame>
      <div className={styles.errorWrapper}>
        <pre className={styles.errorMessage}>
          {constants.SERVER_ERROR_MESSAGE}
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
