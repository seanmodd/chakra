import Head from 'next/head';
import {
  Heading,
  Link,
  Text,
  Code,
  Flex,
  Box,
  Stack,
  useColorModeValue,
  DarkMode,
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import DarkModeSwitch from '../components/DarkModeSwitch';

export default function Home() {
  const color = useColorModeValue('red.500', 'white.100');
  return (
    <Stack as="main" align="center">
      <Flex flexDirection="column" maxWidth="700px">
        <Flex flexDirection="row" w="700px" pt={4} justify="space-between">
          <DarkModeSwitch />
          <Text color={color}>Home Page!!</Text>
        </Flex>
        <Heading as="h1" size="2xl" fontWeight="normal">
          Hello World!
        </Heading>
        <Text mt={4}>Hello, again bro.</Text>
      </Flex>
    </Stack>
  );
}
