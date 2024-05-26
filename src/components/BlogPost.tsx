import {
  Box,
  LinkBox,
  Heading,
  Text,
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { parseISO, format as formatDate } from 'date-fns';
import { FiBookmark } from 'react-icons/fi';

interface FrontMatter {
  title: string;
  summary: string;
  publishedAt: string;
  _resourcePath: string;
}

export default function BlogPost(frontMatter: FrontMatter) {
  const { title, summary, publishedAt } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  const bgColor = {
    light: 'white',
    dark: 'gray.700',
  };
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.500',
  };
  const fillColor = {
    light: 'white',
    dark: 'gray.900',
  };

  const slug = frontMatter._resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  // TODO: add swr get page views

  return (
    <Link href={`blog/${slug}`} passHref>
      <LinkBox
        bg={bgColor[colorMode]}
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        mb={6}
        padding={6}
        w="100%"
        position="relative"
        _hover={{ textDecoration: 'none', shadow: 'lg' }}
      >
        <Box width="100%" display="block">
          <Heading size="md" as="h3" mb={1} fontWeight="medium">
            {title}
          </Heading>
          <Flex
            width="100%"
            align="flex-start"
            flexWrap="wrap"
            flexDirection={['column', 'row']}
          >
            <Text color="gray.500" minWidth="105px" mb={[4, 2]}>
              {formatDate(parseISO(publishedAt), 'dd MMMM, yyyy')}
              <>
                &nbsp;•&nbsp;
                {/* {`${views ? format(views) : '–––'} kali dibaca`} */}
              </>
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
          <Box
            as={FiBookmark}
            size={6}
            role="img"
            position="absolute"
            color={iconColor[colorMode]}
            fill={fillColor[colorMode]}
            right={2}
            top={-8}
          />
        </Box>
      </LinkBox>
    </Link>
  );
}
