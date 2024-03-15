import { useEffect, useState } from 'react';

import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

import {
  LOADING_IMAGE,
  LOADING_MESSAGE,
  LOADING_TOP,
} from '@/pages/loading/constants.ts';

const Loading = () => {
  const [messageId, setMessageId] = useState<string>('000');
  const [message, setMessage] = useState<string>(
    '노칼라랜드에 오신 것을 환영합니다.',
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * LOADING_MESSAGE.length);
      setMessageId(LOADING_MESSAGE[random].messageId);
      setMessage(LOADING_MESSAGE[random].message);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <BasicContentFrame>
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingNumFont}>{LOADING_TOP}</div>
        <img src={LOADING_IMAGE} alt='loading' />
        <div className={styles.loadingMessageWrapper}>
          <div className={styles.loadingNumFont}>#{messageId}</div>
          <div className={styles.loadingMessage}>{message}</div>
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Loading;
