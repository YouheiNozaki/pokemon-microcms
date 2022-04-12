import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
type Pokemon = {
  name: string;
};

const pokemonState = atom<Pokemon>({
  key: 'pokemonState',
  default: undefined,
});

export const usePokemonState = () => {
  const pokemonValue = useRecoilValue<Pokemon>(pokemonState);

  return { pokemonValue };
};

export const usePokemonMutators = () => {
  const setPokemonValue = useSetRecoilState<Pokemon>(pokemonState);

  const setPokemon = useCallback(
    (pokemon: Pokemon) => {
      setPokemonValue(pokemon);
    },
    [setPokemonValue],
  );

  return { setPokemon };
};
