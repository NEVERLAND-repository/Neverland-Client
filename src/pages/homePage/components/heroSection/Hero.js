import React, { useEffect, useState } from 'react';
import Carousel from 'framer-motion-carousel';
import {
  Text, Heading, Stack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Container } from '../../../../components/container/Container';
import xmen from '../../../../assets/images/x-men.png';
import ease from '../../../../assets/images/no-longer-at-ease.png';
import titan from '../../../../assets/images/attack-on-titan.png';
import styles from './Hero.module.css';
import { getHomePageData } from '../../../../store/slice/neverlandUserSlice';

const Hero = () => {
  // const trendingBooks = useSelector(getHomePageData).data?.trendingBooks;
  // const [books, setBooks] = useState([])
  // console.log(books)

  // useEffect(() => {
  //   if (trendingBooks) {
  //     setBooks(trendingBooks.map(({
  //       _id, bookImg, name, description,
  //     }) => { _id; bookImg; name; description }));
  //   }
  // }, [trendingBooks])

  return (
    <section className={ styles.heroSection }>
      <Carousel interval={ 5000 } className={ styles.carousel }>
        {books.length !== 0 && books.map((book) => (
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
    </section>

  )
}

export default Hero;
