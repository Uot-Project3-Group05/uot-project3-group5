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
  Center,
  Image,
  Badge
} from '@chakra-ui/react';


function Home() {
    const deck = {
        name: 'Periodic Table of Elements',
        cards: 118,
        img: 'https://bit.ly/2Z4KKcF'
    } 

    return (

        <Box>

        <Box textAlign="center" fontSize="xl" mb={6} >
            Pick a Deck to Begin!
        </Box>     
        
        <Wrap  justify="space-evenly" spacing="8" >
            <Link to={`/game/12345`}>
                <WrapItem>  
                    <Center boxShadow="2xl" w="300px" h="300px" bg="red.200" borderRadius="lg">
                
                    <Box>
                        <Image src={deck.img} alt='placeholder' />
                        <Box>
                            {deck.name}
                        </Box>
                        <Box>
                            {deck.cards} cards
                        </Box>
                    </Box>
            
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
