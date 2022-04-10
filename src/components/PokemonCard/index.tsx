import { useCallback } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import { usePokemonMutators } from '../../hooks/usePokemonState';
import styles from './pokemoncard.module.scss';

type Props = {
  name: string;
};

export const PokemonCard: React.VFC<Props> = ({ name }) => {
  const { setPokemon } = usePokemonMutators();
  const { pokemonRefetch } = usePokemon(name);

  const addPokemonParty = useCallback(async () => {
    const pokemon = await pokemonRefetch();
    const pokemonData = pokemon.data;
    setPokemon({
      name: pokemonData.name,
    });
  }, [pokemonRefetch, setPokemon]);

  return (
    <button className={styles.main} onClick={addPokemonParty}>
      <img
        alt={`${name}の画像`}
        src={`https://img.pokemondb.net/sprites/sword-shield/icon/${name}.png`}
      />
      <p className={styles.name}>{name}</p>
    </button>
  );
};
