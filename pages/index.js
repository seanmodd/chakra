import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import Container from '../components/Container';

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  return (
    <Container>
      <Head>
        <title>Sean Modd motherfuckers</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Sean Modd you bastards.</Heading>
          <Text color={colorSecondary[colorMode]}>
            All the Lorem Ipsum shit goes right here...
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
