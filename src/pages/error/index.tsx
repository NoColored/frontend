import { useNavigate, useParams } from 'react-router-dom';

import { ERROR_MESSAGE } from './constants';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';

import { ROUTE } from '@/shared/constants';

const Error = () => {
  const navigate = useNavigate();
  const code = useParams().code as ErrorCode;

  const goBack = () => {
    switch (code) {
      case '401':
        return navigate(ROUTE.main, { replace: true });
      case '404':
        return navigate(ROUTE.home, { replace: true });
      default:
        return navigate(-1);
    }
  };

  return (
    <div className={styles.errorWrapper}>
      <pre className={styles.errorMessage}>{ERROR_MESSAGE[code]}</pre>
      <ColoredButton text='확인' color='green' size='small' onClick={goBack} />
    </div>
  );
};

export default Error;
