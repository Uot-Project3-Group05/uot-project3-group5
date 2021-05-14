import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Avatar,
  Link,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';


import { CopyIcon } from '@chakra-ui/icons'


function Nav(props) {

  const {
    navLinkSelected,
    setNavLinkSelected
   
  } = props;



  return (
    <Flex >
    
      <Box p="4" >
        <Link href="#Home" 
        onClick={() => setNavLinkSelected('Home')}
        > <CopyIcon w={20} h={20} color="blue.200" ></CopyIcon>Logo 
        </Link>
      </Box>
      <Spacer />
      <Box p="4">
        {/*<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />*/}
        <LinkBox>
        <LinkOverlay href="#Profile" onClick={() => setNavLinkSelected('Profile')}>
        <Avatar size="xl" ></Avatar>
        </LinkOverlay>
        </LinkBox>

      </Box>
    </Flex>
  )
}

export default Nav;