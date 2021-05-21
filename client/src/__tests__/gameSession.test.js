import GameSession from '../utils/gameLogic.js';

const deck = [
    {"front":"Hydrogen","back":"H", "cardId": 1},
    {"front":"Helium","back":"He", "cardId": 2},
    {"front":"Lithium","back":"Li", "cardId": 3},
    {"front":"Beryllium","back":"Be", "cardId": 4},
    {"front":"Boron","back":"B", "cardId": 5},
    {"front":"Carbon","back":"C", "cardId": 6},
    {"front":"Nitrogen","back":"N", "cardId": 7},
    {"front":"Oxygen","back":"O", "cardId": 8},
    {"front":"Fluorine","back":"F", "cardId": 9},
    {"front":"Neon","back":"Ne", "cardId": 10},
    {"front":"Sodium","back":"Na", "cardId": 11},
    {"front":"Magnesium","back":"Mg", "cardId": 12},
    {"front":"Aluminum","back":"Al", "cardId": 13},
    {"front":"Silicon","back":"Si", "cardId": 14},
    {"front":"Phosphorus","back":"P", "cardId": 15},
    {"front":"Sulfur","back":"S", "cardId": 16},
    {"front":"Chlorine","back":"Cl", "cardId": 17},
    {"front":"Argon","back":"Ar", "cardId": 18},
    {"front":"Potassium","back":"K", "cardId": 19},
    {"front":"Calcium","back":"Ca", "cardId": 20},
    {"front":"Scandium","back":"Sc", "cardId": 21},
    {"front":"Titanium","back":"Ti", "cardId": 22},
    {"front":"Vanadium","back":"V", "cardId": 23},
    {"front":"Chromium","back":"Cr", "cardId": 24},
    {"front":"Manganese","back":"Mn", "cardId": 25},
    {"front":"Iron","back":"Fe", "cardId": 26},
    {"front":"Cobalt","back":"Co", "cardId": 27},
    {"front":"Nickel","back":"Ni", "cardId": 28},
    {"front":"Copper","back":"Cu", "cardId": 29},
    {"front":"Zinc","back":"Zn", "cardId": 30},
    {"front":"Gallium","back":"Ga", "cardId": 31},
    {"front":"Germanium","back":"Ge", "cardId": 32},
    {"front":"Arsenic","back":"As", "cardId": 33},
    {"front":"Selenium","back":"Se", "cardId": 34},
    {"front":"Bromine","back":"Br", "cardId": 35}
];

const game = {
    matrix: [
        [],
        [],
        [],
        [],
        []
    ]
}

const thisGame = new GameSession(deck, game.matrix);

test('initial game session', () => {
    expect(thisGame).toBeInstanceOf(GameSession);
    expect(thisGame.deck).toEqual(deck);
    expect(thisGame.matrix).toEqual(game.matrix);
});

test('start() method', () => {
    thisGame.start();
    console.log('start() method', thisGame.problemSet);
})

test('addCards() method', () => {
    thisGame.matrix = [[],[],[],[],[]];
    thisGame.addNewCards(0);
    console.log('addCards method:', thisGame.matrix);
    expect(thisGame.matrix[2].length).toEqual(15);

});

test('shuffleArray() method', () => {
    thisGame.matrix[2] = thisGame.shuffleArray(thisGame.matrix[2]);
    console.log('shuffleArray method', thisGame.matrix);
    expect(thisGame.matrix[2].length).toEqual(15);
});

test('getCardData() method', () => {
    let cardOption = thisGame.getCardData(14);
    expect(cardOption).toEqual({front:"Silicon",back:"Si", cardId: 14});
})

test('generateOptions() method', () => {
    thisGame.cardsInSet = [6,4,8,2,11,3,9,14,5,7];
    let options = thisGame.generateOptions(14);
    let firstCard = [14];
    expect(options).toHaveLength(2);
    expect(options).toEqual(expect.not.arrayContaining(firstCard));
    expect(options[0]).not.toEqual(options[1]);
});

test('addCardsByScore() method', () => {
    thisGame.matrix = [[1],[2],[3],[4,5,6],[7,8,9,10]];
    thisGame.addCardsByScore();
    expect(thisGame.matrix[2].length).toEqual(16);

});

test('selectCards() method', () => {
    thisGame.matrix = [[ 1 ],[ 2 ],[3, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25],[ 4, 5, 6 ],[ 7, 8, 9, 10 ]];
    thisGame.cardsInSet = [];
    thisGame.selectCards();
    expect(thisGame.cardsInSet).toHaveLength(10);
    console.log('selectCards() method', thisGame.cardsInSet);
});

test('createProblemSet() method', () => {
    thisGame.problemSet = [];
    thisGame.cardsInSet = [6,4,8,2,11,3,9,14,5,7];
    thisGame.createProblemSet();
    console.log('createProblemSet() method', thisGame.problemSet);
});

test('isCorrect() method', () => {
    thisGame.cardsInSet = [6,4,8,2,11,3,9,14,5,7];
    thisGame.correctCards = [];
    thisGame.incorrectCards = [];
    thisGame.isCorrect(true);
    expect(thisGame.correctCards).toEqual([6]);
    expect(thisGame.cardsInSet).toEqual([4,8,2,11,3,9,14,5,7]);
    thisGame.isCorrect(true);
    thisGame.isCorrect(false);
    thisGame.isCorrect(false);
    expect(thisGame.correctCards).toEqual([6, 4]);
    expect(thisGame.incorrectCards).toEqual([8, 2]);
    expect(thisGame.cardsInSet).toEqual([11,3,9,14,5,7]);
});

test('resortMatrix() method', () => {
    thisGame.matrix = [[1], [2], [3, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25], [4, 5, 6], [7, 8, 9, 10]];
    thisGame.correctCards = [2, 11, 12, 13, 4, 8];
    thisGame.resortMatrix(thisGame.correctCards, true);
    expect(thisGame.matrix).toEqual([[1], [], [3, 14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25, 2], [5, 6, 11, 12, 13 ], [ 7, 8, 9, 10, 4 ]]);
    thisGame.incorrectCards = [1, 3, 5, 6];
    thisGame.resortMatrix(thisGame.incorrectCards, false);
    expect(thisGame.matrix).toEqual([[1], [3], [14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25, 2, 5, 6], [11, 12, 13 ], [ 7, 8, 9, 10, 4 ]]);
});

test('tallyResults() method', () => {
    thisGame.matrix = [[1], [2], [3, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25], [4, 5, 6], [7, 8, 9, 10]];
    thisGame.correctCards = [2, 11, 12, 13, 4, 8];
    thisGame.incorrectCards = [1, 3, 5, 6];
    thisGame.tallyResults();

    expect(thisGame.matrix).toEqual([[1], [3], [14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25, 2, 5, 6], [11, 12, 13 ], [ 7, 8, 9, 10, 4 ]]);
    expect(thisGame.correctCards).toEqual([]);
    expect(thisGame.incorrectCards).toEqual([]);
});

test('getTotal() method', ()=> {
    thisGame.matrix = [[1], [2], [3, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21,22, 23, 24, 25], [4, 5, 6], [7, 8, 9, 10]];
    const score = thisGame.getTotal();
    expect(score).toEqual({ strong: 7, total: 25, deckTotal: 35});
    thisGame.matrix = [[1], [2], [3, 11, 12, 13, 20], [4, 5, 6, 14, 15, 16, 17, 18, 19], [7, 8, 9, 10, 21, 22, 23, 24, 25]];
    const newScore = thisGame.getTotal();
    expect(newScore).toEqual({ strong: 18, total: 25, deckTotal: 35});
});
