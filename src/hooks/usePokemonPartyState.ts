import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type Pokemon = {
  name: string;
};

const pokemonPartyState = atom<Pokemon[] | undefined>({
  key: 'pokemonPartyState',
  default: undefined,
});

export const usePokemonPartyState = () => {
  const pokemonParty = useRecoilValue<Pokemon[] | undefined>(pokemonPartyState);
  const setPokemonParty = useSetRecoilState<Pokemon[] | undefined>(
    pokemonPartyState,
  );

  return { pokemonParty, setPokemonParty };
};
