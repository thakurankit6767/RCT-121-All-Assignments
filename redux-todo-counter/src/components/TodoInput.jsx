import { Box, Button, Center, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos, getTodos } from '../action';

const TodoInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    addTodos({
      title: text,
      dispatch
    }).then(() => {
      getTodos(dispatch);
      setText('');
    });
  };
  return (
    <>
    <Center marginTop='50px'>
        <Box width="40%">
            <Flex>

            <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Add a task...'
            />
            <Button borderRadius='30%' onClick={handleAddTodo} marginLeft='10px' fontSize='28px' color='white' backgroundColor='green.500' fontWeight='900'> + </Button>
            </Flex>
        </Box>
    </Center>
    </>
  )
}

export default TodoInput