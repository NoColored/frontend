import { Menu as MenuIcon } from 'lucide-react';

import { button } from '../button.css';
import { MENU_ID } from './constants';
import MenuItem from './menu-item';
import { useMenuStore } from './store';

import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';
import GameInfo from '@/components/frame/with-buttons/InfoButton/ModalContent';

import useModal from '@/hooks/useModal';

const MenuButton = () => {
  const { setMenuId } = useMenuStore.getState();
  const { Modal, openModal, closeModal } = useModal({
    onClose: () => setMenuId(MENU_ID.home),
  });

  return (
    <>
      <button type='button' onClick={openModal} className={button}>
        <MenuIcon size={16} />
      </button>
      <Modal>
        <MenuItem id={MENU_ID.home}>
          <h3>메뉴</h3>
          <SettingTextButton
            onClick={() => setMenuId(MENU_ID.gameInfo)}
            size='medium'
            colorStyle='black'
          >
            게임 정보
          </SettingTextButton>
          <ColoredButton
            text='닫기'
            color='green'
            size='small'
            onClick={closeModal}
          />
        </MenuItem>
        <MenuItem id={MENU_ID.gameInfo}>
          <GameInfo onClose={closeModal} />
        </MenuItem>
      </Modal>
    </>
  );
};

export default MenuButton;
