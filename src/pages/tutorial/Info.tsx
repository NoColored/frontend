import { useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';

import Info0 from '@/pages/tutorial/Info0';
import Info1 from '@/pages/tutorial/Info1';
import Info2 from '@/pages/tutorial/Info2';

import { ROUTE } from '@/shared/constants';

interface Props {
  page: number;
}

const Info = ({ page }: Props) => {
  const navigate = useNavigate();

  if (page === 0) {
    return <Info0 />;
  }

  if (page === 1) {
    return <Info1 />;
  }

  if (page === 2) {
    return <Info2 />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{constants.INFO_DESC.TITLE}</div>
      <ColoredButton
        size='small'
        text={constants.INFO_DESC.BUTTON}
        color='green'
        onClick={() => {
          navigate(ROUTE.home);
        }}
      />
    </div>
  );
};

export default Info;
