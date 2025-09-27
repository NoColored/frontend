import { RouterProvider } from 'react-router-dom';

import { useSoundSetting } from '@/features/sound';
import router from '@/router';

const App = () => {
  const { playBgm } = useSoundSetting();

  return (
    <div onClick={playBgm} role='presentation'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
