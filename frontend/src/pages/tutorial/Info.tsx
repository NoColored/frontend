import { useNavigate } from 'react-router-dom';

import ColoredButton from '@/components/button/ColoredButton';

import Info0 from '@/pages/tutorial/Info0';

import { ROUTE } from '@/router/constants';

interface Props {
  page: number;
}

const Info = ({ page }: Props) => {
  const navigate = useNavigate();

  if (page === 0) {
    return <Info0 />;
  }

  return (
    <div>
      <ColoredButton
        size='small'
        text='확인'
        color='green'
        onClick={() => {
          navigate(ROUTE.home, { replace: true });
        }}
      />
    </div>
  );
};

export default Info;
