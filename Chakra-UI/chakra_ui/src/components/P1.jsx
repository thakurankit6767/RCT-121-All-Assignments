import React from "react";
import { Flex, Spacer, Center, Text, Square, Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

export default function One() {
  return (
    <div>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          lg: 3,
        }}
        spacing={0}
        w="100%"
      >
        <Box bg="blue" height="100px">
          <Center h="100px" color="white">
            NAV
          </Center>
        </Box>

        <Box bg="orange" height="100px">
          <Center h="100px" color="white">
            CONTENT
          </Center>
        </Box>
        <Box bg="red" height="100px">
          <Center h="100px" color="white">
            WIDGET
          </Center>
        </Box>
      </SimpleGrid>
    </div>
  );
}
