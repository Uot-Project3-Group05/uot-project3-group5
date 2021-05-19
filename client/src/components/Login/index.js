import React, { useState } from 'react';
import { Form, 
  Button, 
  Alert, 
  FormControl, 
  FormLabel, 
  FormErrorMessage, 
  FormHelperText, 
  Input,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/react-hooks';

//import { createUser } from '../utils/API';
import { LOGIN } from '../../utils/mutations'
import Auth from '../../utils/auth';

const LoginForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // set state for form validation
  const [validated] = useState('false');
  // set state for alert
  //const [showAlert, setShowAlert] = useState('false');

  const [loginUser] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });    
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData }
      });
      

    //  const { token, user } = await response.json();
    //  console.log(user);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      //setShowAlert('true');
    }

    setUserFormData({      
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above*/}
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        {/* <Alert onClose={() => setShowAlert('false')} show={showAlert} variant='danger'>
          Something went wrong with your login!
        </Alert> */}
   

        <FormControl
          id='email'          
          name='email'
          onChange={handleInputChange}
          value={userFormData.email}
          isRequired
          mt={2}
        >
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input name='email' type='email' placeholder='Your email address' />
          
          <FormErrorMessage>Email is required!</FormErrorMessage>
        </FormControl>

        <FormControl
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password}
          isRequired
          mt={2}          
        >
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input name='password' type='password' placeholder='Your Password' />
          <FormErrorMessage>Password is required!</FormErrorMessage>
        </FormControl>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          mt={2}
          >
          Submit
        </Button>
      </form>
    </>
  );
};

export default LoginForm;