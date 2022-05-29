import React from "react";
import { Flex, Spacer, Center, Text, Square, Box } from "@chakra-ui/react";

const Flexs = () => {
  return (
    <div>
      {/* <Flex
        color="white"
        p="20px"
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        spacing={5}
      >
        <Square w="100px" bg="blue.500" size="200px">
          <Text>Nav</Text>
        </Square>
        <Square bg="orange.500" w="300px">
          <Text>Content</Text>
        </Square>
        <Box bg="red" w="100px">
          <Text>Widget</Text>
        </Box>
      </Flex> */}

      <Flex
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
      >
        <Center
          border={"1px solid"}
          bg="blue.500"
          flex="1"
          height="80px"
          color="white"
          w="50%"
        >
          Nav
        </Center>
        <Center
          border={"1px solid"}
          bg="orange.500"
          flex="1"
          w="100%"
          color="white"
        >
          Content
        </Center>
        <Center border={"1px solid"} bg="red" flex="1" color="white" w="10%">
          Widget
        </Center>
      </Flex>
    </div>
  );
};

export default Flexs;
