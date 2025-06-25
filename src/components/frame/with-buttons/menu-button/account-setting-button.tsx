import { useLocation, useNavigate } from 'react-router-dom';

import SettingTextButton from '@/components/button/SettingTextButton';

import { ROUTE } from '@/router/constants';

interface Props {
  onClick?: () => void;
}

const AccountSettingButton = ({ onClick }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPlaying = location.pathname.includes('/play/lobby');

  if (isPlaying) {
    return null;
  }

  const handleClick = () => {
    onClick?.();
    navigate(ROUTE.setting);
  };

  return (
    <SettingTextButton onClick={handleClick} size='medium' colorStyle='black'>
      계정 설정
    </SettingTextButton>
  );
};

export default AccountSettingButton;
