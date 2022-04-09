import { useState } from 'react';
import { GetPokemonParam } from '../../types/pokemon';
import { PokemonList } from '../PokemonList';
import { PokemonParty } from '../PokemonParty';
import styles from './main.module.scss';

export const Main = () => {
  const [generation, setGeneration] = useState<GetPokemonParam>({
    offset: 0,
    limit: 151,
  });

  const onSelect = (generation: string) => {
    if (generation === '1') {
      setGeneration({
        offset: 0,
        limit: 151,
      });
    } else if (generation === '2') {
      setGeneration({
        offset: 151,
        limit: 100,
      });
    } else if (generation === '3') {
      setGeneration({
        offset: 251,
        limit: 135,
      });
    } else if (generation === '4') {
      setGeneration({
        offset: 386,
        limit: 107,
      });
    } else if (generation === '5') {
      setGeneration({
        offset: 493,
        limit: 156,
      });
    } else if (generation === '6') {
      setGeneration({
        offset: 649,
        limit: 72,
      });
    } else if (generation === '7') {
      setGeneration({
        offset: 721,
        limit: 88,
      });
    } else if (generation === '8') {
      setGeneration({
        offset: 809,
        limit: 96,
      });
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.pokemonDetailWrapper}>
        <PokemonParty />
      </div>
      <div className={styles.body}>
        <div className={styles.actions}>
          <select
            className={styles.select}
            defaultValue={1}
            onChange={(e) => onSelect(e.target.value)}
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
        </div>
        <div className={styles.wrapper}>
          <PokemonList generation={generation} />
        </div>
      </div>
    </div>
  );
};
