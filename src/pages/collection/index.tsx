import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import * as styles from './index.css';

import { User } from '@/types/auth';

import SettingTextButton from '@/components/button/SettingTextButton';
import BasicContentFrame from '@/components/frame/with-buttons';

import Achievement from '@/pages/collection/Achievement';
import Label from '@/pages/collection/Label';
import Skin from '@/pages/collection/Skin';

import { patchLabelChange, patchSkinChange } from '@/services/collections';

import { useCollectionStateStore } from '@/states/collection';

const Collection = () => {
  const user = useLoaderData() as User;
  const { skinId, skinUrl, labelId, labelName, setLabelName, setSkinUrl } =
    useCollectionStateStore();
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('skin');

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

  const categorySubmit = async () => {
    setSaveSuccess(false);

    if (selectedCategory === 'skin') {
      await patchSkinChange(skinId);
    }
    if (selectedCategory === 'label') {
      await patchLabelChange(labelId);
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  useEffect(() => {
    if (user.label && user.skin) {
      setLabelName(user.label);
      setSkinUrl(user.skin);
    }
  }, [setLabelName, user.label]);

  return (
    <BasicContentFrame leftButton={{ label: '뒤로' }}>
      <div className={styles.gridBox}>
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
            colorStyle={
              selectedCategory === 'achievement' ? 'black' : 'realDark'
            }
          >
            업적
          </SettingTextButton>
        </div>
        <div className={styles.characterWrapper}>
          {saveSuccess && (
            <div className={styles.submitSuccessMessage}>장착 완료!</div>
          )}
          <div className={styles.character}>
            <div
              style={{
                backgroundImage: `url(${skinUrl})`,
              }}
              className={styles.mySkin}
            >
              <span className={styles.label}>{`< ${labelName} >`}</span>
            </div>
            <div className={styles.submitButtonWrapper}>
              {selectedCategory !== 'achievement' && (
                <SettingTextButton
                  onClick={categorySubmit}
                  size='small'
                  colorStyle='black'
                >
                  저장
                </SettingTextButton>
              )}
            </div>
          </div>
        </div>
        <div className={styles.collections}>{renderComponent()}</div>
      </div>
    </BasicContentFrame>
  );
};

export default Collection;
