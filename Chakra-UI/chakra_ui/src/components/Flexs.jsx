import React from "react";
import { Flex, Spacer,Center,Text,Square,Box } from "@chakra-ui/react";

const Flexs = () => {
  return (
    <div>
      <Flex color="white" p="20px" >
        <Square w="100px" bg="blue.500" size="200px">
          <Text>Nav</Text>
        </Square>
        <Square bg="orange.500" w="300px">
          <Text>Content</Text>
        </Square>
        <Box bg="red" w="100px">
          <Text>Widget</Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Flexs;
