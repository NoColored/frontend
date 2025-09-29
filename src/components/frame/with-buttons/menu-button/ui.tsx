import { Menu as MenuIcon } from 'lucide-react';

import { button } from '../button.css';
import AccountSettingButton from './account-setting-button';
import { MENU_ID } from './constants';
import GameInfo from './game-info';
import { useMenuStore } from './store';

import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';
import Modal, { useModal } from '@/components/modal';

import SignUp from '@/features/sign-up';
import { useUserStatus } from '@/features/user';

const MenuItem = (props: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) => <SettingTextButton {...props} size='medium' colorStyle='black' />;

const Menu = ({ closeModal }: { closeModal: () => void }) => {
  const { setMenuId } = useMenuStore.getState();
  const { isGuest, isMember } = useUserStatus();

  return (
    <>
      <h3>메뉴</h3>
      <MenuItem onClick={() => {}} disabled>
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

const ModalItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const openId = useMenuStore((state) => state.id);

  if (id === openId) {
    return children;
  }

  return null;
};

const MenuButton = () => {
  const { setMenuId } = useMenuStore.getState();
  const { modalRef, openModal, closeModal } = useModal({
    onClose: () => setMenuId(MENU_ID.home),
  });

  return (
    <>
      <button type='button' onClick={openModal} className={button}>
        <MenuIcon size={16} />
      </button>
      <Modal ref={modalRef}>
        <ModalItem id={MENU_ID.home}>
          <Menu closeModal={closeModal} />
        </ModalItem>
        <ModalItem id={MENU_ID.gameInfo}>
          <GameInfo onClose={closeModal} />
        </ModalItem>
        <ModalItem id={MENU_ID.guest}>
          <SignUp closeModal={closeModal} />
        </ModalItem>
      </Modal>
    </>
  );
};

export default MenuButton;
