import { useCallback, useEffect, useState } from 'react';
import { microcmsPostData, microcmsUpdateStyle } from '../lib/microcms';
import type { Pokemon } from '../types/pokemon';

type UseMicrocms = (pokemon: Pokemon) => [Pokemon | undefined];

export const useMicrocms: UseMicrocms = (pokemon) => {
  const [id, setId] = useState<string>('');
  const [data, setData] = useState<Pokemon>(pokemon);

  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (
        e.isTrusted === true &&
        e.data.action === 'MICROCMS_GET_DEFAULT_DATA'
      ) {
        setId(e.data.id);
        setData(e.data.message?.data);
        microcmsUpdateStyle({
          id: e.data.id,
          message: {
            height: 500,
          },
        });
      }
    });
  }, []);

  const selectData = useCallback(
    (pokemon: Pokemon) => {
      setData(pokemon);
      microcmsPostData({
        id,
        message: {
          id: pokemon.name,
          title: pokemon.name,
          imageUrl: pokemon.sprites?.front_default,
          updatedAt: new Date(),
          data: {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities,
            stats: pokemon.stats,
            sprites: pokemon.sprites,
          },
        },
      });
    },
    [id],
  );

  useEffect(() => {
    if (pokemon) {
      selectData(pokemon);
    }
  }, [pokemon, selectData]);

  return [data];
};
