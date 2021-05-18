import React from 'react';
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Avatar,
  LinkBox,
  LinkOverlay,
  Image
} from '@chakra-ui/react';

import logo from '../../assets/images/logoMD.png'


import { CopyIcon } from '@chakra-ui/icons'


function Nav(props) {

  const {
    navLinkSelected,
    setNavLinkSelected
   
  } = props;

//  href="#Home" 
//  onClick={() => setNavLinkSelected('Home')}
//LinkOverlay 
// href="#Profile" 
// onClick={() => setNavLinkSelected('Profile')}

  return (
    <Flex >
    
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
      <Box p="4">
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
  )
}

export default Nav;