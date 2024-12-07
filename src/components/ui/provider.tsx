'use client';

import { ThemeProvider } from 'next-themes';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/theme';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Provider;
