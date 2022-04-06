import { Fragment } from 'react';
import { usePokemonList } from './usePokemonList';
import { usePokemonPartyState } from '../../hooks/usePokemonPartyState';
import { PokemonCard } from '../PokemonCard';
import styles from './pokemonlist.module.scss';

export const PokemonList = () => {
  const { pokemons } = usePokemonList();
  const { pokemonParty } = usePokemonPartyState();

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.pokemonpartyList}>
          {pokemonParty ? (
            <>
              {pokemonParty.map((pokemonParty, i: number) => (
                <div key={i} className={styles.pokemonparty}>
                  <img
                    alt={`${pokemonParty.name}の画像`}
                    src={`https://img.pokemondb.net/artwork/large/${pokemonParty.name}.jpg`}
                  />
                  <p>{pokemonParty.name}</p>
                </div>
              ))}
            </>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyText}>
                ポケモンをクリックしてパーティに追加しよう
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.pokemonlist}>
        {pokemons?.map((pokemon: { name: string }, i: number) => (
          <li key={i}>
            <PokemonCard name={pokemon.name} party={pokemonParty} />
          </li>
        ))}
      </div>
    </div>
  );
};
