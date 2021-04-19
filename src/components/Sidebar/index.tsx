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
          <NavLink icon={RiDashboardLine} href='/dashboard'>
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine} href='/users'>
            Usuários
          </NavLink>
        </NavSection>

        <NavSection title='Automação'>
          <NavLink icon={RiInputMethodLine} href='/forms'>
            Formulários
          </NavLink>
          <NavLink icon={RiGitMergeLine} href='/automations'>
            Automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
