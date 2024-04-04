import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';

import useModal from '@/hooks/useModal';

export const PatchNotes = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <SettingTextButton onClick={openModal} size='small' colorStyle='red'>
        NEW !
      </SettingTextButton>
      <Modal>
        <pre style={{ lineHeight: '20px' }}>{`<잘 알겠다. 당신들의 수준>
- 신규맵 Food2, Factory 추가!
- 난이도 UP! 좁은 블럭에도 올라갈 수 있겠죠?

<더 이상의 공중전은 없다>
- 가장 꼭대기 층에서는 더 이상 아이템이 나오지 않습니다.

<너 브론즈야?>
- 전체적인 티어 컷을 조정하였습니다.
- 어제 브론즈였던 내가, 오늘은 골드?
`}</pre>
        <ColoredButton
          size='small'
          text='확인'
          color='green'
          onClick={closeModal}
        />
      </Modal>
    </>
  );
};
