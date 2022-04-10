import { usePokemonMutators } from '../../hooks/usePokemonState';
import styles from './pokemoncard.module.scss';

type Props = {
  name: string;
};

export const PokemonCard: React.VFC<Props> = ({ name }) => {
  const { setPokemon } = usePokemonMutators();

  return (
    <button className={styles.main} onClick={() => setPokemon({ name })}>
      <img
        alt={`${name}の画像`}
        src={`https://img.pokemondb.net/sprites/sword-shield/icon/${name}.png`}
      />
      <p className={styles.name}>{name}</p>
    </button>
  );
};
