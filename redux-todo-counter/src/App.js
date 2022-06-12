import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Todo from './Components/Todo'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
    const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>

    <ChakraProvider>
        <Todo/>
    </ChakraProvider>
    </ThemeProvider>
  )
}

export default App