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
  SimpleGrid
} from '@chakra-ui/react';

function Profile() {
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