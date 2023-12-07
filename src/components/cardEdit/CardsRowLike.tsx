import CardsRowLayout from './CardsRowLayout';
import styles from './cards.module.scss';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import useLikedStore from '@/store/useLikedStore';
import { useState } from 'react';

const CardsRowLike = () => {
  const { pokemonData } = useLikedStore();
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? pokemonData.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === pokemonData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const likePokemonArray = [
    pokemonData[index],
    pokemonData[(index + 1) % pokemonData.length],
    pokemonData[(index + 2) % pokemonData.length],
  ];

  return (
    <div className={styles.pokemon_select_wrapper}>
      <span className={styles.title}>내가 찜한 포켓몬</span>
      <div>
        <button className={styles.page_button} onClick={prevSlide}>
          <IoChevronBack />
        </button>
        <CardsRowLayout pokemonArray={likePokemonArray} />
        <button className={styles.page_button} onClick={nextSlide}>
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

export default CardsRowLike;