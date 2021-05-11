class GameSession {
    constructor(deck, game) {
        this.matrix = game.matrix; // retrieved from DB or IndexedDb
        this.deck = deck;
        this.progress = 0; // for displaying progress on problem set - i.e. 6/10
        this.problemSet = [];
    }

    // pushes cards to matrix on first run and when 70% of current cards are in matrix[3] or matrix[4]
    addNewCards() {

    }

    // create each "problem" then pushes to problem set
    createProblemSet() {

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