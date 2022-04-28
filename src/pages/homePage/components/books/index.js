import React from 'react'
import {
  Stack, Flex, Heading,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@chakra-ui/react';
import BookCard from '../../../../components/bookCardComponent/BookCard';
import { getHomePageData } from '../../../../store/slice/neverlandUserSlice';
import LoadingComponent from '../../../../components/loadingComponent/LoadingComponent';

export const Books = ({ category = 'comics' }) => {
  const [isLesserThan740] = useMediaQuery('(max-width: 740px)');
  const categoryBooks = useSelector(getHomePageData).data?.categoryBooks;
  let count = 0;
  const firstDiv = [];
  const secondDiv = [];

  categoryBooks?.map((book) => {
    if (count !== 3) {
      count += 1;
      firstDiv?.push(<BookCard
        key={ book?._id }
        id={ book?._id }
        imageUrl={ book?.bookImg }
        title={ book?.name }
        author={ book?.author }
        type={ book?.tags.join(', ') }
        genre={ book?.category }
        rated={ book?.rated }
        description={ book?.description }
      />)
    } else {
      secondDiv?.push(
        <BookCard
          key={ book?._id }
          id={ book?._id }
          imageUrl={ book?.bookImg }
          title={ book?.name }
          author={ book?.author }
          type={ book?.tags.join(', ') }
          genre={ book?.category }
          rated={ book?.rated }
          description={ book?.description }
        />,
      )
    }
  })

  const renderBooks = () => (
    <Stack
      spacing={ 16 }
      width='100%'
      marginBottom={ 4 }
      alignItems={ isLesserThan740 ? 'center' : 'start' }
    >
      <Heading
        as='h2'
        fontSize={ { base: '3rem', md: '5rem' } }
        borderBottom='6px solid'
        borderRadius='.5rem'
        borderColor='var(--secondary-color)'
      >
        {category[0].toUpperCase() + category.slice(1)}
      </Heading>
      <Flex flexDirection='column' width='100%'>
        {firstDiv && (
          <Flex
            flexDirection={ isLesserThan740 ? 'column' : 'row' }
            width='100%'
            alignItems={ isLesserThan740 ? 'center' : 'space-between' }
            justifyContent={ { base: 'center', md: 'space-between' } }
          >
            {firstDiv?.map((book) => {
              return book;
            })}
          </Flex>
        )}
        {secondDiv && (
          <Flex
            flexDirection={ isLesserThan740 ? 'column' : 'row' }
            width='100%'
            alignItems={ isLesserThan740 ? 'center' : 'space-between' }
            justifyContent='space-between'
          >
            {secondDiv?.map((book) => {
              return book;
            })}
          </Flex>
        )}
      </Flex>
    </Stack>
  );

  return (
    <>
      { categoryBooks ? renderBooks() : <LoadingComponent />}
    </>
  )
}
