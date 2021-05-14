import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Spacer, 
  Avatar,
  Wrap, 
  WrapItem,
  Center
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './components/Nav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        {/*Start of Header - move to header component*/}
        <ColorModeSwitcher justifySelf="flex-end" m={5} />
        <Nav />        
        {/*End of Header*/}

        <Box textAlign="center" fontSize="xl" mb={6} >
          Pick a Deck to Begin!
        </Box>     
        
        <Wrap  justify="space-evenly" spacing="8" >
          <WrapItem boxShadow="2xl">
            <Center w="300px" h="300px" bg="red.200">
              Box 1
            </Center>
          </WrapItem>
          <WrapItem boxShadow="2xl"> 
            <Center w="300px" h="300px" bg="green.200">
              Box 2
            </Center>
          </WrapItem>
          <WrapItem boxShadow="2xl"> 
            <Center w="300px" h="300px" bg="blue.200">
              Box 3
            </Center>
          </WrapItem>
          <WrapItem boxShadow="2xl"> 
            <Center w="300px" h="300px" bg="yellow.200">
              Box 4
            </Center>
          </WrapItem>
          <WrapItem boxShadow="2xl"> 
            <Center w="300px" h="300px" bg="orange.200">
              Box 5
            </Center>
          </WrapItem>
          <WrapItem boxShadow="2xl"> 
            <Center w="300px" h="300px" bg="purple.200">
              Box 6
            </Center>
          </WrapItem>
        </Wrap>
       

        
      </Box>
    </ChakraProvider>
  );
}

/* column flex default sample
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>

*/

/* example of grid

        <Grid minH="100vh" p={3}>

         

        </Grid>

*/

export default App;
