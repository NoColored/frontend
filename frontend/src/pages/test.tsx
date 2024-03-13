import SettingTextButton from '@/components/settingTextButton/index.tsx';

const Test = () => {
  return (
    <div>
      안녕하세요
      <SettingTextButton size='small' colorStyle='black'>
        칭호
      </SettingTextButton>
      <SettingTextButton size='large' colorStyle='navy'>
        회원탈퇴
      </SettingTextButton>
    </div>
  );
};

export default Test;
