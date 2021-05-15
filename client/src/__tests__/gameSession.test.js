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
    {"front":"Manganese","back":"Mn", "cardId": 25}
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

const thisGame = new GameSession(deck, game);

test('initial game session', () => {
    expect(thisGame).toBeInstanceOf(GameSession);
    expect(thisGame.deck).toEqual(deck);
    expect(thisGame.matrix).toEqual(game.matrix);
});

test('addCards() method', () => {
    thisGame.addNewCards();
    //console.log(thisGame.matrix);
    expect(thisGame.matrix[2].length).toEqual(15);
});

test('shuffleArray() method', () => {
    //console.log(thisGame.matrix[2][0])
    thisGame.matrix[2] = thisGame.shuffleArray(thisGame.matrix[2]);
    //console.log(thisGame.matrix[2][0])
    //console.log(thisGame.matrix);
    expect(thisGame.matrix[2].length).toEqual(15);
    // expect(thisGame.matrix[2][0]).not.toEqual(1);
});

test('getCardData() method', () => {
    let cardOption = thisGame.getCardData(14);
    //console.log(cardOption);
    expect(cardOption).toEqual({front:"Silicon",back:"Si", cardId: 14});
})

test('generateOptions() method', () => {
    thisGame.cardsInSet = [6,4,8,2,11,3,9,14,5,7];
    let options = thisGame.generateOptions(14);
    let firstCard = [14];
    expect(options).toHaveLength(2);
    expect(options).toEqual(expect.not.arrayContaining(firstCard));
    expect(options[0]).not.toEqual(options[1]);

    //console.log(thisGame.cardsInSet);
});

test('createProblemSet() method', () => {
    thisGame.cardsInSet = [6,4,8,2,11,3,9,14,5,7];
    thisGame.createProblemSet();
    console.log(thisGame.problemSet);
})