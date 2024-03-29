import { useEffect, useRef, useState } from 'react';

import * as constants from '@/pages/play/mode/constants';
import * as styles from '@/pages/play/mode/index.css';

interface Props {
  isModalOpen: boolean;
}

export const MatchingText = ({ isModalOpen }: Props) => {
  const [matchingMessage, setMatchingMessage] = useState<string>();
  const interval = useRef<number>();

  useEffect(() => {
    if (isModalOpen) {
      let messageIndex = 0;

      interval.current = setInterval(() => {
        setMatchingMessage(
          constants.MATCHING_MESSAGES[
            messageIndex % constants.MATCHING_MESSAGES.length
          ],
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
