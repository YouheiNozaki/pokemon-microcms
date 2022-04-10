import { useMemo } from 'react';
import { PokemonCard } from '../PokemonCard';
import styles from './pokemonlist.module.scss';
import { usePokemonList } from './usePokemonList';
import { GetPokemonParam } from '../../types/pokemon';

type Props = {
  generation: GetPokemonParam;
  name?: string;
};

export const PokemonList: React.VFC<Props> = ({ generation, name }) => {
  const { pokemons, pokemonsIsError, pokemonsIsLoading } = usePokemonList(
    generation || {
      offset: 0,
      limit: 151,
    },
  );

  const pokemonSearchData = useMemo(() => {
    if (name) {
      return pokemons.filter((pokemon) => pokemon.name.indexOf(name) !== -1);
    }
    return pokemons;
  }, [name, pokemons]);

  if (pokemonsIsError) {
    return (
      <div className={styles.error}>
        <p>ポケモンの取得に失敗しました。</p>
        <img src="/metamon.png" alt="メタモンの画像" />
      </div>
    );
  }

  if (pokemonsIsLoading === true) {
    return (
      <div className={styles.error}>
        <p>読み込み中</p>
        <img src="/metamon.png" alt="メタモンの画像" />
      </div>
    );
  }

  if (pokemonSearchData.length === 0) {
    return (
      <div className={styles.error}>
        <p>検索結果がありません</p>
        <img src="/metamon.png" alt="メタモンの画像" />
      </div>
    );
  }

  return (
    <ul className={styles.pokemonlist}>
      {pokemonSearchData.map((pokemon, i: number) => (
        <li key={i} className={styles.li}>
          <PokemonCard name={pokemon.name} />
        </li>
      ))}
    </ul>
  );
};
