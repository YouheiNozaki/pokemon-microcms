import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type Pokemon = {
  name: string;
};

const pokemonState = atom<Pokemon | undefined>({
  key: 'pokemonState',
  default: undefined,
});

export const usePokemonState = () => {
  const pokemonValue = useRecoilValue<Pokemon | undefined>(pokemonState);
  const setPokemonValue = useSetRecoilState<Pokemon | undefined>(pokemonState);

  return { pokemonValue, setPokemonValue };
};
