import { useCallback, useState } from 'react';
import type { GetPokemonParam } from '../types/pokemon';

export const useSelectGeneration = () => {
  const [generation, setGeneration] = useState<GetPokemonParam>({
    offset: 0,
    limit: 905,
  });

  const onSelectGeneration = useCallback(
    (generation: string) => {
      if (generation === '1') {
        setGeneration({
          offset: 0,
          limit: 151,
        });
      } else if (generation === '2') {
        setGeneration({
          offset: 151,
          limit: 100,
        });
      } else if (generation === '3') {
        setGeneration({
          offset: 251,
          limit: 135,
        });
      } else if (generation === '4') {
        setGeneration({
          offset: 386,
          limit: 107,
        });
      } else if (generation === '5') {
        setGeneration({
          offset: 493,
          limit: 156,
        });
      } else if (generation === '6') {
        setGeneration({
          offset: 649,
          limit: 72,
        });
      } else if (generation === '7') {
        setGeneration({
          offset: 721,
          limit: 88,
        });
      } else if (generation === '8') {
        setGeneration({
          offset: 809,
          limit: 96,
        });
      } else {
        setGeneration({
          offset: 0,
          limit: 905,
        });
      }
    },
    [setGeneration],
  );

  return { generation, onSelectGeneration };
};
