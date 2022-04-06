import { useCallback } from 'react';
import { usePokemonPartyState } from '../../hooks/usePokemonPartyState';
import styles from './pokemoncard.module.scss';

type Props = {
  name: string;
};

export const PokemonCard: React.VFC<Props> = ({ name }) => {
  const { pokemonParty, setPokemonParty } = usePokemonPartyState();

  const addPokemonParty = useCallback(() => {
    if (pokemonParty) {
      setPokemonParty(() => [...pokemonParty, { name }]);
    } else {
      setPokemonParty(() => [{ name }]);
    }
  }, [name, pokemonParty, setPokemonParty]);

  return (
    <button
      className={styles.main}
      onClick={addPokemonParty}
      disabled={pokemonParty && pokemonParty?.length > 5}
    >
      <img
        alt={`${name}の画像です`}
        src={`https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${name}.png`}
      />
      <p className={styles.name}>{name}</p>
    </button>
  );
};
