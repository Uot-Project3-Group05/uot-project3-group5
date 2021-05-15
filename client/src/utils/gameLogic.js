

class GameSession {
    constructor(deck, game) {
        this.matrix = game.matrix;  // retrieved from DB or IndexedDb
        this.deck = deck;
        this.progress = 0; // for displaying progress on problem set - i.e. 6/10
        this.cardsInSet = [];
        this.problemSet = [];
        
    }

    shuffleArray(array) { //tested
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // pushes cards to matrix on first run and when 70% of current cards are in matrix[3] or matrix[4]
    addNewCards() { //tested
        // slice 15 cards from deck array, push to matrix[2]
        let slicedCards = this.deck.slice(0,15);
        slicedCards.forEach(card => this.matrix[2].push(card.cardId));
    }

    randomSelect(binNumber) { 
        let percent;
        switch(binNumber) {
            case 0:
                percent = 50;
                break;
            case 1:
                percent = 40;
                break;
            case 2:
                percent = 30;
                break;
            case 3:
                percent = 20;
                break;
            default:
                // binNumber = 4
                percent = 10;
        }
        
        if (Math.floor(Math.random() * 100) + 1 <= percent) {
            return true;
        }
    }

    percentageLoop(longestArray) {
        for (let i = 0; i < longestArray; i++) {
            for (let j = 0; j < 5; j++) {
                if (this.matrix[j][i]) {
                    if (this.randomSelect(j)){
                        this.cardsInSet.push(this.matrix[j][i])
                    }
                    continue;
                } else {
                    continue;
                }
            }
        }
    }

    selectCards() {
        let longestArray = 0;

        // randomize arrays & get length of each matrix
        for (let i = 0; i < 5; i++) {
            this.matrix[i] = this.shuffleArray(this.matrix[i]);
            if (this.matrix[i].length > longestArray) {
                longestArray = this.matrix[i].length;
            }
        }

        // loop through array selecting cards to push to cardsInSet
        while (this.cardsInSet < 10) {
            this.percentageLoop(longestArray);
        }

        // this.createProblemSet();
    }

    getCardData(cardId) { //tested
        var result = this.deck.filter(card => {
            return card.cardId === cardId;
        });
        return result[0];
    }

    generateOptions(cardId) { // not working
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

    // create each "problem" as an object, then pushes to problemSet array.
    createProblemSet() {
        // given an array of 10 card ids (cardsInSet), and a deck of card objects
        // for each card, get from deck data: front and back
        // at random from other cards in cardsInSet get the "back" property from 2 cards
        for (let i = 0; i < 10; i++) { //reset to 10
            //console.log(`Problem #${i+1}`);
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

    // render first problem, start progress tracker
    start() {

    }

    // renders next problem (combines with React Components)
    renderNext() {

    }

    // handle user interaction for each problem
    handleInput() {

    }

    // checks the answer returns a boolean used to move card up or down one array in the matrix
    isCorrect() {

    }

    // increments the progress tracker after each "problem" is solved
    trackProgress() {

    }

    // determine final results of set
    tallyResults() {

    }

    // at end of set review missed problems?
    review() {

    }

    // after set is completed, save results and new card positions to player game state (IndexedDB then finally graphql)
    saveResults() {
        
    }
    

}

export default GameSession;