import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType;
  text: string;
}
export function NavLink({ icon, text, href, ...rest }: NavLinkProps) {
  const { asPath } = useRouter();
  const activeColor = asPath === href ? 'pink.500' : '';

  return (
    <Link href={href}>
      <ChakraLink display='flex' align='center' color={activeColor} {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>
          {text}
        </Text>
      </ChakraLink>
    </Link>
  );
}
