import ColoredButton from '@/components/button/ColoredButton/index.tsx';

interface Props {
  closeModal: () => void;
}

const LogInFail = ({ closeModal }: Props) => {
  return (
    <>
      <p>컬러랜드의 입국정보를 다시 한 번 확인해주세요.</p>
      <ColoredButton
        text='확인'
        color='green'
        size='small'
        onClick={closeModal}
      />
    </>
  );
};

export default LogInFail;
