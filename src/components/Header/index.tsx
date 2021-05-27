import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebar } from '../contexts/SidebarContext';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  const { onOpen } = useSidebar();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w='100%'
      as='header'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px={['6', '2']}
      align='center'
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Open navigation'
          icon={<Icon as={RiMenuLine} />}
          size='lg'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex alig='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
