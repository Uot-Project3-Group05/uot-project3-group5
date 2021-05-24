import React, { useState, useRef, useEffect } from 'react';
import GameSession from '../../utils/gameLogic';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_DECKS, GET_DECK_ID, GET_GAME_BY_DECK_NAME } from "../../utils/queries";
import { ADD_GAME, UPDATE_GAME } from '../../utils/mutations';
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
    toast,
    useDisclosure
} from '@chakra-ui/react';
import Flippy, { FrontSide, BackSide } from 'react-flippy'
// Chakra Modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"



function Game() {
  const [gameStarted, setGameStarted] = useState(false);
    const [question, setQuestion] = useState('Press Start Game to play');
    //Answer for Back of Card, not sure why but answer checking if statement won't read this variable properly to check answer always displays as incorrect
    const [cardAnswer, setCardAnswer] = useState(''); 
    const [options, setOptions] = useState([]);
    const [methods, setMethods] = useState({});
    const [gameMode, setGameMode] = useState(1);
    // Modal Declaration
    const { isOpen, onOpen, onClose } = useDisclosure()
    // Modal useState
    const [numCorrectAnswer, SetNumCorrectAnswer] = useState(0); 


    const ref = useRef();
    let answer; // for answer checking
    let correctAnswer; // will hold tally correct answer number

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
    //const getGameStatus = useQuery(GET_GAME_BY_DECK_NAME, {
    const {loading: loadingGame, data: gameData }  = useQuery(GET_GAME_BY_DECK_NAME, {
      skip: !data,
      variables: { deck: data && data.deck.deckname },
    });

    const [addGame, { error }] = useMutation(ADD_GAME);
    const [updateGame] = useMutation(UPDATE_GAME);

    if (loadingGame || loading) {
      return <h1>Loading...</h1>
    } else {
      console.log('gameData', gameData);
      console.log('gameData.getGame', gameData.getGame);

      if (!gameData.getGame) {
        console.log('inside')

        try {
          // execute addUser mutation and pass in variable data from form
          const addGameData = addGame({
            variables: { deck: data.deck.deckname }
          });
          console.log(addGameData);
        } catch (e) {
          console.error(e);
        }
      };
    }
    
    function handleStart() {
      setGameStarted(true);
      const Game = new GameSession(data.deck.cards, [[], [], [], [], []]); // matrix retrieved from DB
      Game.gameMode = gameMode;
      Game.start();
      let currentQuestion;
      currentQuestion = Game.renderNext();
      console.log(currentQuestion);
      setQuestion(currentQuestion.question);
      setOptions(currentQuestion.options);
      setCardAnswer(currentQuestion.answer); //put answer on back of card
      answer = currentQuestion.answer; //load correct answer for if statement below

      

      let matrixState = [];

      // Modal Result Set
      let tallyResults = {}

      return {
        handleInput(e) {
          const userInput = e.target.textContent;
          const isCorrect = answer === userInput;
          ref.current.toggle()
          
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
            answer = currentQuestion.answer;
            setTimeout(() => {
              setCardAnswer(answer); 
            }, 800); 
            ; //put answer on back of card
          } else { // at this point the  matrix has been sorted.
            //const tallyResults = Game.tallyResults()
            let tallyAnswer = (Game.tallyResults())
            SetNumCorrectAnswer(tallyAnswer.correct)
           
           //console.log(tallyResults.correct)


            //let tallyResults = async () => { return SetNumCorrectAnswer(Game.tallyResults()) }
            //console.log(tallyResults())
            
         //  tallyResults().then((value) => console.log(value))
           // tallyResults().then((value) => SetNumCorrectAnswer(value))
          //  console.log(numCorrectAnswer)

            // async function tallyResults() {
            //   return numCorrectAnswer = await SetNumCorrectAnswer(Game.tallyResults())
            // };
            // async function tallyResults() {
            //   await SetNumCorrectAnswer(Game.tallyResults())
            //   //
            //   console.log("inside the async function")
            //   console.log(numCorrectAnswer)
            // };

           // tallyResults()

           

            //SetNumCorrectAnswer(tallyResults)
            // To be used for the modal showing how many you had correct.


            matrixState = Game.matrix;
            console.log(matrixState);
            let score = 0;


            try {
              score += 5;
              // execute addUser mutation and pass in variable data from form
              const updateGameData = updateGame({
                variables: { deck: data.deck.deckname, score, matrix: matrixState }
              });

              console.log(typeof updateGameData);
            } catch (e) {
              console.error(e);
            }

            // change the finished back to false to continue playing           
            //Game.reset();
            // change the finished back to false to continue playing        
            // Show Modal with results.   
            onOpen(true)
            //window.location.replace('/profile');
            // Game.start();
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
                description: "Symbol Mode Activated!",
                status: "info",
                duration: 2800,
                isClosable: true,
                position: "top"
                });
              }
            }
            >
            Symbol Mode
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
              description: "Description Mode Activated!",
              status: "info",
              duration: 2800,
              isClosable: true,
              position: "top"
              });
            }
          }>
            Description Mode
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
              description: "Mix Mode Activated!",
              status: "info",
              duration: 2800,
              isClosable: true,
              position: "top"
              });
            }
          }>
            Mix Mode
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
        <Flippy
        flipOnHover={false}
        flipOnClick={false}
        ref={ref}>        
        <FrontSide
        style={{ backgroundColor: "#FEB2B2", borderRadius: "0.5rem", boxShadow: "5px 10px 10px 5px grey"}}>
            <WrapItem 
            //boxShadow="2xl"
            bg="red.200"
            maxW="sm"
            borderRadius="lg" 
            overflow="hidden">
              <Center w="350px" h="400px">                  
                {question}                
              </Center>              
            </WrapItem>
            </FrontSide>
            <BackSide
            animationDuration={600}
            style={{ backgroundColor: "#FEB2B2", borderRadius: "0.5rem", boxShadow: "5px 10px 10px 5px grey"}}>
            <WrapItem 
            //boxShadow="2xl"
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
                
                ref.current.toggle();
                setTimeout(() => {
                  methods.handleInput(e); 
                }, 800)                 
              }}
              >
                {option}
              </Button>
            </WrapItem>
          ))}
        </Wrap>

      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.deck.deckname}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          You have answered {numCorrectAnswer} correctly.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      </Box>

    </Box>
    )
  }
  
  export default Game;
