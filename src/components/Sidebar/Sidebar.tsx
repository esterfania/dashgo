import { Box, Stack, Text } from '@chakra-ui/react';

import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from 'react-icons/ri';
import { ActiveLink } from './ActiveLink';

export function Sidebar() {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' alig='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            GERAL
          </Text>
          <Stack spacing='4' mt='8' aling='stretch'>
            <ActiveLink
              icon={RiDashboardLine}
              text='Dashboard'
              href='/dashboard'
            />
            <ActiveLink icon={RiContactsLine} text='Usuários' href='/users' />
          </Stack>
        </Box>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            AUTOMAÇÃO
          </Text>
          <Stack spacing='4' mt='8' aling='stretch'>
            <ActiveLink
              icon={RiInputMethodLine}
              text='Formulários'
              href='/forms'
            />
            <ActiveLink
              icon={RiGitMergeLine}
              text='Automação'
              href='/automations'
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
