import { usePokemonState } from '../../hooks/usePokemonState';
import styles from './pokemondetail.module.scss';

export const PokemonDetail = () => {
  const { pokemonValue } = usePokemonState();

  return (
    <div className={styles.pokemonpartyList}>
      {pokemonValue ? (
        <>
          <div className={styles.pokemonparty}>
            <img
              alt={`${pokemonValue.name}の画像`}
              src={`https://img.pokemondb.net/artwork/large/${pokemonValue.name}.jpg`}
              width={48}
              height={48}
            />
            <p>{pokemonValue.name}</p>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            ポケモンをクリックしてここに追加しよう
          </p>
        </div>
      )}
    </div>
  );
};
