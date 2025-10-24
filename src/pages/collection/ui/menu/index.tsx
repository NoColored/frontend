import { useMemo, useState } from 'react';

import AchievementMenu from './achievement-menu';
import * as styles from './index.css';
import LabelMenu from './label-menu';
import SkinMenu from './skin-menu';

import SettingTextButton from '@/components/button/SettingTextButton';

import { useCollection } from '@/features/collection';

const menu = {
  skin: '스킨',
  label: '칭호',
  achievement: '업적',
};

type Category = keyof typeof menu;

const CollectionMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('skin');

  const { collection } = useCollection();

  const collectionMenu = useMemo(() => {
    if (!collection) {
      return null;
    }

    switch (selectedCategory) {
      case 'label':
        return <LabelMenu labels={collection.labels} />;
      case 'achievement':
        return <AchievementMenu achievements={collection.achievements} />;
      default:
        return <SkinMenu skins={collection.skins} />;
    }
  }, [collection, selectedCategory]);

  return (
    <div className={styles.menu}>
      <div className={styles.categoryButton}>
        {Object.entries(menu).map(([key, title]) => (
          <SettingTextButton
            key={key}
            onClick={() => setSelectedCategory(key as Category)}
            size='small'
            colorStyle={selectedCategory === key ? 'black' : 'realDark'}
          >
            {title}
          </SettingTextButton>
        ))}
      </div>
      <div className={styles.collections}>{collectionMenu}</div>
    </div>
  );
};

export default CollectionMenu;
