import { useState } from 'react';
import { PokemonList } from '../PokemonList';
import { PokemonDetail } from '../PokemonDetail';
import styles from './main.module.scss';
import { useDebounce } from '../../hooks/useDebounce';
import { useSelectGeneration } from '../../hooks/useSelectGeneration';

export const Main = () => {
  const [inputPokemon, setInputPokemon] = useState<string>('');
  const { debouncedValue: pokemonSearchName } = useDebounce({
    value: inputPokemon,
    delay: 1000,
  });

  const { generation, onSelectGeneration } = useSelectGeneration();

  return (
    <div className={styles.main}>
      <div className={styles.pokemonDetailWrapper}>
        <PokemonDetail />
      </div>
      <div className={styles.body}>
        <div className={styles.actions}>
          <select
            className={styles.select}
            defaultValue={1}
            onChange={(e) => onSelectGeneration(e.target.value)}
          >
            <option value={1}>第1世代</option>
            <option value={2}>第2世代</option>
            <option value={3}>第3世代</option>
            <option value={4}>第4世代</option>
            <option value={5}>第5世代</option>
            <option value={6}>第6世代</option>
            <option value={7}>第7世代</option>
            <option value={8}>第8世代</option>
          </select>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setInputPokemon(e.target.value)}
          />
        </div>
        <div className={styles.wrapper}>
          <PokemonList generation={generation} name={pokemonSearchName} />
        </div>
      </div>
    </div>
  );
};
