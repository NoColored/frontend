import { useEffect, useState } from 'react';

import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

import * as constants from '@/pages/loading/constants.ts';

const Loading = () => {
  const [messageId, setMessageId] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const randomMessage = () => {
    const random = Math.floor(Math.random() * constants.LOADING_MESSAGE.length);
    setMessageId(constants.LOADING_MESSAGE[random].messageId);
    setMessage(constants.LOADING_MESSAGE[random].message);
  };

  useEffect(() => {
    randomMessage();
    const interval = setInterval(() => {
      randomMessage();
    }, constants.LOADING_MESSAGE_DELAY);

    return () => clearInterval(interval);
  }, []);

  return (
    <BasicContentFrame>
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingNumFont}>{constants.LOADING_TOP}</div>
        <img src={constants.LOADING_IMAGE} alt='loading' />
        <div className={styles.loadingMessageWrapper}>
          <div className={styles.loadingNumFont}># {messageId}</div>
          <div className={styles.loadingMessage}>{message}</div>
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Loading;
