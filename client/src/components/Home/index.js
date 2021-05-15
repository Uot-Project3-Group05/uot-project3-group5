import React from 'react';
import { Link, useParams } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
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


function Home() {
    return (

        <Box>

        <Box textAlign="center" fontSize="xl" mb={6} >
            Pick a Deck to Begin!
        </Box>     
        
        <Wrap  justify="space-evenly" spacing="8" >
            <Link to={`/game/12345`}>
                <WrapItem boxShadow="2xl">  
                    <Center w="300px" h="300px" bg="red.200">
                
                    Box 1
            
                    </Center>
                </WrapItem>
            </Link>
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

    )
  }
  
  export default Home;
