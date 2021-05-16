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
    Button,
    useToast
} from '@chakra-ui/react';



function Game() {
    // Chakra toast button


    const toast = useToast()


    return (

        
      <Box>

 
     <Box textAlign="center" fontSize="xl" mb={6} >
     <Wrap  direction="row"  justify="space-evenly" align="center">
            <WrapItem p={2}>
              <Button 
              boxShadow="2xl" 
              leftIcon={<MdBuild />}
               _hover={{bg:"pink"}} 
               size= "lg" 
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
                Mode 1 
              </Button>
            </WrapItem>
            <WrapItem p={2}>
              <Button 
              boxShadow="2xl" 
              leftIcon={<MdBuild />} 
              _hover={{bg:"pink"}} 
              size = "lg"
              onClick={() =>
                toast({
                  title: "Activated!",
                  description: "Mode 2 Activated!",
                  status: "info",
                  duration: 2800,
                  isClosable: true,
                  position: "top"
                })
              }>
                Mode 2
              </Button>
            </WrapItem>
            <WrapItem p={2}>
              <Button 
              boxShadow="2xl" 
              leftIcon={<MdBuild />}
              _hover={{bg:"pink"}} 
              size = "lg"
              onClick={() =>
                toast({
                  title: "Activated!",
                  description: "Mode 3 Activated!",
                  status: "info",
                  duration: 2800,
                  isClosable: true,
                  position: "top"
                })
              }>
                Mode 3
              </Button>
            </WrapItem>
        </Wrap>
      </Box>     
      {/*Once you select the mode, a button to start will appear*/}
      <Box textAlign="center" fontSize="xl" mb={6} >
           <Button 
           m={4} 
           boxShadow="2xl"
           onClick={() =>
            toast({
              title: "Starting Game!",
              status: "info",
              duration: 2800,
              isClosable: true,
              position: "top"
            })
          }
          >
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

        </Wrap>

        <Wrap  direction="row"  justify="space-evenly" align="center" mt={5}>
              <WrapItem p={2}>
                <Button 
                 boxShadow="2xl"  
                onClick={() =>
                  toast({
                    title: "Correct!",
                    description: "Correct answer provided!",
                    status: "success",
                    duration: 2800,
                    isClosable: true,
                  })
                }
                >
                  Correct Answer!
                </Button>
                </WrapItem>
                <WrapItem p={2}>
                <Button 
                boxShadow="2xl"  
                onClick={() =>
                  toast({
                    title: "Incorrect!",
                    description: "Question will show up again!",
                    status: "error",
                    duration: 2800,
                    isClosable: true,
                  })
                }
                >
                  Incorrect Answer!
                </Button>
                </WrapItem>
                <WrapItem p={2}>
                <Button 
                boxShadow="2xl"  
                onClick={() =>
                  toast({
                    title: "Incorrect!",
                    description: "Question will show up again!",
                    status: "error",
                    duration: 2800,
                    isClosable: true,
                  })
                }
                >
                  Incorrect Answer!
                </Button>

            </WrapItem>
          </Wrap>
            
   
        </Box>

    </Box>
    )
  }
  
  export default Game;