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
  GridItem,
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
  Button,
  useToast,
  Select
} from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import {
    MdBuild,
    MdCall
} from "react-icons/md"
import { 
    GiEmerald,
    GiGoldBar
   } from "react-icons/gi";
import Auth from '../../utils/auth';
import periodicTable from '../../assets/images/periodic-table.svg'
  

function Leaderboard() {
     const testImage = {
         name: 'Periodic Table of Elements',
         cards: 118,
        img: 'https://bit.ly/2Z4KKcF'
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

    const toast = useToast()

    // get all decks into data
    const { loading, error, data } = useQuery(GET_DECKS);



    if (loading) {
        return <h1> Loading </h1>
    } else {
        console.log(data)
    }

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
        Welcome to the leaderboard!
    </Box>    

    <Center mb={5}>
    <Select boxShadow="2xl" width="300px" placeholder="Select Deck to Filter">
        <option value="option1">Periodic Table</option>
        <option value="option2">Flags of the World</option>
    </Select>
    <Link to={`/leaderboard`}>
    <Button ml={3}
          boxShadow="2xl" 
            _hover={{bg:"pink"}} 
            size= "lg" 
            >
              
            Show all Decks!
          </Button>
       </Link>
    </Center>

    <Box >

    <Table variant="striped" colorScheme="teal">
        <TableCaption>Mind Deck Leaderboard</TableCaption>
        <Thead>
            <Tr>
            <Th>User Name</Th>
            <Th>Deck</Th>
            <Th>Cards Completed</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
            <Td>esroleo</Td>
            <Td>Periodic Table</Td>
            <Td>50</Td>
            </Tr>
            <Tr>
            <Td>anagha</Td>
            <Td>Periodic Table</Td>
            <Td>100</Td>
            </Tr>
            <Tr>
            <Td>ali</Td>
            <Td>Periodic Table</Td>
            <Td>20</Td>
            </Tr>
            <Tr>
            <Td>shawn</Td>
            <Td>Flags of the World</Td>
            <Td>15</Td>
            </Tr>
            <Tr>
            <Td>terrance</Td>
            <Td>Flags of the World</Td>
            <Td>30</Td>
            </Tr>
            <Tr>
            <Td>kris</Td>
            <Td>Flags of the World</Td>
            <Td>90</Td>
            </Tr>
        </Tbody>
        <Tfoot>
            <Tr>
            <Th>User Name</Th>
            <Th>Deck</Th>
            <Th>Cards Completed</Th>
            </Tr>
        </Tfoot>
        </Table>

    </Box>


  

  
    

        
         
      </Box>
    )
  }
  
  export default Leaderboard;
