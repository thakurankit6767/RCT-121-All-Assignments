import {
    Box,
    Center,
    ChakraProvider,
    Container,
    Flex,
    Grid,
    GridItem,
    SimpleGrid,
    Stack
  } from "@chakra-ui/react";
  import { useState } from "react";
  import Github from "./Github/Gtihub";
  
  export default function Box() {
    const [shrink, setShrink] = useState(false);
    return (
      <ChakraProvider>
        <Container>
          <Github />
          {/* <Box
            onClick={() => setShrink(!shrink)}
            bg="tomato"
            w="100%"
            p={shrink ? 4 : 8}
            color="white"
          >
            This is the Box
          </Box>
          <Box
            as="button"
            borderRadius="md"
            bg="tomato"
            color="white"
            px={4}
            h={8}
          >
            Button
          </Box>
          <Center bg="tomato" color="white">
            Hello World!
          </Center>
          <Container maxW="xl">
            There are many benefits to a joint design and development system. Not
            only does it bring benefits to the design team, but it also brings
            benefits to engineering teams. It makes sure that our experiences have
            a consistent look and feel, not just in our design specs, but in
            production
          </Container>
          <Flex columnGap="1rem">
            <Center border={"1px solid"} borderColor="black" flex="1">
              1
            </Center>
            <Center border={"1px solid"} borderColor="black" flex="1">
              1
            </Center>
            <Center border={"1px solid"} borderColor="black" flex="1">
              1
            </Center>
            <Center border={"1px solid"} borderColor="black" flex="1">
              1
            </Center>
          </Flex>
          <Stack
            border={"1px solid"}
            // borderColor={["blue", "black", "red", "green"]}
            backgroundColor={{
              base: "yellow",
              sm: "blue",
              md: "black",
              lg: "green",
              xl: "red"
            }}
            w="100%"
            spacing={2}
            direction={["row", "column"]}
          >
            <Box border={"1px solid"} borderColor="black">
              Stack 1
            </Box>
            <Box border={"1px solid"} borderColor="black">
              Stack 2
            </Box>
            <Box border={"1px solid"} borderColor="black">
              Stack 3
            </Box>
          </Stack> */}
          {/* <SimpleGrid
            columns={{
              base: 1,
              sm: 2,
              md: 3,
              lg: 4
            }}
            spacing={5}
          >
            <Box bg={["tomato", "purple"]} height="80px"></Box>
            <Box bg={["tomato", "purple"]} height="80px"></Box>
            <Box bg={["tomato", "purple"]} height="80px"></Box>
            <Box bg={["tomato", "purple"]} height="80px"></Box>
            <Box bg={["tomato", "purple"]} height="80px"></Box>
          </SimpleGrid>
          <Grid templateColumns="1fr 3fr 1fr" gap={6}>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Grid>
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={[1, 2]} colSpan={[2, 1]} bg="tomato" w="100%" />
            <GridItem colSpan={2} bg="purple.500" w="100%" />
            <GridItem colSpan={2} bg="purple.500" w="100%" />
            <GridItem colSpan={4} bg="tomato" w="100%" />
          </Grid> */}
        </Container>
      </ChakraProvider>
    );
  }
  
  // MUI
  // creating their own UI Library
  
  // @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
  