import React from 'react';
import { GET_ALL_DECKS_BY_USER } from "../../utils/queries";
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from "react-router-dom";
import svg0 from '../../assets/images/svg1.svg';
import svg1 from '../../assets/images/svg2.svg';
import svg2 from '../../assets/images/svg3.svg';
import {
  Box,
  Flex,
  Spacer,
  Avatar,
  Wrap,
  WrapItem,
  Center,
  SimpleGrid,
  Image,
  Progress,
  CircularProgress,
  CircularProgressLabel,
  Button,
  useToast
} from '@chakra-ui/react';

import {
  MdBuild,
  MdCall
} from "react-icons/md"

import {
  GiEmerald,
  GiGoldBar
} from "react-icons/gi";

import periodicTable from '../../assets/images/periodic-table.svg'
import flagsWorld from '../../assets/images/flags-world.png'




function Profile() {

  const deckImage = [
    {
      name: 'Periodic Table of Elements',
      cards: 118,
      img: svg0
    },
    {
      name: 'Famous Fiction',
      cards: 75,
      img: svg1
    },
    {
      name: 'US States and Capitals',
      cards: 50,
      img: svg2
    }
  ];



  const toast = useToast()
  // Get all decks for the logged in user.
  const { loading, data } = useQuery(GET_ALL_DECKS_BY_USER);

  if (loading) {
    return <h1> Loading </h1>
  } else {
    console.log(data)
  }

  
//   const imgArray = [svg0, svg1, svg2];

//   for (let i = 0; i < 3; i++) {
//     data.getAllGame[i].image = imgArray[i];
// }



  //<GiEmerald w={20} h={20} color="blue.200" ></GiEmerald>
  //GiEmerald

  return (
    <Box>

      <Box textAlign="center" fontSize="xl" mb={6} >
        Pick a Deck a Game
    </Box>

    {/*

      <Box textAlign="center" fontSize="xl" mb={6} >
        <Link to={`/leaderboard`}>
          <Button
            boxShadow="2xl"
            leftIcon={<MdBuild />}
            _hover={{ bg: "pink" }}
            size="lg"
            onClick={() =>
              toast({
                title: "Activated!",
                description: "Mode 1 Activated!",
                status: "info",
                duration: 2800,
                isClosable: true,
                position: "top"
              })
            }
          >

            Go to Leaderboard!
          </Button>
        </Link>

      </Box>
          */}

      <SimpleGrid minChildWidth="300px" col={2} spacing={10} ml={5} mr={5}>

          
        <Box >


          {/*
          <Box textAlign="center" fontSize="xl" mb={6} >
            In Progress
         
        </Box>
         */}
         
          <Wrap direction="column" justify="space-evenly" align="center">
            
          {data &&
              data.getAllGame.map(deck => (
             
              <Link to={`/`}>
              <WrapItem align="center">                 
                <Center boxShadow="2xl" bg="red.200" borderRadius="lg">
                  <Box maxW="sm"
                    borderRadius="lg"
                    overflow="hidden">
                    <Image src={periodicTable} alt='Periodic Table' />
                    <Box>
                      {deck.deck}
                    </Box>
                    <Box>
                      {deck.score} strong cards
                  </Box>
                    <Box ml={3} mr={3} >
                      <Progress
                        colorScheme="purple"
                        mb={2}
                        borderRadius="lg"
                        value={deck.score}
                        hasStripe="true"
                        size="md" />
                    </Box>
                    <Box align="center" mb={3}>
                      <GiEmerald w={20} h={20} color="#cd7f32" size={50}></GiEmerald>
                    </Box>

                  </Box>
                </Center>
              </WrapItem>
              </Link>
              
           ))}
        
           
          </Wrap>
        </Box>

        {/*
        <Box >
          <Box textAlign="center" fontSize="xl" mb={6} >
            Completed
        </Box>
          <Wrap direction="column" align="center">
            <Link to={`/game/12345`}>
              <WrapItem >
                <Center boxShadow="2xl" bg="red.200" borderRadius="lg">
                  <Box maxW="sm"

                    borderRadius="lg"
                    overflow="hidden">
                    <Image src={flagsWorld} alt='Flags of the World' />
                    <Box>
                      {deck[1].name}
                    </Box>
                    <Box>
                      {deck[1].cards} cards
                  </Box>
                    <Box ml={3} mr={3} >
                      <Progress
                        colorScheme="purple"
                        mb={2}
                        borderRadius="lg"
                        value={100}
                        hasStripe="true"
                        size="md" />
                    </Box>
                    <Box align="center" mb={3}>
                      <GiGoldBar w={20} h={20} color="#FFFF00" size={50}></GiGoldBar>
                    </Box>

                  </Box>
                </Center>
              </WrapItem>
            </Link>
          </Wrap>
        </Box>

        */}


      </SimpleGrid>




      <Box textAlign="center" fontSize="xl" >

      </Box>
    </Box>
  )
}

export default Profile;
