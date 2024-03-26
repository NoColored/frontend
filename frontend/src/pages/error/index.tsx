import { useNavigate, useParams } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/index';
import ColoredButton from '@/components/button/ColoredButton/index';

import type { errorCode } from '@/pages/error/type';

const Error = () => {
  const navigate = useNavigate();
  const code = useParams().code as errorCode;

  const goBack = () => {
    if (code === '500') {
      navigate(-1);
    }
    navigate('/');
  };

  return (
    <BasicContentFrame>
      <div className={styles.errorWrapper}>
        <pre className={styles.errorMessage}>
          {constants.ERROR_MESSAGE[code]}
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

export default Error;
