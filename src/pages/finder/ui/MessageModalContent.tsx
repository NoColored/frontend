import * as styles from './index.css';

const FAIL_MESSAGE_MODAL = {
  SEARCH: {
    message: '진짜로 방장이\n허락했나요?',
    subMessage: '방 코드나 비밀번호를 한 번 더 확인해주세요',
  },
  PASSWORD: {
    message: '9998번만\n더 시도해보시는건 어때요?',
    subMessage: '비밀번호를 한 번 더 확인해주세요',
  },
  ENTER: {
    message: '노컬러랜드는 5인 이상\n거리두기 수칙을 준수합니다',
    subMessage: '플레이 가능 인원을 초과하였습니다',
  },
} as const;

interface Props {
  failed: keyof typeof FAIL_MESSAGE_MODAL;
}

const MessageModalContent = ({ failed }: Props) => {
  return (
    <>
      <div className={styles.messageText({ messageType: 'main' })}>
        {FAIL_MESSAGE_MODAL[failed].message}
      </div>
      <div className={styles.messageText({ messageType: 'sub' })}>
        {FAIL_MESSAGE_MODAL[failed].subMessage}
      </div>
    </>
  );
};

export default MessageModalContent;
