import { Error } from '../ui/Error';
import { Loading } from '../ui/Loading';
import { usePokemonState } from '../../hooks/usePokemonState';
import { usePokemon } from '../../hooks/usePokemon';
import styles from './pokemondetail.module.scss';

export const PokemonDetail = () => {
  const { pokemonValue } = usePokemonState();
  const { pokemonData, pokemonIsError, pokemonIsLoading } = usePokemon(
    pokemonValue?.name,
  );

  if (pokemonIsLoading === true) {
    return <Loading />;
  }

  if (pokemonIsError) {
    return <Error text="ポケモンの取得に失敗しました" />;
  }

  return (
    <div className={styles.pokemonpartyList}>
      {pokemonData ? (
        <div className={styles.pokemonparty}>
          <img
            alt={`${pokemonData.name}の画像`}
            src={pokemonData.sprites?.front_default}
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
