import * as constants from '../constants';
import * as styles from './index.css';

import type { failType } from '@/pages/play/finder/types';

interface Props {
  failed: failType;
}

const MessageModalContent = ({ failed }: Props) => {
  return (
    <>
      <div
        className={styles.messageText({ messageType: 'main' })}
      >{`${constants.FAIL_MESSAGE_MODAL[failed].message}`}</div>
      <div className={styles.messageText({ messageType: 'sub' })}>
        {constants.FAIL_MESSAGE_MODAL[failed].subMessage}
      </div>
    </>
  );
};

export default MessageModalContent;
