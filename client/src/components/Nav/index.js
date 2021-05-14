import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Avatar
} from '@chakra-ui/react';

function Nav() {
  return (
    <Flex >
      <Box p="4" >
        Logo
      </Box>
      <Spacer />
      <Box p="4">
        {/*<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />*/}
        <Avatar ></Avatar>
      </Box>
    </Flex>
  )
}

export default Nav;