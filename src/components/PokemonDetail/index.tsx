import { Error } from '../ui/Error';
import { Loading } from '../ui/Loading';
import { usePokemonState } from '../../hooks/usePokemonState';
import { usePokemon } from '../../hooks/usePokemon';
import styles from './pokemondetail.module.scss';

export const PokemonDetail = () => {
  const { pokemonValue } = usePokemonState();
  const {
    pokemonData,
    pokemonIsError,
    pokemonIsLoading,
    pokemonIsRefetching,
    pokemonIsRefetchError,
  } = usePokemon(pokemonValue?.name);

  if (pokemonIsLoading || pokemonIsRefetching) {
    return <Loading />;
  }

  if (pokemonIsError || pokemonIsRefetchError) {
    return <Error text="取得できないポケモンです" />;
  }

  return (
    <div className={styles.main}>
      {pokemonData ? (
        <div className={styles.pokemondetails}>
          <div className={styles.header}>
            <img
              alt={`${pokemonData.name}の画像`}
              src={pokemonData.sprites?.front_default}
              width={120}
              height={120}
              className={styles.img}
            />
            <div>
              <p className={styles.id}>No.{pokemonData.id}</p>
              <h3 className={styles.name}>{pokemonData.name}</h3>
            </div>
          </div>
          <div className={styles.typeWrapper}>
            <p className={styles.typeTitle}>Type</p>
            <ul className={styles.typeList}>
              {pokemonData.types?.map((type, i: number) => (
                <li key={i} className={styles.type}>
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.abilityWrapper}>
            <p className={styles.typeTitle}>Ability</p>
            <ul className={styles.typeList}>
              {pokemonData.abilities?.map((ability, i: number) => (
                <li key={i} className={styles.type}>
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.abilityWrapper}>
            <p className={styles.typeTitle}>Weight</p>
            <p className={styles.unit}>
              <span>{pokemonData.weight}</span>
              kg
            </p>
            <p className={styles.typeTitle}>Height</p>
            <p className={styles.unit}>
              <span>{pokemonData.height}0</span>
              cm
            </p>
          </div>
          <div className={styles.stats}>
            {pokemonData.stats?.map((stats, i: number) => (
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
