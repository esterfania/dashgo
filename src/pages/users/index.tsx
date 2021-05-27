import {
  Flex,
  Box,
  Heading,
  Button,
  Icon,
  Spinner,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../services/api';

export default function UserList() {
  const { data, isLoading, isFetching, error } = useQuery(
    'users',
    async () => {
      const { data } = await api.get('users');
      const users = data.users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        };
      });
      return users;
    },
    {
      staleTime: 1000 * 5,
    }
  );
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box>
      <Header />
      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
        overflow={isMobileVersion ? 'scroll' : 'hidden'}
      >
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
              {!isLoading && isFetching && (
                <Spinner size='sm' color='gray.500' ml='4' />
              )}
            </Heading>
            <Link href='/users/create'>
              <Button
                as='a'
                size='sm'
                fontSize='small'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha ao obter dados</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='whiteAlpha'>
                <Thead>
                  <Tr>
                    <Th px='6' color='gray.300' width='8'>
                      <Checkbox colorScheme='pink'></Checkbox>
                    </Th>
                    <Th>Usuário</Th>
                    <Th>Data de cadastro</Th>
                    <Th w='8'></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => {
                    return (
                      <Tr px='6' key={user.id}>
                        <Td>
                          <Checkbox colorScheme='pink'></Checkbox>
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='small' color='gray.300'>
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td>{user.createdAt}</Td>
                        <Td>
                          <Button
                            as='a'
                            size='sm'
                            fontSize='small'
                            colorScheme='green'
                            leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                          >
                            Editar
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
