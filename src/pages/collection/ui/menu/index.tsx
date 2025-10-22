import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

import { getCollections } from '../../api';
import AchievementMenu from './achievement-menu';
import * as styles from './index.css';
import LabelMenu from './label-menu';
import SkinMenu from './skin-menu';

import SettingTextButton from '@/components/button/SettingTextButton';

const menu = {
  skin: '스킨',
  label: '칭호',
  achievement: '업적',
};

type Category = keyof typeof menu;

const CollectionMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('skin');

  const { data } = useQuery({
    queryKey: ['collection'],
    queryFn: getCollections,
    staleTime: 1000 * 90,
  });

  const collections = useMemo(() => {
    if (!data) {
      return null;
    }

    switch (selectedCategory) {
      case 'label':
        return <LabelMenu labels={data.labels} />;
      case 'achievement':
        return <AchievementMenu achievements={data.achievements} />;
      default:
        return <SkinMenu skins={data.skins} />;
    }
  }, [data, selectedCategory]);

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
      <div className={styles.collections}>{collections}</div>
    </div>
  );
};

export default CollectionMenu;
