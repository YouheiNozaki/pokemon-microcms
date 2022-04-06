import { Fragment } from 'react';
import { useGetPokemons } from './usePokemonList';
import {
  usePokemonPartyState,
  // usePokemonPartyMutators,
} from '../../hooks/usePokemonParty';
import { PokemonCard } from '../PokemonCard';
import styles from './pokemonlist.module.scss';

export const PokemonList = () => {
  const { pokemons } = useGetPokemons();
  const { pokemonParty } = usePokemonPartyState();
  // const { setPokemonParty } = usePokemonPartyMutators();

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        {!pokemonParty ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>
              ポケモンをクリックしてパーティに追加しよう
            </p>
          </div>
        ) : (
          <div className={styles.pokemonpartyList}>
            {pokemonParty.map((pokemonParty, i: number) => (
              <div key={i} className={styles.pokemonparty}>
                <img
                  alt={`${pokemonParty.name}の画像`}
                  src={`https://img.pokemondb.net/artwork/large/${pokemonParty.name}.jpg`}
                />
                <p>{pokemonParty.name}</p>
              </div>
            ))}
          </div>
        )}
        <div className={styles.action}>
          <button className={styles.submitButton} disabled={!pokemonParty}>
            きみに決めた！
          </button>
        </div>
      </div>
      <div className={styles.pokemonlist}>
        {pokemons?.map((pokemon: { name: string }, i: number) => (
          <Fragment key={i}>
            <PokemonCard name={pokemon.name} party={pokemonParty} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
