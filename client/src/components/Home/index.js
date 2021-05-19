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
  Badge,
  Progress,
  SimpleGrid,
  useToast
} from '@chakra-ui/react';
import { 
    GiEmerald,
    GiGoldBar
   } from "react-icons/gi";
import Auth from '../../utils/auth';
import periodicTable from '../../assets/images/periodic-table.svg'
import { idbPromise } from '../../utils/helpers';
  

function Home() {
     const testImage = {
         name: 'Periodic Table of Elements',
         cards: 118,
        img: 'https://bit.ly/2Z4KKcF'
     } 
    const toast = useToast();

     function notAuthenticated() {
        toast({
            title: 'Authentication Error',
            description: 'You need to be logged in!',
            status: 'error',
            duration: 1500,
            isClosable: true,
            position: 'top'
        })
    }
     

     const deck = [
    
        {
        name: 'Periodic Table of Elements',
        cards: 118,
        img: 'https://bit.ly/2Z4KKcF'
        },
        {
          name: 'Flags of the world',
          cards: 195,
          img: 'https://bit.ly/2Z4KKcF'
          },
    
      ]

    

    
    // get all decks into data
    const { loading, error, data } = useQuery(GET_DECKS);



    if (loading) {
        return <h1> Loading </h1>
    } 

    data.decks.forEach(deck => idbPromise('decks', 'put', deck));

    /*
                    
                    <Box>
                        <Image src={testImage.img} alt='placeholder' />
                        <Box>
                            {data.decks.deckname}
                        </Box>
                        <Box>
                        {data.decks.cards.length} cards
                        </Box>
                    </Box>*/



    return (

        <Box>

        

        <Box textAlign="center" fontSize="xl" mb={6} >
            Pick a Deck to Begin!
        </Box>    

        

                
          <Wrap  direction="column"  justify="space-evenly" align="center">
                {data && 
                data.decks.map(deck => (

                    <Box>
                    <WrapItem >  

                    
                    {Auth.loggedIn() ? (
                        <>

<Box 
                            boxShadow="2xl" 
                            bg="red.200"
                            maxW="sm"
                            borderRadius="lg" 
                            overflow="hidden">
                        <Link to={`/game/${deck._id}`} key={deck._id}> 
                        
                            <Image src={periodicTable} alt='periodic table'  />
                            <Box>
                                {deck.deckname} of Elements
                            </Box>
                            <Box>
                                {deck.cards.length} cards
                            </Box>
                            <Box ml={3} mr={3} >
                                <Progress 
                                    colorScheme = "purple"
                                    mb={2}
                                    borderRadius="lg"
                                    value={1}
                                    hasStripe="true"
                                    size="md" 
                                />
                            </Box>
                            <Box align="center" mb={3}>
                                <GiEmerald w={20} h={20} color="#cd7f32"  size={50}></GiEmerald>
                            </Box>
                            </Link>
                        </Box>
                        
                        </>
                    ) : (
                        <>
                        <Box 
                            boxShadow="2xl" 
                            bg="red.200"
                            maxW="sm"
                            borderRadius="lg" 
                            overflow="hidden"
                            onClick={notAuthenticated}
                            >
                    
                        
                            <Image src={periodicTable} alt='periodic table'  />
                            <Box>
                                {deck.deckname} of Elements
                            </Box>
                            <Box>
                                {deck.cards.length} cards
                            </Box>
                            <Box ml={3} mr={3} >
                                <Progress 
                                    colorScheme = "purple"
                                    mb={2}
                                    borderRadius="lg"
                                    value={1}
                                    hasStripe="true"
                                    size="md" 
                                />
                            </Box>
                            <Box align="center" mb={3}>
                                <GiEmerald w={20} h={20} color="#cd7f32"  size={50}></GiEmerald>
                            </Box>
                      
                        </Box>
                        </>
                    )}
                                
                        
                        
                
                 
               
                    </WrapItem>
                    
                   
                    </Box>
                
                ))}


            </Wrap>
  


      </Box>

    )
  }
  
  export default Home;
