import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import * as styles from './index.css';
import SettingTextButton from '@/components/button/SettingTextButton';
import { useUserStateStore } from '@/states/user';
import { useState } from 'react';
import Skin from '@/pages/collection/Skin';
import Label from '@/pages/collection/Label';
import Achievement from '@/pages/collection/Achievement';

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('skin');
  const user = useUserStateStore((state) => state.user);

  const renderComponent = () => {
    switch (selectedCategory) {
      case 'skin':
        return <Skin />;
      case 'label':
        return <Label />;
      case 'achievement':
        return <Achievement />;
      default:
        return <Skin />;
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
        <div>
          <div
            style={{
              backgroundImage: `url(${user?.skin})`,
            }}
            className={styles.CharacterBox}
          >
            <span className={styles.titleText}>{`< ${user?.title} >`}</span>
          </div>
        </div>
        {renderComponent()}
      </div>
    </BasicContentFrame>
  );
};

export default Collection;
