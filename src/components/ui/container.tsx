'use client';

import { Box, Button, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import Link from 'next/link';

interface ContainerProps {
  children: ReactNode;
}

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default function Container({ children }: ContainerProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)',
  };
  const bgColor = {
    light: 'white',
    dark: 'gray.900',
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };
  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={5}
        mt={[0, 6]}
        mb={8}
        mx="auto"
      >
        <Box>
          <Link href="/" passHref>
            <Button variant="ghost">Me</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button variant="ghost">Dashboard</Button>
          </Link>
        </Box>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'dark' ? <IoIosSunny /> : <IoIosMoon />}
          onClick={toggleColorMode}
        />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
      </Flex>
    </>
  );
}
