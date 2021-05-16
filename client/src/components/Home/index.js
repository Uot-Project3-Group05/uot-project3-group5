import React, { useDebugValue } from 'react';
import { GET_DECKS, GET_USERS } from "../../utils/queries";
import { useQuery } from '@apollo/react-hooks';
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
     const testImage = {
         name: 'Periodic Table of Elements',
         cards: 118,
        img: 'https://bit.ly/2Z4KKcF'
     } 

    

    
    // get all decks into data
    const { loading, error, data } = useQuery(GET_DECKS);

    if (!loading) {
        console.log(error)
        console.log(data)
    }

    if (loading) {
        return <h1> Loading </h1>
    } else {
        console.log(data)
    }

    // const decks = data?.deck || [];
    // console.log(decks)



    return (

        <Box>

        <Box textAlign="center" fontSize="xl" mb={6} >
            Pick a Deck to Begin!
        </Box>     
        
        <Wrap  justify="space-evenly" spacing="8" >
            <Link to={`/game/${data.decks._id}`}>
                <WrapItem>  
                    <Center boxShadow="2xl" w="300px" h="300px" bg="red.200" borderRadius="lg">
                
                    <Box>
                        <Image src={testImage.img} alt='placeholder' />
                        <Box>
                            {data.decks.deckname}
                        </Box>
                        <Box>
                        {data.decks.cards.length} cards
                        </Box>
                    </Box>
            
                    </Center>
                </WrapItem>
            </Link>
        
        </Wrap>
      </Box>

    )
  }
  
  export default Home;
