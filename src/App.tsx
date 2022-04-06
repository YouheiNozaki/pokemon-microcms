import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PokemonList } from './components/PokemonList';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    </RecoilRoot>
  );
};
