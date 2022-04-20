import React, { useState } from 'react'
import {
  Stack, Flex, Heading,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import fly from '../../../../assets/images/fly.png';
import captain from '../../../../assets/images/iron-man.png';
import spiderman from '../../../../assets/images/spider-man.png';
import batman from '../../../../assets/images/batman.png';
import xmen from '../../../../assets/images/new-x-men.png';
import spider from '../../../../assets/images/spiderman-2.png';
import BookCard from '../../../../components/bookCardComponent/BookCard';
import { getHomePageData } from '../../../../store/slice/neverlandUserSlice';

export const Books = ({ category = 'comics' }) => {
  const categoryBooks = useSelector(getHomePageData).data?.categoryBooks;
  let count = 0;
  const firstDiv = [];
  const secondDiv = [];

  categoryBooks?.map((book) => {
    if (count !== 3) {
      count += 1;
      firstDiv?.push(<BookCard
        key={ book?._id }
        imageUrl={ book?.bookImg }
        title={ book?.name }
        author={ book?.author }
        type={ book?.tags.join(', ') }
        genre={ book?.category }
        rated={ book?.rated }
        description={ book?.description }
      />)
    } else {
      secondDiv?.push(<BookCard
        key={ book?._id }
        imageUrl={ book?.bookImg }
        title={ book?.name }
        author={ book?.author }
        type={ book?.tags.join(', ') }
        genre={ book?.category }
        rated={ book?.rated }
        description={ book?.description }
      />)
    }
  })

  const renderBooks = () => (
    <Stack spacing={ 16 } width='100%' marginBottom={ 4 } alignItems={ { base: 'center', md: 'flex-start' } }>
      <Heading
        as='h2'
        fontSize={ { base: '3rem', md: '5rem' } }
        borderBottom='6px solid'
        borderRadius='.5rem'
        borderColor='var(--secondary-color)'
      >
        {category[0].toUpperCase() + category.slice(1)}

      </Heading>
      <Flex flexDirection='column' width='100%' justifyContent='center'>
        {firstDiv && (
        <Flex flexDirection='row' width='100%' justifyContent='space-between'>
          {
          firstDiv?.map((book) => {
            return book
          })
        }
        </Flex>
        )}
        {secondDiv && (
        <Flex marginTop={ 40 } flexDirection='row' width='100%' justifyContent='space-between'>
          {
              secondDiv?.map((book) => {
                return book
              })
          }
        </Flex>
        )}
      </Flex>
    </Stack>
  )

  return renderBooks();
}

const books = [
  {
    id: 1,
    title: 'Adventures of Fly',
    author: 'Joe Simon',
    type: 'Comic',
    genre: 'Action',
    rated: 'PG-13',
    imageUrl: fly,
  },
  {
    id: 2,
    title: 'Captain America',
    author: 'Derek Landy',
    type: 'Comic',
    genre: 'Action',
    rated: 'PG-13',
    imageUrl: captain,
  },
  {
    id: 3,
    title: 'Amazing Spiderman',
    author: 'Stan Lee, Steve Ditko',
    type: 'Comic',
    genre: 'Action',
    rated: 'PG-13',
    imageUrl: spiderman,
  },
  {
    id: 4,
    title: 'Batman and Spiderman',
    author: 'J.M Dematteis',
    type: 'Comic',
    genre: 'Action',
    rated: 'PG-13',
    imageUrl: batman,
  },
  {
    id: 5,
    title: 'New X-Men',
    author: 'Grant Morrison',
    type: 'Comic',
    genre: 'Action',
    rated: 'PG-13',
    imageUrl: xmen,
  },
  {
    id: 6,
    title: 'Spiderman 2',
    author: 'Stan Lee, Steve Ditko',
    type: 'Comic',
    genre: 'Action',
    rated: 'PG-13',
    imageUrl: spider,
  },
];
