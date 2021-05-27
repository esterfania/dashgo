import { Stack } from '@chakra-ui/react';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';
import { useSidebar } from '../contexts/SidebarContext';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

export function SidebarNav() {
  return (
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
  );
}
