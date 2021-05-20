import React from 'react';
import { Link, Redirect, useParams } from "react-router-dom";

import {
  Box,
  Wrap,
  WrapItem,
  Center,
  SimpleGrid,
  Image,
  Progress,
} from '@chakra-ui/react';

import { 
  GiEmerald,
  GiGoldBar
} from "react-icons/gi";

import { useQuery } from '@apollo/react-hooks';
import { ME, GET_USER_BY_USERNAME } from '../../utils/queries';
import Auth from '../../utils/auth';

import periodicTable from '../../assets/images/periodic-table.svg'
import flagsWorld from '../../assets/images/flags-world.png'


function Profile() {
  const { username } = useParams();
  // const { loading: isLoading, data: isData } = useQuery(ME);

  if (!username && !Auth.loggedIn()) {
    return <h1>please use the navigation to login!!</h1>
  }

  // isData && console.log(isData);

  const { loading, data } = useQuery(username ? GET_USER_BY_USERNAME : ME, {
    variables: { username }
  })

  if (loading) {
    return <h1>loading...</h1>
  }

  const user = data.me || data.user || false;

  if (!user) {
    return <h1>404 NOT FOUND!!</h1>
  }

  // const user = data?.me || data?.user || [];
  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
    return <Redirect to="/profile" />;
  }

  console.log(user);

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
                  <Image src={periodicTable} alt='Periodic Table' />
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
                  <Image src={flagsWorld} alt='Flags of the World' />
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
