import { RouterProvider } from 'react-router-dom';

import router from './router';

import { useSoundSetting } from '@/features/sound';

const App = () => {
  const { playBgm } = useSoundSetting();

  return (
    <div onClick={playBgm} role='presentation'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
