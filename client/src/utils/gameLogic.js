class GameSession {
    constructor(deck, matrix) {
        this.finished = false;
        this.matrix = matrix;  // retrieved from DB or IndexedDb
        this.deck = deck;
        this.progress = 0; // for displaying progress on problem set - i.e. 6/10
        this.cardsInSet = [];
        this.problemSet = [];
        this.correctCards = [];
        this.incorrectCards = [];
        this.currentQuestion = {};
        this.result = [[], [], [], [], []];
    }

    // randomly reorder an array
    shuffleArray(array) { 
        array.sort((a, b) => Math.random() - 0.5)
        return array;
    }

    // get number of 'strong' cards and total number of cards in the game matrix
    getTotal() {
        // total number of cards in arrays [3] & [4]
        let strongCards = 0;
        // total all cards in the matrix 
        let total = 0;
        for (let i=0; i<5; i++) {
            if (i > 2) {
                strongCards += this.matrix[i].length;
            }
            total += this.matrix[i].length;
        }
        return { strong: strongCards, total: total};
    }

    // pushes cards to matrix on first run and when 70% of current cards are in matrix[3] or matrix[4]
    addNewCards(index) { // set index to 0 for first run, use total cards in matrix to determine index for each addition afterwards
        let slicedCards;
        let num = this.deck.length - index + 1;
        if (this.deck.length - index + 1 < 15 ) {
            slicedCards = this.deck.slice(index, index+num);
        } else {
            slicedCards = this.deck.slice(index, index+15);
        }
        // slice n cards from deck array, push to matrix[2]
        slicedCards.forEach(card => this.matrix[2].push(card.cardId));
        console.log(this.matrix);
    }

    // if this is not the first game, determine if cards need to be added based on 'score'
    addCardsByScore() { 
        const score = this.getTotal();
        if (score.strong/score.total >= 0.7) {
            this.addNewCards(score.total);
        }
    }

    // select cards based on a weighted random number generator
    randomSelect() { 
        let check = Math.floor(Math.random() * 100);
        let bin; 
        // determine which array in the matrix to pick from
        if (check >= 0 && check < 40) {
            bin = 0;
        } else if (check >= 40 && check < 70){
            bin = 1;
        } else if (check >= 70 && check < 85){
            bin = 2;
        } else if (check >= 85 && check < 95){
            bin = 3;
        } else {
            bin = 4;
        }
        // if the array has no objects, call the function again
        if (this.matrix[bin].length < 1) {
            this.randomSelect();
        }

        // if the array has entries, find the first one not already in this.cardsInSet
        const newCard = this.matrix[bin].find((card) => {
            return this.cardsInSet.indexOf(card) === -1
        });

        // if array has entries but all entries are already in this.cardsInSet, call function again
        if (!newCard) {
            this.randomSelect();
        } else {
            // if a card meets all criteria, push to this.cardsInSet array
            this.cardsInSet.push(newCard);
        }
    }

    // get cards from matrix to fill this.cardsInSet array
    selectCards() {
        // shuffle all arrays
        for (let i=0; i<5; i++) {
            this.shuffleArray(this.matrix[i])
        }
        // select random cards to fill this.cardsInSet
        for (let j=0; j<10; j++) {
            this.randomSelect();
        }
    }

    // get all data for a card from the deck given its cardId
    getCardData(cardId) { 
        var result = this.deck.filter(card => {
            return card.cardId === cardId;
        });
        return result[0];
    }

     // create problem options from 2 random cards in set
    generateOptions(cardId) {
        let choices = this.cardsInSet.slice();
        let results = [];
        //console.log(`The main card is ${cardId}`);
        choices.splice(choices.indexOf(cardId), 1);
        //console.log(`The choices after removing card ${cardId} are: ${choices}`);
        for (let i=0; i<2; i++) {
            const random = Math.floor(Math.random()*choices.length); // we don't add +1 because we are indexing from
            //console.log(`the card in spot ${i} is from index ${indexToRemove[0]} and is cardNumber ${this.cardsInSet[indexToRemove[0]]}`);
            const optionCard = this.getCardData(choices[random]);
            //console.log(optionCard);
            results[i] = optionCard.back;
            choices.splice(random, 1);
            //console.log(`The choices after removing index ${indexToRemove[0]} are: ${choices}`);
        }
        return results;
    }

    // create each "problem" as an object, then push to problemSet array.
    createProblemSet() {
        for (let i = 0; i < 10; i++) { 
            let problem = {question: '', options: [], answer: ''};
            let card = this.getCardData(this.cardsInSet[i]);
            problem.question = card.front;
            let options = this.generateOptions(card.cardId);
            options.push(card.back);
            problem.options = this.shuffleArray(options);
            problem.answer = card.back;
            this.problemSet.push(problem);
        }
    }

    // main game flow (up to creation of the problem set)
    start() {
        // are there cards?
        const hasCards = this.getTotal(); 
        // if no, then this is the first run, add 15 cards, shuffle and add to set
        if (hasCards.total === 0) { 
            this.addNewCards(0);
            this.cardsInSet = this.shuffleArray(this.matrix[2]).slice(0,15);
        // if yes, check current card status and add cards if necessary, then randomly add to set
        } else if ((hasCards.total > 0)) { 
            this.addCardsByScore();
            this.selectCards();
        }
        this.createProblemSet();
        
    }

    // renders next problem (combines with React Components)
    renderNext() {
        if (this.progress < 10) {
            const problem = this.problemSet[this.progress];
            this.progress++;
            if (this.progress === 9)  {
                this.finished = true;
            }
            return problem;
        } else {
            this.tallyResults();
        }
    }

    // checks the answer returns a boolean used to move card up or down one array in the matrix
    isCorrect(bool) {
        if (bool === true) {
            this.correctCards.push(this.cardsInSet.shift());
            return('correct');

        } else {
            this.incorrectCards.push(this.cardsInSet.shift());
            return('incorrect');
        }
    }

    // determine final results of set
    tallyResults() {
        // console.log(`You've finished this round! \nHere are your results:\n\nCorrect Answers: ${this.correctCards.length}\nIncorrect Answers: ${this.incorrectCards.length}`);
        this.resortMatrix(this.correctCards, true);
        this.resortMatrix(this.incorrectCards, false);
        this.correctCards = [];
        this.incorrectCards = [];
    }

    // takes either this.correctCards with bool=true, or this.incorrectCards with bool=false
    resortMatrix(arr, bool) {
        arr.forEach(cardId => {
            let cardIndex;
            // iterates through arrays in this.matrix
            for(let i=0; i<5; i++){
                // looks for index of the cardId in each array
                cardIndex = this.matrix[i].indexOf(cardId);
                // if it finds it in the array, the card was correct and it is not in array 4
                if (cardIndex !== -1 && bool === true && i<4) {
                    // slice from current spot
                    const card = this.matrix[i].splice(cardIndex, 1);
                    //move to next highest array
                    this.matrix[i+1].push(card[0]);
                    break;
                // if it finds it in the array, the card was incorrect and it is not in array 0
                } else if (cardIndex !== -1 && bool === false && i>0) {
                    const card = this.matrix[i].splice(cardIndex, 1);
                    //move to next lowest array
                    this.matrix[i-1].push(card[0]);
                    break;
                } else {
                    continue
                }
            }
        });
    }

    // // at end of set review missed problems?
    // review() {

    // }

    // // after set is completed, save results and new card positions to player game state (IndexedDB then finally graphql)
    // saveResults() {
        
    // }
    

}

export default GameSession;