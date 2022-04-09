import { PokemonList } from '../PokemonList';
import { PokemonParty } from '../PokemonParty';
import styles from './main.module.scss';

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.pokemonDetailWrapper}>
        <PokemonParty />
      </div>
      <div className={styles.body}>
        <div className={styles.actions}>
          <select className={styles.select} defaultValue={1}>
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
          <PokemonList />
        </div>
      </div>
    </div>
  );
};
