import { useLocation, useNavigate } from 'react-router-dom';

import SettingTextButton from '@/components/button/SettingTextButton';

import { ROUTE } from '@/constants/routes';

interface Props {
  onClick?: () => void;
}

const EXCLUDED_PATHS = [ROUTE.lobby, ROUTE.setting];

const AccountSettingButton = ({ onClick }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const disabled = EXCLUDED_PATHS.some((path) =>
    location.pathname.startsWith(path),
  );

  if (disabled) {
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
