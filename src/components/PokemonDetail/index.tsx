import { usePokemonState } from '../../hooks/usePokemonState';
import { usePokemon } from '../../hooks/usePokemon';
import styles from './pokemondetail.module.scss';

export const PokemonDetail = () => {
  const { pokemonValue } = usePokemonState();
  const { pokemonData }: any = usePokemon(pokemonValue?.name);
  console.log(pokemonData);

  return (
    <div className={styles.pokemonpartyList}>
      {pokemonData ? (
        <div className={styles.pokemonparty}>
          <img
            alt={`${pokemonData.name}の画像`}
            src={pokemonData?.sprites?.front_default}
          />
          <p>{pokemonData.name}</p>
        </div>
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
