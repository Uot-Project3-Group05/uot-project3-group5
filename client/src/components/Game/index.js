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
      {/*Once you select the mode, a button to start will appear*/}
      <Box textAlign="center" fontSize="xl" mb={6} >
           <Button m={4} boxShadow="2xl"  >
                  Start Game
            </Button>
      </Box>     

        <Box >
        <Wrap  direction="column"  justify="space-between" align="center">
            <WrapItem boxShadow="2xl">
              <Center w="350px" h="400px" bg="red.200">
                Box 1
              </Center>
            </WrapItem>
              <WrapItem>
                <Button m={4} boxShadow="2xl"  >
                  Answer 1
                </Button>
                <Button m={4} boxShadow="2xl"  >
                  Answer 1
                </Button>
                <Button m={4} boxShadow="2xl"  >
                  Answer 1
                </Button>

            </WrapItem>
            
        </Wrap>
        </Box>

    </Box>
    )
  }
  
  export default Game;