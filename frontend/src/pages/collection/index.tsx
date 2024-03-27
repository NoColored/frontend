import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import * as styles from './index.css';
import SettingTextButton from '@/components/button/SettingTextButton';
import { useState } from 'react';
import Skin from '@/pages/collection/Skin';
import Label from '@/pages/collection/Label';
import Achievement from '@/pages/collection/Achievement';
import { useLoaderData } from 'react-router-dom';
import { User } from '@/types/auth';

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('skin');
  const user = useLoaderData() as User;

  const renderComponent = () => {
    switch (selectedCategory) {
      case 'skin':
        return <Skin />;
      case 'label':
        return <Label />;
      case 'achievement':
        return <Achievement />;
    }
  };

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.categoryButton}>
        <SettingTextButton
          onClick={() => setSelectedCategory('skin')}
          size='small'
          colorStyle={selectedCategory === 'skin' ? 'black' : 'realDark'}
        >
          스킨
        </SettingTextButton>
        <SettingTextButton
          onClick={() => setSelectedCategory('label')}
          size='small'
          colorStyle={selectedCategory === 'label' ? 'black' : 'realDark'}
        >
          칭호
        </SettingTextButton>
        <SettingTextButton
          onClick={() => setSelectedCategory('achievement')}
          size='small'
          colorStyle={selectedCategory === 'achievement' ? 'black' : 'realDark'}
        >
          업적
        </SettingTextButton>
      </div>
      <div className={styles.componentWrapper}>
        <div className={styles.firstComponentStyle}>
          <div
            style={{
              backgroundImage: `url(${user?.skin})`,
            }}
            className={styles.CharacterBox}
          >
            <span className={styles.titleText}>{`< ${user?.label} >`}</span>
          </div>
        </div>
        <div className={styles.secondComponentStyle}>{renderComponent()}</div>
      </div>
    </BasicContentFrame>
  );
};

export default Collection;
