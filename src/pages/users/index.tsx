import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
      </Flex>
    </Box>
  );
}
