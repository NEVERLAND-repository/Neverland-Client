import React from 'react'
import {
  Stack, Flex, Heading,
} from '@chakra-ui/react';
import fly from '../../../../assets/images/fly.png';
import captain from '../../../../assets/images/iron-man.png';
import spiderman from '../../../../assets/images/spider-man.png';
import batman from '../../../../assets/images/batman.png';
import xmen from '../../../../assets/images/new-x-men.png';
import spider from '../../../../assets/images/spiderman-2.png';
import BookCard from '../../../../components/bookCardComponent/BookCard';

export const Novels = () => {
  const novels = [
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

  return (
    <Stack spacing={ 16 } alignItems={ { base: 'center', md: 'flex-start' } }>
      <Heading
        as='h2'
        fontSize={ { base: '3rem', md: '5rem' } }
        borderBottom='6px solid'
        borderRadius='.5rem'
        borderColor='var(--secondary-color)'
      >
        Novels

      </Heading>
      <Flex gap={ 66 } width='100%' flexWrap='wrap' margin='auto' justifyContent='center'>
        {novels.map((comic) => (
          <BookCard
            key={ comic.id }
            imageUrl={ comic.imageUrl }
            title={ comic.title }
            author={ comic.author }
            type={ comic.type }
            genre={ comic.genre }
            rated={ comic.rated }
          />
        ))}

      </Flex>
    </Stack>
  )
}
