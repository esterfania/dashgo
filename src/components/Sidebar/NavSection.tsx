import { Box, Text, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavSectionProps {
  children: ReactNode;
  title: string;
}

export function NavSection({
  title = 'Insira um título',
  children,
}: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>
        {title.toUpperCase()}
      </Text>
      <Stack spacing='4' mt='8' aling='stretch'>
        {children}
      </Stack>
    </Box>
  );
}
