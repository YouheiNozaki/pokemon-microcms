import { usePokemonList } from './usePokemonList';
import { PokemonCard } from '../PokemonCard';
import { PokemonParty } from '../PokemonParty';
import styles from './pokemonlist.module.scss';

export const PokemonList = () => {
  const { pokemons } = usePokemonList();

  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <PokemonParty />
      </div>
      <div className={styles.pokemonlist}>
        {pokemons?.map((pokemon: { name: string }, i: number) => (
          <li key={i}>
            <PokemonCard name={pokemon.name} />
          </li>
        ))}
      </div>
    </main>
  );
};
