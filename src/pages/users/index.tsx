import {
  Flex,
  Box,
  Heading,
  Button,
  Icon,
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
import React from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
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
              <Tr px='6'>
                <Td>
                  <Checkbox colorScheme='pink'></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Ester Gama</Text>
                    <Text fontSize='small' color='gray.300'>
                      esterfaniasantos@gmai.com
                    </Text>
                  </Box>
                </Td>
                <Td>18 de Abril, 2021</Td>
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
              <Tr px='6'>
                <Td>
                  <Checkbox colorScheme='pink'></Checkbox>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Ester Gama</Text>
                    <Text fontSize='small' color='gray.300'>
                      esterfaniasantos@gmai.com
                    </Text>
                  </Box>
                </Td>
                <Td>18 de Abril, 2021</Td>
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
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
