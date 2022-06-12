import { Box, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../action'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
    const [page,setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value);
  };
    const dispatch = useDispatch();
  useEffect(() => {
    getTodos({page,dispatch});
  }, [page]);
  return (
    <>
    <Box width="100%">
        <TodoInput/>
        <TodoList page={page} handleChange={handleChange}/>
    </Box>
    </>
  )
}

export default Todo