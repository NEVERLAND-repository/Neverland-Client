import React from 'react';
import Carousel from 'framer-motion-carousel';
import { useSelector } from 'react-redux';
import { Text, Heading, Stack } from '@chakra-ui/react';
import { Container } from '../../../../components/container/Container';
import styles from './Hero.module.css';
import { getHomePageData } from '../../../../store/slice/neverlandUserSlice';
import SearchBar from '../../../../components/SearchComponent/SearchBar';
import BookData from '../../../../Data.json';

const Hero = () => {
  const trendingBooks = useSelector(getHomePageData).data?.trendingBooks;

  return (
    <section className={ styles.heroSection }>
      <SearchBar placeholder='Search for books' data={ BookData } />
      {trendingBooks?.length !== 0 && (
      <Carousel interval={ 5000 } className={ styles.carousel }>
        {trendingBooks?.map((book) => (
          <div
            key={ book?._id }
            className={ styles.carouselItem }
            style={ {
              backgroundImage: `linear-gradient(91.47deg, #000000 43.02%, rgba(0, 0, 0, 0.576392) 55.28%, rgba(0, 0, 0, 0) 77.66%), url(${ book?.bookImg })`,
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
                  {book?.name}

                </Heading>
                <Text className={ styles.bottomText }>{book?.description}</Text>
                <button className={ styles.btn }> Get Started </button>
              </Stack>
            </Container>
          </div>
        ))}
      </Carousel>
      )}
    </section>
  )
}

export default Hero;
