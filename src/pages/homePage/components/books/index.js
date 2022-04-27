import React from 'react'
import {
  Stack, Flex, Heading,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@chakra-ui/react';
import BookCard from '../../../../components/bookCardComponent/BookCard';
import { getHomePageData } from '../../../../store/slice/neverlandUserSlice';

export const Books = ({ category = 'comics' }) => {
  const [isLesserThan740] = useMediaQuery('(max-width: 740px)');
  const [isLesserThan980] = useMediaQuery('(max-width: 980px)');
  const categoryBooks = useSelector(getHomePageData).data?.categoryBooks;
  let count = 0;
  const firstDiv = [];
  const secondDiv = [];

  categoryBooks?.map((book) => {
    if (count !== 3) {
      count += 1;
      firstDiv?.push(
        <BookCard
          key={ book?._id }
          imageUrl={ book?.bookImg }
          title={ book?.name }
          author={ book?.author }
          type={ book?.tags.join(' • ') }
          genre={ book?.category }
          rated={ book?.rated }
          description={ book?.description }
        />,
      );
    } else {
      secondDiv?.push(
        <BookCard
          key={ book?._id }
          imageUrl={ book?.bookImg }
          title={ book?.name }
          author={ book?.author }
          type={ book?.tags.join(' • ') }
          genre={ book?.category }
          rated={ book?.rated }
          description={ book?.description }
        />,
      );
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
        fontSize={ { base: '4rem' } }
        borderBottom='6px solid'
        borderRadius='.5rem'
        borderColor='var(--secondary-color)'
      >
        {category[0].toUpperCase() + category.slice(1)}
      </Heading>
      {/* {isLesserThan980 ? (

      ) : (

      )} */}
      <Flex flexDirection='column' width='100%' gap='7rem'>
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

  return renderBooks();
}

// const books = [
//   {
//     id: 1,
//     title: 'Adventures of Fly',
//     author: 'Joe Simon',
//     type: 'Comic',
//     genre: 'Action',
//     rated: 'PG-13',
//     imageUrl: fly,
//   },
//   {
//     id: 2,
//     title: 'Captain America',
//     author: 'Derek Landy',
//     type: 'Comic',
//     genre: 'Action',
//     rated: 'PG-13',
//     imageUrl: captain,
//   },
//   {
//     id: 3,
//     title: 'Amazing Spiderman',
//     author: 'Stan Lee, Steve Ditko',
//     type: 'Comic',
//     genre: 'Action',
//     rated: 'PG-13',
//     imageUrl: spiderman,
//   },
//   {
//     id: 4,
//     title: 'Batman and Spiderman',
//     author: 'J.M Dematteis',
//     type: 'Comic',
//     genre: 'Action',
//     rated: 'PG-13',
//     imageUrl: batman,
//   },
//   {
//     id: 5,
//     title: 'New X-Men',
//     author: 'Grant Morrison',
//     type: 'Comic',
//     genre: 'Action',
//     rated: 'PG-13',
//     imageUrl: xmen,
//   },
//   {
//     id: 6,
//     title: 'Spiderman 2',
//     author: 'Stan Lee, Steve Ditko',
//     type: 'Comic',
//     genre: 'Action',
//     rated: 'PG-13',
//     imageUrl: spider,
//   },
// ];
