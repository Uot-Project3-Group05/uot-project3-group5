import React from 'react';
import { Link, useParams } from "react-router-dom";
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
  CircularProgressLabel
} from '@chakra-ui/react';

function Profile() {

  const deck = {
    name: 'Periodic Table of Elements',
    cards: 118,
    img: 'https://bit.ly/2Z4KKcF'
  } 

  return (
    <Box>

    <Box textAlign="center" fontSize="xl" mb={6} >
      Pick a Deck to Continue or Begin!
    </Box>     

    <SimpleGrid minChildWidth="300px" spacing={10} ml={5} mr={5}>

      <Box >
       <Box textAlign="center" fontSize="xl" mb={6} >
          In Progress
        </Box>     
      <Wrap  direction="column"  justify="space-evenly" align="center">
          <Link to={`/game/12345`}>
            <WrapItem boxShadow="2xl" align="center">
              <Center w="300px" h="300px" bg="red.200" borderRadius="lg">
                <Box>
                  <Image src={deck.img} alt='placeholder' />
                  <Box>
                    {deck.name}
                  </Box>
                  <Box>
                    {deck.cards} cards
                  </Box>
                  <Box>
                    <Progress value={33} hasStripe="true" size="md" />
                  </Box>
                </Box>
              </Center>
            </WrapItem>
          </Link>
          <WrapItem boxShadow="2xl">
            <Center w="300px" h="300px" bg="blue.200">
            <Box>
                  <Image src={deck.img} alt='placeholder' />
                  <Box>
                    {deck.name}
                  </Box>
                  <Box>
                    {deck.cards} cards
                  </Box>
                  <Box align="center">
                    <CircularProgress value={33} size="10%">
                      <CircularProgressLabel>33%</CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                </Box>
            </Center>
          </WrapItem>
          <WrapItem boxShadow="2xl">
            <Center w="300px" h="300px" bg="yellow.200">
              Box 3
            </Center>
          </WrapItem>
      </Wrap>
      </Box>

      <Box >
        <Box textAlign="center" fontSize="xl" mb={6} >
            Completed
        </Box>   
        <Wrap  direction="column"  align="center">
          <Link to={`/game/12345`}>
            <WrapItem boxShadow="2xl">
              <Center w="300px" h="300px" bg="red.200">
                Box 1
              </Center>
            </WrapItem>
          </Link>
            <WrapItem boxShadow="2xl">
              <Center w="300px" h="300px" bg="blue.200">
                Box 2
              </Center>
            </WrapItem>
            <WrapItem boxShadow="2xl">
              <Center w="300px" h="300px" bg="yellow.200">
                Box 3
              </Center>
            </WrapItem>
        </Wrap>
      </Box>

    


     </SimpleGrid>
   



    <Box textAlign="center" fontSize="xl" >

  </Box>
  </Box>
  )
}

export default Profile;