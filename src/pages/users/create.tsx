import {
  Flex,
  Box,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my={[4, 6]} maxWidth={1480} mx='auto' px={[4, 6]}>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p={[4, 6]}>
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>
          <Divider my={[2, 6]} borderColor='gray.700' />
          <VStack spacing={[2, 6]}>
            <SimpleGrid minChildWidth='240px' spacing={[2, 6]} w='100%'>
              <Input name='name' label='Nome completo' />
              <Input name='email' type='email' label='E-mail' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={[2, 6]} w='100%'>
              <Input name='password' type='password' label='Senha' />
              <Input
                name='password_confirmation'
                type='password'
                label='Confirmação da senha'
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={[4, 6]} justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users'>
                <Button colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Link href='/users'>
                <Button colorScheme='pink'>Salvar</Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
