import React, { useState, useRef } from 'react';
import GameSession from '../../utils/gameLogic';
import { useQuery } from '@apollo/react-hooks';
import { GET_DECKS, GET_DECK_ID } from "../../utils/queries";
import { Link, useParams } from "react-router-dom";
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
    useToast,
    toast
} from '@chakra-ui/react';
import Flippy, { FrontSide, BackSide } from 'react-flippy'



function Game() {
  const [gameStarted, setGameStarted] = useState(false);
    const [question, setQuestion] = useState('Press Start Game to play');
    const [cardAnswer, setCardAnswer] = useState('');
    const [options, setOptions] = useState([]);
    const [methods, setMethods] = useState({});
    const [gameMode, setGameMode] = useState(1);
    let answer;

    // Allow toast to work
    const toast = useToast()


    // this will display the URL ID value from the URL
    //const { id: deckId } = useParams();
    const { id } = useParams();
    //console.log(thoughtId);

    const { loading, data } = useQuery(GET_DECK_ID, {
      // this is from the react router dom useParams id URL
      //variables: { id: deckId }
      variables: { id }
    });

    if (loading) {
      return <h1>Loading...</h1>
    } else {
      console.log(data)
    }
  
    function handleStart() {
      setGameStarted(true);
      const Game = new GameSession(data.deck.cards, [[], [], [], [], []]); // matrix retrieved from DB
      Game.gameMode = gameMode;
      Game.start();
      let currentQuestion;
      currentQuestion = Game.renderNext();
      setQuestion(currentQuestion.question);
      setOptions(currentQuestion.options);
      setCardAnswer(currentQuestion.answer);
      answer = currentQuestion.answer;
      console.log(answer);

      return {
        handleInput(e) {
          const userInput = e.target.textContent;
          const isCorrect = answer === userInput;
          Game.isCorrect(isCorrect);
          toast({
            title: `${isCorrect ? 'Correct' : 'Incorrect'}`,
            description: `${isCorrect ? 'Correct answer provided' : 'Question will show up again!'}`,
            status: `${isCorrect ? 'success' : 'error'}`,
            duration: 1200,
            isClosable: true,
            position: 'top'
          })

          if (!Game.finished) {
            currentQuestion = Game.renderNext();
            setQuestion(currentQuestion.question);
            setOptions(currentQuestion.options);
            setCardAnswer(currentQuestion.answer);
            answer = currentQuestion.answer;
            console.log(answer);
          } else {
            window.location.replace('/profile');
          }
        }
      }
    }

    return (
      <Box>
      {/*Once you select the mode, a button to start will appear*/}

      {!gameStarted && <Wrap  direction="row"  justify="space-evenly" align="center">
        <WrapItem p={2}>
          <Button 
          boxShadow="2xl" 
          leftIcon={<MdBuild />}
            _hover={{bg:"pink"}} 
            size= "lg" 
            onClick={() => {
              setGameMode(1);
              toast({
                title: "Activated!",
                description: "Mode 1 Activated!",
                status: "info",
                duration: 2800,
                isClosable: true,
                position: "top"
                });
              }
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
          onClick={() => {
            setGameMode(2);
            toast({
              title: "Activated!",
              description: "Mode 2 Activated!",
              status: "info",
              duration: 2800,
              isClosable: true,
              position: "top"
              });
            }
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
          onClick={() => {
            setGameMode(3);
            toast({
              title: "Activated!",
              description: "Mode 3 Activated!",
              status: "info",
              duration: 2800,
              isClosable: true,
              position: "top"
              });
            }
          }>
            Mode 3
          </Button>
        </WrapItem>
      </Wrap>}

        
      {!gameStarted && <Box textAlign="center" fontSize="xl" mb={6} >
           <Button 
           m={4} 
           boxShadow="2xl"
           onClick={() =>{
            setMethods(handleStart()); 
          }
          }
          >
            Start Game
          </Button>
      </Box>}

        <Box>
        <Wrap  direction="column"  justify="space-between" align="center">
        <Flippy>
        <FrontSide>
            <WrapItem 
            boxShadow="2xl"
            bg="red.200"
            maxW="sm"
            borderRadius="lg" 
            overflow="hidden">
              <Center w="350px" h="400px">                  
                {question}                
              </Center>              
            </WrapItem>
            </FrontSide>
            <BackSide>
            <WrapItem 
            boxShadow="2xl"
            bg="red.200"
            maxW="sm"
            borderRadius="lg" 
            overflow="hidden">
              <Center w="350px" h="400px">
                {cardAnswer}            
              </Center>            
            </WrapItem>
            </BackSide>
        </Flippy>
        </Wrap>

        <Wrap  direction="row"  justify="space-evenly" align="center" mt={5}>
          {options.map(option => (
            <WrapItem key={option} p={2}>
              <Button 
              boxShadow="2xl"  
              onClick={e => {
                methods.handleInput(e)
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
