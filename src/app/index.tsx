import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import router from './router';

import FullScreenPrompt from '@/components/prompt';

import { queryClient } from '@/features/api';
import { useBackgroundSound } from '@/features/sound';

const App = () => {
  const { playBackgroundSound } = useBackgroundSound();

  return (
    <div onClick={playBackgroundSound} role='presentation'>
      <FullScreenPrompt />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
