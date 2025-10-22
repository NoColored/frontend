import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import router from './router';

import FullScreenPrompt from '@/components/prompt';

import { queryClient } from '@/features/api';
import { useSoundSetting } from '@/features/sound';

const App = () => {
  const { playBgm } = useSoundSetting();

  return (
    <div onClick={playBgm} role='presentation'>
      <FullScreenPrompt />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
