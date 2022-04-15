import React from 'react';
import {
  Box, GridItem, Text, Image, Badge, Icon, Center,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'

const BookCard = ({
  imageUrl, title, author, type, genre, rated,
}) => {
  return (
    <Box maxW='md' borderWidth='1px' borderRadius='1.4rem' overflow='hidden' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
      <Image src={ imageUrl } alt={ title } />

      <Box p='1.3rem' backgroundColor='white' color='black'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Box
            fontWeight='semibold'
            fontSize='2rem'
            as='h2'
            lineHeight='tight'
            isTruncated
          >
            {title}
          </Box>
          <Center margin='4' padding='4' borderRadius='50%' color='white' backgroundColor='var(--primary-color)' fontSize='1.3rem'>
            <AddIcon />
          </Center>

        </Box>

        <Box>
          <Text fontSize='1.6rem' color='gray.600' py='1rem'>
            {author}
          </Text>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box
            color='var(--gray-color)'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='1.2rem'
            textTransform='uppercase'
            my='2'
          >
            {type}
            {'  '}
            &bull;
            {'  '}
            {genre}
            {'  '}
            &bull;
            {'  '}
            {rated}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BookCard
