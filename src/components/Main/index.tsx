import { PokemonList } from '../PokemonList';
import { PokemonParty } from '../PokemonParty';
import styles from './main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.pokemonDetailWrapper}>
        <PokemonParty />
      </div>
      <div className={styles.pokemonListWrapper}>
        <PokemonList />
      </div>
    </main>
  );
};
