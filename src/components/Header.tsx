import {
  Flex,
  Text,
  Input as ChakraInput,
  Icon,
  HStack,
  Box,
  Avatar,
} from '@chakra-ui/react';
import {
  RiNotification3Line,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';
export function Header() {
  return (
    <Flex
      w='100%'
      as='header'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
        dashgo
        <Text color='pink.500' ml='1' as='span'>
          .
        </Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <ChakraInput
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>
      <Flex alig='center' ml='auto'>
        <HStack
          spacing='8'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotification3Line} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>
        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Ester Gama</Text>
            <Text color='gray.300' fontSize='small'>
              esterfaniasantos@gmai.com
            </Text>
          </Box>
          <Avatar
            size='md'
            name='Ester Gama'
            src='https://github.com/esterfania.png'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
