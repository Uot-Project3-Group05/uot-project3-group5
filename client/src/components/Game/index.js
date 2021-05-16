import React, { useState } from 'react';
import GameSession from '../../utils/gameLogic';
import { useQuery } from '@apollo/react-hooks';
import { GET_DECKS } from "../../utils/queries";
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
    const [question, setQuestion] = useState('no question');
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState('');


    const { loading, data } = useQuery(GET_DECKS);
    if (loading) {
      return <h1>Loading...</h1>
    }


    const Game = new GameSession(data.decks.cards, [[], [], [], [], []]);
    let currentQuestion;

    function handleStart() {
      Game.start();
      currentQuestion = Game.renderNext();
      setQuestion(currentQuestion.question);
      setOptions(currentQuestion.options);
      setAnswer(currentQuestion.answer);
    }

    function handleInput(e) {
      const userInput = e.target.textContent;
      console.log(answer)
      alert(answer === userInput)
    }


    return (

        
      <Box>

 
      {/*Once you select the mode, a button to start will appear*/}
      <Box textAlign="center" fontSize="xl" mb={6} >
           <Button 
           m={4} 
           boxShadow="2xl"
           onClick={() =>{
            handleStart(); 
          }
          }
          >
                  Start Game
            </Button>
      </Box>     

        <Box >
        <Wrap  direction="column"  justify="space-between" align="center">
            <WrapItem boxShadow="2xl">
              <Center w="350px" h="400px" bg="red.200">
                {question}
              </Center>
            </WrapItem>

        </Wrap>

        <Wrap  direction="row"  justify="space-evenly" align="center" mt={5}>
          {options.map(option => (
            <WrapItem key={option} p={2}>
              <Button 
              boxShadow="2xl"  
              onClick={e => {
                handleInput(e);
              }}
              >
                {option}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
            
   
        </Box>

    </Box>
    )
  }
  
  export default Game;