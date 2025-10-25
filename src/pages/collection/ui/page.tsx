import { updateLabel, updateSkin } from '../api';
import {
  useSelectedCollection,
  useSelectedLabelName,
  useSelectedSkinUrl,
} from '../hooks';
import { CollectionProvider } from '../provider';
import CollectionMenu from './menu';
import * as styles from './page.css';

import SettingTextButton from '@/components/button/SettingTextButton';

import { refetchCollection } from '@/models/collection';
import { useUserInfo } from '@/models/user';

const SelectedSkin = () => {
  const skin = useSelectedSkinUrl();

  return <img src={skin} alt='selected-skin' className={styles.mySkin} />;
};

const SelectedLabel = () => {
  const label = useSelectedLabelName();

  return <span className={styles.label}>{`< ${label} >`}</span>;
};

const SaveButton = ({
  equipped,
  onSave,
}: {
  equipped: {
    skin: string;
    label: string;
  };
  onSave: () => Promise<void>;
}) => {
  const { skin, label } = useSelectedCollection();
  const isSkinChanged = equipped.skin !== skin.url;
  const isLabelChanged = equipped.label !== label.name;
  const isDisabled = !isSkinChanged && !isLabelChanged;

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
      await Promise.all([refetchCollection(), onSave()]);
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
  const { user, refetchUser } = useUserInfo();

  if (!user) {
    return null;
  }

  return (
    <CollectionProvider equippedSkinUrl={user.skin} equippedLabel={user.label}>
      <div className={styles.gridBox}>
        <div className={styles.characterWrapper}>
          <SelectedLabel />
          <SelectedSkin />
          <div className={styles.submitButtonWrapper}>
            <SaveButton onSave={refetchUser} equipped={user} />
          </div>
        </div>
        <CollectionMenu />
      </div>
    </CollectionProvider>
  );
};

export default CollectionPage;
