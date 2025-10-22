import { useLoaderData } from 'react-router-dom';

import { updateLabel, updateSkin } from '../api';
import {
  useSelectedCollection,
  useSelectedLabel,
  useSelectedSkin,
} from '../hooks';
import { CollectionProvider } from '../provider';
import CollectionMenu from './menu';
import * as styles from './page.css';

import SettingTextButton from '@/components/button/SettingTextButton';
import BasicContentFrame from '@/components/frame/with-buttons';

import { queryClient } from '@/features/api';
import { useUserInfo } from '@/features/user';

const SelectedSkin = () => {
  const skin = useSelectedSkin();

  return <img src={skin} alt='selected-skin' className={styles.mySkin} />;
};

const SelectedLabel = () => {
  const label = useSelectedLabel();

  return <span className={styles.label}>{`< ${label} >`}</span>;
};

const SaveButton = () => {
  const { user, refetchUser } = useUserInfo();
  const { skin, label } = useSelectedCollection();
  const isSkinChanged = user && user.skin !== skin.url;
  const isLabelChanged = user && user.label !== label.name;
  const isDisabled = !user || (!isSkinChanged && !isLabelChanged);

  const onClick = async () => {
    const promises = [];

    if (isSkinChanged) {
      promises.push(updateSkin(skin.id));
    }
    if (isLabelChanged) {
      promises.push(updateLabel(label.id));
    }

    if (promises.length > 0) {
      await Promise.all(promises);
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['collection'],
        }),
        refetchUser(),
      ]);
    }
  };

  return (
    <SettingTextButton
      onClick={onClick}
      size='small'
      colorStyle='black'
      disabled={isDisabled}
    >
      저장
    </SettingTextButton>
  );
};

const CollectionPage = () => {
  const user = useLoaderData() as User;

  return (
    <CollectionProvider equippedSkinUrl={user.skin} equippedLabel={user.label}>
      <BasicContentFrame leftButton={{ label: '뒤로' }}>
        <div className={styles.gridBox}>
          <div className={styles.characterWrapper}>
            <SelectedLabel />
            <SelectedSkin />
            <div className={styles.submitButtonWrapper}>
              <SaveButton />
            </div>
          </div>
          <CollectionMenu />
        </div>
      </BasicContentFrame>
    </CollectionProvider>
  );
};

export default CollectionPage;
