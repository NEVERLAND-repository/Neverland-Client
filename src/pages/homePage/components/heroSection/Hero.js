import React from 'react';
import Carousel from 'framer-motion-carousel';
import {
  Box, Text, Heading, Stack, Button, Input, InputGroup, InputRightElement, FormControl,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
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
      <form className={ styles.searchForm }>
        <FormControl width='40%' color='white' fontSize='1.6rem' margin='1.6rem auto'>
          <InputGroup size='lg'>
            <Input border='.3rem solid white' color='white.500' fontSize='1.6rem' placeholder='Search book' padding='2rem' size='lg' />
            <InputRightElement>
              <Button variantColor='teal' fontSize='2rem' top='22%' right='20%' variant='ghost'>
                <SearchIcon color='white.500' m='2rem' />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
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
              <Stack spacing='8' className={ styles.carouselTextContainer }>
                <Heading
                  fontSize={ {
                    base: '4rem', md: '6rem',
                  } }
                  className={ styles.primaryText }
                >
                  {book.title}

                </Heading>
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
