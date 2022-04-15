import React from 'react';
import Carousel from 'framer-motion-carousel';
import {
  Box, Text, Heading, Stack, Button,
} from '@chakra-ui/react';
import { Container } from '../../../../components/container/Container';
import SecondaryButton from '../../../../components/buttonComponent/SecondaryButton';
import xmen from '../../../../assets/images/x-men.png';
import ease from '../../../../assets/images/no-longer-at-ease.png';
import titan from '../../../../assets/images/attack-on-titan.png';
import styles from './Hero.module.css';

const Hero = () => {
  const books = [
    {
      id: 1,
      image: xmen,
      title: 'X-men : The Revenge',
      description: 'American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider. As a result of the bite, he gains ',
    },
    {
      id: 2,
      image: titan,
      title: 'Attack on Titan 3',
      description: 'American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider. As a result of the bite, he gains ',
    },
    {
      id: 3,
      image: ease,
      title: 'No Longer At Ease',
      description: 'American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider. As a result of the bite, he gains ',
    },
  ];

  return (
    <section className={ styles.heroSection }>
      <Carousel className={ styles.carousel }>
        {books.map((book) => (
          <div
            key={ book.id }
            className={ styles.carouselItem }
            style={ {
              backgroundImage: `linear-gradient(91.47deg, #000000 43.02%, rgba(0, 0, 0, 0.576392) 55.28%, rgba(0, 0, 0, 0) 77.66%), url(${ book.image })`,
            } }
          >
            <Container>
              <Stack spacing='24' className={ styles.carouselTextContainer }>
                <Heading className={ styles.primaryText }>{book.title}</Heading>
                <Text className={ styles.bottomText }>{book.description}</Text>
                <button className={ styles.btn }> Get Started </button>
              </Stack>
            </Container>
          </div>
        ))}
      </Carousel>
    </section>

  )
}

export default Hero;
