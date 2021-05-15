import React from 'react';
import {
    MdBuild,
    MdCall
 } from "react-icons/md"
import {
    Box,
    Flex,
    Spacer,
    Avatar,
    Wrap,
    WrapItem,
    Center,
    SimpleGrid,
    Stack,
    Button
} from '@chakra-ui/react';

function Game() {
    return (

        
      <Box>

 
     <Box textAlign="center" fontSize="xl" mb={6} >
     <Wrap  direction="row"  justify="space-evenly" align="center">
            <WrapItem>
              <Button boxShadow="2xl" leftIcon={<MdBuild />} _hover={{bg:"pink"}} size= "lg" >
                Mode 1 
              </Button>
            </WrapItem>
            <WrapItem>
              <Button boxShadow="2xl" leftIcon={<MdBuild />} _hover={{bg:"pink"}} size = "lg">
                Mode 2
              </Button>
            </WrapItem>
            <WrapItem >
              <Button boxShadow="2xl" leftIcon={<MdBuild />} _hover={{bg:"pink"}} size = "lg">
                Mode 3
              </Button>
            </WrapItem>
        </Wrap>
      </Box>     

      <Box textAlign="center" fontSize="xl" mb={6} >
        Pick a Deck to Begin!
      </Box>     
  
      <SimpleGrid minChildWidth="300px" spacing={10} ml={5} mr={5}>
  
        <Box >
         <Box textAlign="center" fontSize="xl" mb={6} >
            In Progress
          </Box>     
        <Wrap  direction="column"  justify="space-evenly" align="center">
            <WrapItem boxShadow="2xl">
              <Center w="300px" h="300px" bg="red.200">
                Box 1
              </Center>
            </WrapItem>
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
              <WrapItem boxShadow="2xl">
                <Center w="300px" h="300px" bg="red.200">
                  Box 1
                </Center>
              </WrapItem>
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
  
  export default Game;