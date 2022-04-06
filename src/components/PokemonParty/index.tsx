import { usePokemonPartyState } from '../../hooks/usePokemonPartyState';
import styles from './pokemonparty.module.scss';

export const PokemonParty = () => {
  const { pokemonParty } = usePokemonPartyState();

  return (
    <div className={styles.pokemonpartyList}>
      {pokemonParty ? (
        <>
          {pokemonParty.map((pokemonParty, i: number) => (
            <div key={i} className={styles.pokemonparty}>
              <img
                alt={`${pokemonParty.name}の画像`}
                src={`https://img.pokemondb.net/artwork/large/${pokemonParty.name}.jpg`}
                width={48}
                height={48}
              />
              <p>{pokemonParty.name}</p>
            </div>
          ))}
        </>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            ポケモンをクリックしてパーティに追加しよう
          </p>
        </div>
      )}
    </div>
  );
};
