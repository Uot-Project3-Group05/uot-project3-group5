import React, { useState } from 'react';
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
import Profile from './components/Profile';
import Home from './components/Home';


function App() {

  const [navLinkSelected, setNavLinkSelected] = useState('Home');

  const renderPage = () => {
    switch (navLinkSelected) {
      case 'Profile':
        return <Profile />;
      case 'Home':
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        {/*Start of Header - move to header component*/}
        <ColorModeSwitcher justifySelf="flex-end" m={5} />
        <Nav navLinkSelected={navLinkSelected} setNavLinkSelected={setNavLinkSelected}>
        </Nav>     
        {/*End of Header*/}

        <main>
            {/* Call the renderPage function passing in the currentPage */}
            <div>{renderPage(navLinkSelected)}</div>
        </main>

        
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
