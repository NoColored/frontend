import { Menu as MenuIcon } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import { button } from '../button.css';
import AccountSettingButton from './account-setting-button';
import GameInfo from './game-info';

import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';
import Modal, { useModal } from '@/components/modal';

import SignUp from '@/features/sign-up';
import { useUserStatus } from '@/features/user';

const MENU_ID = {
  home: 'menu-home',
  gameInfo: 'game-info',
  guest: 'become-member',
};

const MenuItem = (props: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) => <SettingTextButton {...props} size='medium' colorStyle='black' />;

const Menu = ({
  closeModal,
  setMenuId,
}: {
  closeModal: () => void;
  setMenuId: (id: string) => void;
}) => {
  const { isGuest, isMember } = useUserStatus();

  return (
    <>
      <h3>메뉴</h3>
      <MenuItem
        onClick={() => window.open('https://nocolored.notion.site/', '_blank')}
      >
        공지 사항
      </MenuItem>
      <MenuItem onClick={() => setMenuId(MENU_ID.gameInfo)}>게임 정보</MenuItem>
      {isMember && <AccountSettingButton onClick={closeModal} />}
      {isGuest && (
        <MenuItem onClick={() => setMenuId(MENU_ID.guest)}>회원 전환</MenuItem>
      )}
      <ColoredButton
        text='닫기'
        color='green'
        size='small'
        onClick={closeModal}
      />
    </>
  );
};

const MenuButton = () => {
  const [menuId, setMenuId] = useState<string>(MENU_ID.home);

  const onClose = useCallback(() => setMenuId(MENU_ID.home), []);

  const { modalRef, openModal, closeModal } = useModal({
    onClose,
  });

  const ModalContent = useMemo(() => {
    switch (menuId) {
      case MENU_ID.gameInfo:
        return <GameInfo onClose={closeModal} />;
      case MENU_ID.guest:
        return <SignUp closeModal={closeModal} isGuest />;
      default:
        return <Menu closeModal={closeModal} setMenuId={setMenuId} />;
    }
  }, [menuId]);

  return (
    <>
      <button type='button' onClick={openModal} className={button}>
        <MenuIcon size={16} />
      </button>
      <Modal ref={modalRef}>{ModalContent}</Modal>
    </>
  );
};

export default MenuButton;
