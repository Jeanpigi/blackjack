let sum = 0;
let cards = [];
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.querySelector("#cards-el");
let sumaEl = document.querySelector(".sum-el");
let button = document.querySelector(".start-game");
let buttonNewCard = document.querySelector(".new-card");

const startGame = () => {
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

const getRandomNumber = () => {
    // if 1 -----> return 11
    // if 11-13 -------> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if ( randomNumber === 1) {
        return 11
    }
    return randomNumber
}

const renderGame = () => {

    button.disabled = true;
    buttonNewCard.disabled = false;

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumaEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "wohoo! You've got Blackjack";
        button.disabled = false;
    } else {
        message = "You're out of the game!";
        button.disabled = false;
        buttonNewCard.disabled = true;
    }
    messageEl.textContent = message;
}

const newCard = () => {
    let card = getRandomNumber();
    sum += card
    cards.push(card);
    renderGame()
}