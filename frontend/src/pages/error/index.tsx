import { useNavigate, useParams } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';

import type { errorCode } from '@/pages/error/type';

const Error = () => {
  const navigate = useNavigate();
  const code = useParams().code as errorCode;

  const goBack = () => {
    if (code === '401') {
      navigate('/', { replace: true });
      return;
    }
    navigate(-1);
  };

  return (
    <BasicContentFrame disableButton>
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
