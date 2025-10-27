import { useEffect, useRef, useState } from 'react';

import * as styles from '@/pages/play/mode/index.css';

interface Props {
  isModalOpen: boolean;
}

const MATCHING_MESSAGES = ['매칭중', '매칭중.', '매칭중..', '매칭중...'];

export const MatchingText = ({ isModalOpen }: Props) => {
  const [matchingMessage, setMatchingMessage] = useState<string>();
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isModalOpen) {
      let messageIndex = 0;

      interval.current = setInterval(() => {
        setMatchingMessage(
          MATCHING_MESSAGES[messageIndex % MATCHING_MESSAGES.length],
        );
        messageIndex++;
      }, 500);
    } else {
      clearInterval(interval.current);
    }

    return () => clearInterval(interval.current);
  }, [isModalOpen]);

  return <div className={styles.matchingMessage}>{matchingMessage}</div>;
};
