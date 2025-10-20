import { RouterProvider } from 'react-router-dom';

import router from './router';

import FullScreenPrompt from '@/components/prompt';

import { useSoundSetting } from '@/features/sound';

const App = () => {
  const { playBgm } = useSoundSetting();

  return (
    <div onClick={playBgm} role='presentation'>
      <FullScreenPrompt />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
