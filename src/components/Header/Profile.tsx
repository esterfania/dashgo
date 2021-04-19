import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
export function Profile() {
  return (
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
  );
}
