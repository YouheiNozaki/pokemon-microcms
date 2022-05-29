import { useFieldExtension } from 'microcms-field-extension-react';

import { Error } from '../ui/Error';
import { Loading } from '../ui/Loading';
import { usePokemonState } from '../../hooks/usePokemonState';
import { usePokemon } from '../../hooks/usePokemon';
import styles from './pokemondetail.module.scss';
import { useEffect, useMemo } from 'react';

export const PokemonDetail = () => {
  const { pokemonValue } = usePokemonState();
  const {
    pokemonData,
    pokemonIsError,
    pokemonIsLoading,
    pokemonIsRefetching,
    pokemonIsRefetchError,
  } = usePokemon(pokemonValue?.name);

  const url = `https://ryusou-pokemon.microcms.io`;
  const { data, sendMessage } = useFieldExtension(pokemonData, {
    origin: url,
    height: 500,
  });

  useEffect(() => {
    if (pokemonData) {
      sendMessage({
        id: pokemonData.name,
        title: pokemonData.name,
        imageUrl: pokemonData.sprites?.front_default,
        updatedAt: new Date().toISOString(),
        data: {
          id: pokemonData.id,
          name: pokemonData.name,
          height: pokemonData.height,
          weight: pokemonData.weight,
          abilities: pokemonData.abilities,
          stats: pokemonData.stats,
          sprites: pokemonData.sprites,
        },
      });
    }
  }, [pokemonData, sendMessage]);

  const pokemonDetail = useMemo(() => {
    if (pokemonData) {
      return pokemonData;
    }
    return data;
  }, [data, pokemonData]);

  if (pokemonIsLoading || pokemonIsRefetching) {
    return <Loading />;
  }

  if (pokemonIsError || pokemonIsRefetchError) {
    return <Error text="取得できないポケモンです" />;
  }

  return (
    <div className={styles.main}>
      {pokemonDetail ? (
        <div className={styles.pokemondetails}>
          <div className={styles.header}>
            <img
              alt={`${pokemonDetail.name}の画像`}
              src={pokemonDetail.sprites?.front_default}
              width={120}
              height={120}
              className={styles.img}
            />
            <div>
              <p className={styles.id}>No.{pokemonDetail.id}</p>
              <h3 className={styles.name}>{pokemonDetail.name}</h3>
            </div>
          </div>
          <div className={styles.typeWrapper}>
            <p className={styles.typeTitle}>Type</p>
            <ul className={styles.typeList}>
              {pokemonDetail.types?.map((type, i: number) => (
                <li key={i} className={styles.type}>
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.abilityWrapper}>
            <p className={styles.typeTitle}>Ability</p>
            <ul className={styles.typeList}>
              {pokemonDetail.abilities?.map((ability, i: number) => (
                <li key={i} className={styles.type}>
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.abilityWrapper}>
            <p className={styles.typeTitle}>Weight</p>
            <p className={styles.unit}>
              <span>{pokemonDetail.weight}</span>
              kg
            </p>
            <p className={styles.typeTitle}>Height</p>
            <p className={styles.unit}>
              <span>{pokemonDetail.height}0</span>
              cm
            </p>
          </div>
          <div className={styles.stats}>
            {pokemonDetail.stats?.map((stats, i: number) => (
              <div key={i} className={styles.stat}>
                <p className={styles.typeTitle}>{stats.stat.name}</p>
                <p className={styles.statValue}>{stats.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            ポケモンをクリックしてここに追加しよう
          </p>
        </div>
      )}
    </div>
  );
};
