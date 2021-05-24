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
        this.gameMode = 1; // get from react useState in Game component
    }

    // randomly reorder an array
    shuffleArray(array) { 
        array.sort((a, b) => Math.random() - 0.5)
        return array;
    }

    // get number of 'strong' or answered correctly cards and total number of cards in the game matrix
    getTotal() {
        // total number of cards in arrays indexes [3] & [4]
        let strongCards = 0;
        // total all cards in the matrix 
        let total = 0;
        // number of cards in the deck - use to determine progress in a deck
        const deckTotal = this.deck.length;
        for (let i=0; i<5; i++) {
            if (i > 2) {
                strongCards += this.matrix[i].length;
            }
            total += this.matrix[i].length;
        }
        return { strong: strongCards, total: total, deckTotal: deckTotal};
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
        this.cardsInSet = [];
        let newCard;
        // percentage break points for each matrix array
        let bins = [0, 39, 69, 84, 94];
        // number of times a card has been selected from each matrix array
        let binRollCount = [0,0,0,0,0];
        // create a tracker for how many cards are in each matrix array.
        let binStartLength = [];
        for (let i = 0; i < 5; i++) {
            binStartLength.push(this.matrix[i].length)
        }
        // console.log(binStartLength);


        // checks to see if number of selections from this array is >= the number of cards in this array
        // if true, change the percentage for this array to = 101 (cannot be chosen again)
        const checkRollCount = (i) => {
            if (binRollCount[i] >= binStartLength[i]) {
                bins[i] = 101;
            }
        }


        for (let j=0; j<=9; j++) {
            
            // checks to see if number of selections from this array is >= the number of cards in this array
            // if true, change the percentage for this array to = 101 (cannot be chosen again)
            for (let i=0; i<this.matrix.length; i++) {
                checkRollCount(i);
            };
            console.log('New Bins: ', bins);

            // creates a random "roll" from 0-99
            const roll = Math.floor(Math.random() * 100);

            let index; // references corresponding matrix array, bins, binRollCount & binStartLength by index
            if (roll > bins[4]) {
                index = 4;
            } else if (roll > bins[3]) {
                index = 3;
            } else if (roll > bins[2]) {
                index = 2;
            } else if (roll > bins[1]) {
                index = 1; 
            } else if (bins[0] === 101){
                if (binRollCount[1] < binStartLength[1]) {
                    index = 1;
                } else if (binRollCount[2] < binStartLength[2]){
                    index = 2;
                } else if (binRollCount[3] < binStartLength[3]){
                    index = 3;
                } else {
                    index = 4;
                }
            } else {
                index = 0;
            }
            console.log(`Roll: ${roll} Percentages: ${bins} Index: ${index}`);
            // increase the "roll count" for this bin
            binRollCount[index]++;
            
            newCard = this.matrix[index].find((card) => {
                return this.cardsInSet.indexOf(card) === -1
            });
            this.cardsInSet.push(newCard);
            console.log('CardsInSet: ', this.cardsInSet);
        }
    }

    // get cards from matrix to fill this.cardsInSet array
    selectCards() {
        this.cardsInSet = [];
        // shuffle all arrays
        for (let i=0; i<5; i++) {
            this.shuffleArray(this.matrix[i]);
        }
        // select random cards to fill this.cardsInSet
        this.randomSelect();
    }

    // get all data for a card from the deck given its cardId
    getCardData(cardId) { 
        var result = this.deck.filter(card => {
            return card.cardId === cardId;
        });
        return result[0];
    }

     // create problem options from 2 random cards in set
    generateOptions(cardId, side) {
        let choices = this.cardsInSet.slice();
        let results = [];
        choices.splice(choices.indexOf(cardId), 1);
        for (let i=0; i<2; i++) {
            const random = Math.floor(Math.random()*choices.length); // we don't add +1 because we are indexing from
            const optionCard = this.getCardData(choices[random]);
            if (side === 'back') {
                results[i] = optionCard.back;
            } else if (side === 'front') {
                results[i] = optionCard.front;
            }
            choices.splice(random, 1);
        }
        return results;
    }

    useSide(card, bool) {
        let problem = {question: '', options: [], answer: ''}
        if (bool === true) {
            problem.question = card.front;
            let options = this.generateOptions(card.cardId, 'back');
            options.push(card.back);
            problem.options = this.shuffleArray(options);
            problem.answer = card.back;
        } else {
            problem.question = card.back;
            let options = this.generateOptions(card.cardId, 'front');
            options.push(card.front);
            problem.options = this.shuffleArray(options);
            problem.answer = card.front;
        }
        return problem;
    }
    // create each "problem" as an object, then push to problemSet array.
    createProblemSet() {
        for (let i = 0; i < 10; i++) { 
            let problem;
            const card = this.getCardData(this.cardsInSet[i]);
            // check for game mode and customize questions/answers
            if (this.gameMode === 1) {
                problem = this.useSide(card, true);
            } else if (this.gameMode === 2) {
                problem = this.useSide(card, false);
            } else {
                let side = Math.floor(Math.random() * 2);
                if (side === 1) {
                    side = true;
                } else {
                    side = false;
                }
                problem = this.useSide(card, side);
            }
            this.problemSet.push(problem);
        }
    }

    // main game flow (up to creation of the problem set)
    start() {
        this.reset();
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

        if (this.finished) {
            return this.tallyResults();
        }
        const problem = this.problemSet[this.progress];
        console.log(this.progress)
        if (this.progress === 9)  {
            this.finished = true;
            //this.renderNext()
            //this.tallyResults();
        }
        this.progress++;
        return problem;
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
        const results = { correct: this.correctCards.length, incorrect: this.incorrectCards.length};
        this.resortMatrix(this.correctCards, true);
        this.resortMatrix(this.incorrectCards, false);
        this.correctCards = [];
        this.incorrectCards = [];
        return results;
    }

    reset() {
        this.finished = false;
        this.progress = 0; // for displaying progress on problem set - i.e. 6/10
        this.cardsInSet = [];
        this.problemSet = [];
        this.correctCards = [];
        this.incorrectCards = [];
        this.currentQuestion = {};
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
}

export default GameSession;