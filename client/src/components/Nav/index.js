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
  useDisclosure
} from '@chakra-ui/react';


import { CopyIcon } from '@chakra-ui/icons';

import SignupForm from '../Signup';
import Login from '../Login';


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
          > <CopyIcon 
          w={20} h={20} 
          color="blue.200" >
            </CopyIcon>Logo 
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SignupForm />
          </ModalBody>          
        </ModalContent>
    </Modal>
    </>
  )
}

export default Nav;