import { useEffect } from 'react';
import { useQuery } from 'react-query';
import type { Pokemon } from '../types/pokemon';

type UsePokemonReturnValue = {
  pokemonData: Pokemon;
  pokemonIsError: boolean;
  pokemonIsLoading: boolean;
  pokemonRefetch: () => any;
};
type UsePokemon = (name: string) => UsePokemonReturnValue;

export const usePokemon: UsePokemon = (name) => {
  const getPokemon = async () => {
    if (!name) {
      return;
    }
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    ).then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    });

    return pokemon;
  };

  const {
    data: pokemonData,
    isError: pokemonIsError,
    isLoading: pokemonIsLoading,
    refetch: pokemonRefetch,
  } = useQuery('pokemon', getPokemon, {
    staleTime: Infinity,
  });

  useEffect(() => {
    if (name) {
      pokemonRefetch();
    }
  }, [name, pokemonRefetch]);

  return {
    pokemonData,
    pokemonIsError,
    pokemonIsLoading,
    pokemonRefetch,
  };
};
