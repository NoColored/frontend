import { useEffect, useState } from 'react';

import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

import { LOADING_MESSAGE } from '@/pages/loading/constants.ts';

const Loading = () => {
  const [messageId, setMessageId] = useState<string>();
  const [message, setMessage] = useState<string>();

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
        <div className={styles.loadingNumFont}>Loading...</div>
        <img src='/ui/loading/loading-animation-h100w100.gif' alt='loading' />
        <div className={styles.loadingMessageWrapper}>
          <div className={styles.loadingNumFont}>#{messageId}</div>
          <div className={styles.loadingMessage}>{message}</div>
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Loading;
