import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Home from './components/Home';
import Game from './components/Game';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl" >
          {/*Start of Header - move to header component*/}
          <ColorModeSwitcher justifySelf="flex-end" m={5} />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/:username?" component={Profile} />
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
    </ApolloProvider>
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
