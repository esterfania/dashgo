import { Box, Stack, Text } from '@chakra-ui/react';

import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' alig='flex-start'>
        <NavSection title='Geral'>
          <NavLink icon={RiDashboardLine} text='Dashboard' href='/dashboard' />
          <NavLink icon={RiContactsLine} text='Usuários' href='/users' />
        </NavSection>

        <NavSection title='Automação'>
          <NavLink icon={RiInputMethodLine} text='Formulários' href='/forms' />
          <NavLink icon={RiGitMergeLine} text='Automação' href='/automations' />
        </NavSection>
      </Stack>
    </Box>
  );
}
