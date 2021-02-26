import React, { Component } from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Accordion,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Wrap,
  WrapItem,
  VStack,
  Input,
  Box,
} from '@chakra-ui/react';

class List extends Component {
  render() {
    return (
      <>
        <VStack bg="gray.200" h="100vh">
          <Stack align="center" mt={20} w="50%" rounded="2xl" mb={20}>
            {this.props.items.map((item) => (
              <Box
                align="center"
                borderRadius="xl"
                bg="red.200"
                w="500px"
                align="center"
                textAlign="center"
                justifyContent="center"
                h="60px"
                shadow="md"
                my={5}
                key={item.id}
              >
                <Heading mt={1.5}>{item}</Heading>
              </Box>
            ))}
          </Stack>
          <Box bg="gray.200" h="auto" w="100vw" align="center">
            <FormControl>
              <Stack w="50%" align="center">
                <Input shadow="md" bg="white" w="110" type="text" />
                <Input bg="white" w="110" type="text" />
                <Button shadow="md" h="50px" w="100px" type="submit">
                  <Heading fontSize="20px">submit</Heading>
                </Button>
              </Stack>
            </FormControl>
          </Box>
        </VStack>
      </>
    );
  }
}

const ListComponent = () => (
  <div>
    <List items={['one', 'two', 'THREEEEMOTHERFUCKERS']} />
  </div>
);

export default ListComponent;
