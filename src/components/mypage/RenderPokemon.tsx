import { POKEMON_NAME } from '@/lib/pokemonName';
import { reverseObject } from '@/lib/utill/reverseObject';
import { memo } from 'react';
import styles from './Mypage.module.scss';
import { LuPlus } from 'react-icons/lu';
import { PokemonType } from '@/lib/type';

interface RenderPokemonProps {
  pokemon: PokemonType;
  onCancelLiked: (pokemonId: string | number) => void;
  onMoveToPokemonDetail: (pokemonId: string | number) => void;
}

const RenderPokemon = memo(
  ({ pokemon, onCancelLiked, onMoveToPokemonDetail }: RenderPokemonProps) => {
    return (
      <div key={pokemon.id} className={styles.myactive__liked__pokemon__box}>
        <div className={styles.myactive__liked__pokemon}>
          <button
            className={styles.myactive__liked__cancel}
            onClick={() => onCancelLiked(pokemon.id)}
          >
            <LuPlus size={14} />
          </button>
          <img
            src={pokemon.sprites.other?.['official-artwork'].front_default}
            alt="찜한 포켓몬"
            width={100}
            height={100}
            onClick={() => onMoveToPokemonDetail(pokemon.id)}
          />
        </div>
        <span>{reverseObject(POKEMON_NAME)[pokemon.name]}</span>
      </div>
    );
  },
);

export default RenderPokemon;