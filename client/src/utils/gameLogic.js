
class GameSession {
    constructor(deck, game) {
        this.matrix = game.matrix;  // retrieved from DB or IndexedDb
        this.deck = deck;
        this.progress = 0; // for displaying progress on problem set - i.e. 6/10
        this.cardsInSet = [];
        this.problemSet = [];
        
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // pushes cards to matrix on first run and when 70% of current cards are in matrix[3] or matrix[4]
    addNewCards() {
        // slice 15 cards from deck array, push to matrix[2]
        this.matrix[2].push(this.deck.slice(0,15));
    }

    randomSelect(binNumber) { 
        switch(binNumber) {
            case 0:
              let percent = 50;
              break;
            case 1:
                let percent = 40;
                break;
            case 2:
                let percent = 30;
                break;
            case 3:
                let percent = 20;
                break;
            default:
                // binNumber = 4
                let percent = 10;
        }
        
        if (Math.floor(Math.random() * 100) + 1 <= percent) {
            return true;
        }
    }

    selectCards() {
        let longestArray = 0;

        // randomize arrays & get length of each matrix
        for (i = 0; i < 5; i++) {
            this.matrix[i] = this.shuffleArray(this.matrix[i]);
            if (this.matrix[i].length > longestArray) {
                longestArray = this.matrix[i].length;
            }
        }

        // loop through array selecting cards to push to cardsInSet
        while (this.cardsInSet < 10) {
            for (i = 0; i < longestArray; i++) {
                for (j = 0; j < 5; j++) {
                    if (matrix[j][i]) {
                        if (this.randomSelect(j)){
                            this.cardsInSet.push(matrix[j][i])
                        }
                        continue;
                    } else {
                        continue;
                    }
                }
            }
        }

        // this.createProblemSet();
    }

    getCardData(cardId) {
        var result = this.deck.filter(card => {
            return card.cardId === cardId;
        });
    }

    generateOptions(cardId) {
        let choices = this.cardsInSet
        let results = [];
        choices.splice(indexOf(cardId), 1);
        for (i=0; i<2; i++) {
            let random = Math.floor(Math.random()*choices.length+1);
            optionCard = getCardData(this.cardsInSet[random]);
            results[i] = optionCard.back;
            choices.splice(random, 1)
        }
        return results;
    }

    // create each "problem" as an object, then pushes to problemSet array.
    createProblemSet() {
        // given an array of 10 card ids (cardsInSet), and a deck of card objects
        // for each card, get from deck data: front and back
        // at random from other cards in cardsInSet get the "back" property from 2 cards
        for (i = 0; i < 10; i++) {
            let problem = {question: '', options: [], answer};
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