import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Text, Image, Center, Tooltip, useMediaQuery,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { MinusIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import styles from './BookCard.module.css';
import getAxiosInstance from '../../services/axios';
import { getUserData } from '../../store/slice/neverlandUserSlice';

const BookCard = ({
  id, imageUrl, title, author, type, genre, rated, description, library,
}) => {
  const [isLesserThan740] = useMediaQuery('(max-width: 740px)');
  const token = useSelector(getUserData)?.token;

  const addToLibrary = async () => {
    const response = await getAxiosInstance(token).post(
      `api/v1/book/add/?bookId=${ id }`,
    )
    console.log('added', response);
  }

  const removeFromLibrary = async () => {
    const response = await getAxiosInstance(token).post(
      `api/v1/book/add/?bookId=${ id }`,
    )
    console.log('added', response);
  }

  return (
    <Box
      maxW='md'
      borderWidth='1px'
      borderRadius='1.6rem'
      marginTop={ isLesserThan740 ? '10px' : ' ' }
      overflow='hidden'
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      className={ styles.bookCard }
      _hover={ {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 8px 16px',
        transform: 'translateY(-2px)',
      } }
    >
      <Box className={ styles.imageContainer }>
        <Image src={ imageUrl } alt={ title } />
      </Box>

      <Box
        backgroundColor='white'
        color='black'
        className={ styles.bookCardInfo }
      >
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Box
            fontWeight='700'
            fontSize='2rem'
            as='h2'
            lineHeight='tight'
            isTruncated
            color='var(--primary-color)'
          >
            {title}
          </Box>
          <Tooltip label='Add to my library!' aria-label='A tooltip'>
            <Center
              margin='4'
              padding='4'
              borderRadius='50%'
              border={ `${ library ? '1px solid var(--primary-color)' : 'none' }` }
              color={ `${ library ? 'var(--primary-color)' : 'white' }` }
              backgroundColor={ `${
                library ? 'transparent' : 'var(--primary-color)'
              }` }
              fontSize='1.3rem'
              className={ styles.addIcon }
            >
              {library ? <MinusIcon onClick={ removeFromLibrary } />
                : <AddIcon onClick={ addToLibrary } /> }
            </Center>
          </Tooltip>
        </Box>

        <Box>
          <Text fontSize='1.6rem' fontWeight='500' color='black' py='1rem' marginTop='-2.5rem'>
            {author}
          </Text>
          <div className={ styles.bookDetails }>
            <Text fontSize='1.4rem'>
              {description.slice(0, 100)}
              {' '}
              <Link
                to={ `/overview/${ id }` }
                as={ Link }
                className={ styles.bookDetailsLink }
              >
                continue reading
              </Link>
            </Text>
          </div>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box
            color='var(--gray-color)'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='1.1rem'
            textTransform='uppercase'
            my='2'
          >
            {type}
            {' '}
            &bull;
            {genre}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BookCard
