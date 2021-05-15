import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Game from './components/Game';


function App() {

  const [navLinkSelected, setNavLinkSelected] = useState('Home');

  //navLinkSelected={navLinkSelected} setNavLinkSelected={setNavLinkSelected}

  const renderPage = () => {



    switch (navLinkSelected) {
      case 'Profile':
        return <Profile />;
      case 'Home':
       return <Home>
       </Home>
      case 'Game':
        return <Game />;
      default:
        return <Home />;
    }
  };

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl" >
          {/*Start of Header - move to header component*/}
          <ColorModeSwitcher justifySelf="flex-end" m={5} />
          <Nav navLinkSelected={navLinkSelected} setNavLinkSelected={setNavLinkSelected}>
          </Nav>     
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/game/:id" component={Game} />
          </Switch>
          {/*End of Header*/}

          <main>
              {/* Call the renderPage function passing in the currentPage */}
              {/*<div>{renderPage(navLinkSelected)}</div> */}
          </main>

        
        </Box>
      </ChakraProvider>
    </Router>
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
