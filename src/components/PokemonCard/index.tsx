import { useCallback } from 'react';
import {
  usePokemonPartyMutators,
  usePokemonPartyState,
} from '../../hooks/usePokemonParty';
import styles from './pokemoncard.module.scss';

type Pokemon = {
  name: string;
};

type Props = {
  name: string;
  party: Pokemon[] | undefined;
};

export const PokemonCard: React.VFC<Props> = ({ name, party }) => {
  const { pokemonParty } = usePokemonPartyState();
  const { setPokemonParty } = usePokemonPartyMutators();

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
      disabled={party && party?.length > 5}
    >
      <img
        alt={`${name}の画像です`}
        src={`https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${name}.png`}
      />
      <p className={styles.name}>{name}</p>
    </button>
  );
};
