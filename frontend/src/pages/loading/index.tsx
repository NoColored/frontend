import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

const Loading = () => {
  const imageSrc = '/assets/ui/loading/loading-animation-h100w100.gif';

  return (
    <BasicContentFrame>
      <div className={styles.loadingWrapper}>
        <div>Loading...</div>
        <img src={imageSrc} alt='loading' />
        <div className={styles.loadingMessageWrapper}>
          <div>#27</div>
          <div className={styles.loadingMessage}>
            안녕하세요 이 아저씨들아 이거 잘 되는지 확인해보고 나 좀 쉬고
            쇼ㅣㅍ다 이제 이거 좀 늘려야겠다
          </div>
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Loading;
