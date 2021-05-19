import React from 'react';
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Avatar,
  LinkBox,
  LinkOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Button,
  useDisclosure,
  Image

} from '@chakra-ui/react';

import logo from '../../assets/images/logoMD.png'


import { CopyIcon } from '@chakra-ui/icons';

import SignupForm from '../Signup';
import LoginForm from '../Login';


function Nav(props) {

  const {
    navLinkSelected,
    setNavLinkSelected
   
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

//  href="#Home" 
//  onClick={() => setNavLinkSelected('Home')}
//LinkOverlay 
// href="#Profile" 
// onClick={() => setNavLinkSelected('Profile')}

  return (
    <>
    <Flex>    
      <Box p="4" >
        <LinkBox>
        <Link 
          to={`/`}
          > 
          <Image src={logo} alt='placeholder' 
          w={20} h={20} 
          />
        
        </Link>
        </LinkBox>        
      </Box>
      <Spacer />
      <Box p="4" d='flex' alignItems='center'>
        <Box mr={3}>
          <Button onClick={onOpen}>Login/Signup</Button>
        </Box>
        {/*<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />*/}
        <LinkBox>
        <Link 
          to={`/profile`}
        >
        <Avatar size="xl" ></Avatar>
        </Link>
        </LinkBox>

      </Box>
    </Flex>
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* <ModalContent> */}                
                <ModalBody>
                  <LoginForm />
                </ModalBody>          
              {/* </ModalContent> */}
            </TabPanel>
            <TabPanel>
              {/* <ModalContent> */}                              
                <ModalBody>
                  <SignupForm />
                </ModalBody>          
              {/* </ModalContent> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ModalContent>        
    </Modal>
    </>
  )
}

export default Nav;