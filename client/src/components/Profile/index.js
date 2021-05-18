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

import { 
  GiEmerald,
  GiGoldBar
 } from "react-icons/gi";


function Profile() {

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

  //<GiEmerald w={20} h={20} color="blue.200" ></GiEmerald>
  //GiEmerald

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
            <WrapItem  align="center">
              <Center boxShadow="2xl" bg="red.200" borderRadius="lg">
                <Box maxW="sm" 
                borderRadius="lg" 
                overflow="hidden">
                  <Image src={deck[0].img} alt='placeholder' />
                  <Box>
                    {deck[0].name}
                  </Box>
                  <Box>
                    {deck[0].cards} cards
                  </Box>
                  <Box ml={3} mr={3} >
                    <Progress 
                    colorScheme = "purple"
                    mb={2}
                    borderRadius="lg"
                    value={33}
                    hasStripe="true"
                    size="md" />
                  </Box>
                  <Box align="center" mb={3}>
                  <GiEmerald w={20} h={20} color="#cd7f32"  size={50}></GiEmerald>
                  </Box>
                  
                </Box>
              </Center>
            </WrapItem>
          </Link>
      </Wrap>
      </Box>

      <Box >
        <Box textAlign="center" fontSize="xl" mb={6} >
            Completed
        </Box>   
        <Wrap  direction="column"  align="center">
          <Link to={`/game/12345`}>
            <WrapItem >
            <Center boxShadow="2xl" bg="red.200" borderRadius="lg">
                <Box maxW="sm" 
                
                borderRadius="lg" 
                overflow="hidden">
                  <Image src={deck[1].img} alt='placeholder' />
                  <Box>
                    {deck[1].name}
                  </Box>
                  <Box>
                    {deck[1].cards} cards
                  </Box>
                  <Box ml={3} mr={3} >
                    <Progress 
                    colorScheme = "purple"
                    mb={2}
                    borderRadius="lg"
                    value={100}
                    hasStripe="true"
                    size="md" />
                  </Box>
                  <Box align="center" mb={3}>
                  <GiGoldBar w={20} h={20} color="#FFFF00"  size={50}></GiGoldBar>
                  </Box>
                  
                </Box>
              </Center>
            </WrapItem>
          </Link>
        </Wrap>
      </Box>

    


     </SimpleGrid>
   



    <Box textAlign="center" fontSize="xl" >

  </Box>
  </Box>
  )
}

export default Profile;