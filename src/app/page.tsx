'use client';

import { Flex, Heading, Stack, useColorMode, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { FrontMatter } from '@/libs/mdx';
import BlogPost from '@/components/BlogPost';

const Home = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  const [posts, setPosts] = useState<FrontMatter[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="700px"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
      >
        <Heading letterSpacing="normal" mb={4} size="xl" fontWeight={700}>
          Kurniawan
        </Heading>
        <Text color={secondaryTextColor[colorMode]} align="justify">
          A man who loving his passion in Software Engineering. My journey began
          at the prestigious As&apos;adiyah Sengkang Islamic University, where
          my passion for software engineering ignited and led me to pursue
          self-taught learning and professional training to enhance my
          expertise. Having completed the immersive program at Alterra Academy,
          specializing in Back-End Engineering with a proficiency in Golang,
          MySQL, AWS, and GCP.
          <br></br>
          <br></br>I bring with me a wealth of experience from my tenure at PT
          Bank Rakyat Indonesia, where I served as a dedicated Back-End
          Developer, focusing on the development of Qlola Cash Management
          projects. This experience has fortified my understanding of intricate
          back-end systems and fortified my ability to navigate complex
          technological landscapes.
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        mt={8}
      >
        <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
          Tulisan Populer
        </Heading>
        {posts.map((post) => {
          return <BlogPost key={post._resourcePath} {...post} />;
        })}
      </Flex>
    </Stack>
  );
};

export default Home;
