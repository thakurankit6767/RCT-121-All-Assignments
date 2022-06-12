import { Box, Center, Circle, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

function TodoList({page,handleChange}) {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  

//   console.log('asd',todos)
  return (
    <>
    <Center marginTop='50px'>
        <Box width="40%">
            <Heading>Todos</Heading>
            {loading && <div>loading</div>}
            {todos.map((item) => (
                <div key={item.id} style={{margin:'15px'}}>
                        <Box backgroundColor='#D2D6DC'  padding='5px' borderRadius='8px'>
                        <Flex direction='row' gap={4}>
                                <Circle backgroundColor='blue.400' fontSize='20px' width="30px">
                                {item.id}
                                </Circle>
                                <Text fontSize='24px'>
                                {item.title}
                                </Text>
                        </Flex>
                        </Box>
                </div>
            ))}
            <Pagination count={page+1} page={page} onChange={handleChange} />
        </Box>
      </Center>
    </>
  );
}

export default TodoList;