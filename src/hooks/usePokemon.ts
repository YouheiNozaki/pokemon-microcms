import { useQuery } from 'react-query';

export const usePokemon = (name: string) => {
  const getPokemon = async () => {
    if (!name) {
      return;
    }
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    ).then((res) => res.json());

    return pokemon;
  };

  const {
    data: pokemonSearchData,
    isError: pokemonSearchIsError,
    isLoading: pokemonSearchIsLoading,
    refetch: pokemonSearchRefetch,
  } = useQuery('pokemon', getPokemon, {
    staleTime: Infinity,
  });

  // useEffect(() => {
  //   if (name) {
  //     pokemonSearchRefetch();
  //   }
  // }, [name, pokemonSearchRefetch]);

  return {
    pokemonSearchData,
    pokemonSearchIsError,
    pokemonSearchIsLoading,
    pokemonSearchRefetch,
  };
};
