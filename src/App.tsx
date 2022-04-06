import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from './components/Main';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </RecoilRoot>
  );
};
