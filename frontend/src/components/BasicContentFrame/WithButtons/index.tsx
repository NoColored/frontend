import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import InfoButton from '@/components/BasicContentFrame/WithButtons/InfoButton';
import SettingButton from '@/components/BasicContentFrame/WithButtons/SettingButton/index';
import SettingIconButton from '@/components/button/SettingIconButton/index';
import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';

interface Props {
  children: ReactNode;
  backButtonLabel?: string;
  onBeforeButtonClick?: () => void;
  disableButton?: boolean;
}

const BasicContentFrame = ({
  children,
  backButtonLabel,
  onBeforeButtonClick,
  disableButton,
}: Props) => {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    if (onBeforeButtonClick) {
      onBeforeButtonClick();
    }
    navigate('/home', { replace: true });
  };

  const handleBackButtonClick = () => {
    if (onBeforeButtonClick) {
      onBeforeButtonClick();
    }
    navigate(-1);
  };

  return (
    <div className={styles.frame}>
      {!disableButton && (
        <div className={styles.iconButtons}>
          <InfoButton />
          <SettingIconButton
            src='/images/ui/icon/button/icon-button-home-h50w50.png'
            alt='home'
            onClick={handleHomeButtonClick}
          />
          <SettingButton />
        </div>
      )}
      <main className={styles.main}>
        {backButtonLabel && (
          <div className={styles.navigation}>
            <SettingNavigationButton
              label={backButtonLabel}
              onClick={handleBackButtonClick}
              position='leftTop'
            />
          </div>
        )}

        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
