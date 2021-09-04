class Card {
    constructor (suit, value, color, imgUrl) {
        this.suit = suit;
        this.value = value;
        this.color = color;
        this.imgUrl = imgUrl;
    }
    
}

let fullDeck = [];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

const hearts = createSuitCards(suits[0], "Red");
const diamonds = createSuitCards(suits[1], "Red");
const clubs = createSuitCards(suits[2], "Black");
const spades = createSuitCards(suits[3], "Black");

function createSuitCards(suit, color) {
    const suitDeck = [];
    for(let i = 0; i < 13; i++) {
        const card = new Card(suit, getValue(i % 13), color, "", );
        suitDeck.push(card);
        fullDeck.push(card);
    }
    // console.log(suitDeck);
    // fullDeck.push(suitDeck);
    return suitDeck;
}

function getColor(suit) {
    if (suit === suits[0] || suit === suits[1]) {
        return 'red';
    } else {
        return 'black';
    }
}

function getValue(number) {
    switch(number) {
        case 0: 
            return 'A';
        case 10:
            return 'J';
        case 11: 
            return 'Q';
        case 12: 
            return 'K';
        default:
            return number;
    }
}

console.log(fullDeck);