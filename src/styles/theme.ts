import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181b23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#B3B5C6',
      '100': '#d1d2dc',
      '50': '#EEEEF2',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
