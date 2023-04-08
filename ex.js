function countDown(fromNumber) {
    console.log(fromNumber)
    let n= fromNumber - 1;

    if (n > 0) {
        countDown(n);
}
}

countDown(5);

function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);



// Define a hands array with the values 'rock', 'paper', and 'scissors'
let hands = ['rock', 'paper', 'scissors'];

//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
function getHand() {
  return hands[parseInt(Math.random()*10)%3];
}

//Define two objects for two players. Each player has name and getHand() properties.
let onePlayer = {
  name: 'Sarah',
  getHand: getHand
};

let twoPlayer = {
  name: 'Reese',
  getHand: getHand
};

let playUntil = 3;
let player1Score = 0;
let player2Score = 0;
let winner = null;

/*Define a function called playRound() that Takes two player objects as arguments
Gets hands from each
Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner) */
function playRound(a, b) {
  let sarahHand = onePlayer.getHand();
  let reeseHand = twoPlayer.getHand();

  if (sarahHand === reeseHand)  {
    console.log(onePlayer.name, 'hand played', sarahHand, 'while', twoPlayer.name, 'hand played', reeseHand,'.', 'It\'s a tie!');
  } else if (
    (sarahHand === 'scissors' && reeseHand === 'paper') ||
    (sarahHand === 'rock' && reeseHand === 'scissors') || 
    (sarahHand === 'paper' && reeseHand === 'rock')
  ) {
    winner = onePlayer;
    player1Score++;
    console.log(onePlayer.name, 'hand played', sarahHand,'.', twoPlayer.name, 'hand played', reeseHand,'.', onePlayer.name, 'is the winner!');
  } else {
    winner = twoPlayer;
    player2Score++;
    console.log(twoPlayer.name, 'hand played', reeseHand,'.', onePlayer.name, 'hand played', sarahHand,'.', twoPlayer.name, 'is the winner!');
  }

  return winner;
}

/*Define a function called playGame() that takes arguments player1, player2, and playUntil.
Play rounds until one of the players wins playUntil hands
When one player has won enough games, return the winning player object*/
function playGame(onePlayer, twoPlayer, playUntil) {
  while (player1Score < playUntil && player2Score < playUntil) {
    let roundWinner = playRound(onePlayer, twoPlayer);
    console.log('Score:', onePlayer.name, player1Score, '-', twoPlayer.name, player2Score);

    if (roundWinner === onePlayer) {
      console.log(onePlayer.name, 'wins the round');
    } else if (roundWinner === twoPlayer) {
      console.log(twoPlayer.name, 'wins the round');
   
