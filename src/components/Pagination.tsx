import { Stack, Button, Box } from '@chakra-ui/react';
import React from 'react';
export function Pagination() {
  return (
    <Stack
      direction='row'
      mt='8'
      spacing='6'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>2</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='pink'
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500',
          }}
        >
          2
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500',
          }}
        >
          3
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500',
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}