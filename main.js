// Made by Justin Liwag
let player = {
    name: "You",
    chips: 250
}
let cards = []
let sum = 0
let message = ""
let gameStarted = false
let isAlive = false
let hasBlackJack = false
let messageEl = document.querySelector("#message-el")
let cardEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")
let gameOver = document.querySelector("#gameover")
let newGame = document.querySelector("#newgame")

showStatus()

function startGame() {
    if (player.chips === 0){
        gameOver.textContent = "Sorry, you don't have chips left."
        GameOver()
    }else if (gameStarted === false){
        gameStarted = true
        let firstCard = getRandomNumber()
        let secondCard = getRandomNumber()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame() {
    
    if (sum < 21) {
        message = "Want to draw a new card?"
        isAlive = true
        hasBlackJack = false
    }else if (sum === 21) {
        message = "You got a Blackjack!"
        hasBlackJack = true
        gameStarted = false
        player.chips += 25
    }else if (sum > 21){
        message = "You are out of the game."
        isAlive = false
        gameStarted = false
        player.chips -= 25
    }
    gameStatus()
}

function getRandomNumber() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function NewGame() {
    window.location.reload(true)
}
function GameOver() {
    newGame.style.display = 'inline'
}

function gameStatus() {
    messageEl.textContent = message
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    showStatus()
}

function showStatus() {
    playerEl.textContent = player.name + ": $" + player.chips
    if(player.chips === 0) {
        playerEl.style.color = 'red'
    }
}

console.log("BlackJack Game by Justin gwapo")