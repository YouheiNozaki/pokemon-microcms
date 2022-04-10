import { useCallback } from 'react';
import { usePokemonState } from '../../hooks/usePokemonState';
import styles from './pokemoncard.module.scss';

type Props = {
  name: string;
};

export const PokemonCard: React.VFC<Props> = ({ name }) => {
  const { setPokemonValue } = usePokemonState();

  const addPokemonParty = useCallback(() => {
    setPokemonValue({ name });
  }, [name, setPokemonValue]);

  return (
    <button className={styles.main} onClick={addPokemonParty}>
      <img
        alt={`${name}の画像です`}
        src={`https://img.pokemondb.net/sprites/sword-shield/icon/${name}.png`}
      />
      <p className={styles.name}>{name}</p>
    </button>
  );
};
