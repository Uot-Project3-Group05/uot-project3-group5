import React, { useState } from 'react';
import { Form, Button, Alert, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';
import { useMutation } from '@apollo/react-hooks';

//import { createUser } from '../utils/API';
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState('false');
  // set state for alert
  //const [showAlert, setShowAlert] = useState('false');

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });    
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    //dont need this for chakra ui
    /*// check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }*/

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });
      

    //  const { token, user } = await response.json();
    //  console.log(user);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      //setShowAlert('true');
    }

   /* setUserFormData({
      username: '',
      email: '',
      password: '',
    });*/
  };

  // Disable button logic test
  //disabled={!(userFormData.username && userFormData.email && userFormData.password)

  return (
    <>
      {/* This is needed for the validation functionality above*/}
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        {/* <Alert onClose={() => setShowAlert('false')} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert> */}

        <FormControl isRequired  mt={2}>                      
          <FormLabel name='username'>Username</FormLabel>
          <Input name='username'
          type='text' 
          placeholder='Your username' 
          value={userFormData.username}
          onChange={handleInputChange}         
          />
        </FormControl>

        <FormControl isRequired mt={2}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input name='email' 
          type='email' 
          placeholder='Your email address'
          value={userFormData.email}
          onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={2}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input name='password'
          type='password' 
          placeholder='Your Password'
          value={userFormData.password}
          onChange={handleInputChange}
          />
        </FormControl>
        <Button
          type='submit'
          mt={2}
          >
          Submit
        </Button>
      </form>
      {error && <div>{error.message.toString().includes('duplicate') ? 'User with email id exist!' : error.message.substring(14,error.message.length)}</div>}
    </>
  );
};

export default SignupForm;