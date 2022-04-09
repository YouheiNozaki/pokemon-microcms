import { PokemonCard } from '../PokemonCard';
import styles from './pokemonlist.module.scss';
import { usePokemonList } from './usePokemonList';

export const PokemonList = () => {
  const { pokemons, pokemonsIsError, pokemonsIsLoading } = usePokemonList(1);

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

  return (
    <ul className={styles.pokemonlist}>
      {pokemons.map((pokemon, i: number) => (
        <li key={i} className={styles.li}>
          <PokemonCard name={pokemon.name} />
        </li>
      ))}
    </ul>
  );
};
