// Define a hands array with the values 'rock', 'paper', and 'scissors'

let hands = ['rock', 'paper', 'scissors'];

//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand() {
return hands[parseInt(Math.random()*10)%3]
}

//Define two objects for two players. Each player has name and getHand() properties.

let onePlayer = {
    name: 'Sarah',
    getHand: getHand
}
let twoPlayer = {
    name: 'Reese',
    getHand: getHand
}
let threePlayer = {
    name: 'Michael',
    getHand: getHand
}
let fourPlayer = {
    name: 'Angela',
    getHand: getHand
}
    let playUntil = 3
    let player1Score = 0
    let player2Score = 0


/*Define a function called playRound() that Takes two player objects as arguments
 Gets hands from each
 Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner) */

function playRound (a,b) {
    let sarahHand = onePlayer.getHand();
    let reeseHand = twoPlayer.getHand();
    let winner = null;

    if (sarahHand == reeseHand)  {
    console.log (onePlayer.name, 'hand played', sarahHand, 'while', twoPlayer.name, 'hand played', reeseHand,'.', 'Its a tie!');
    return winner
}
    else if
        ((sarahHand == 'scissors'&& reeseHand == 'paper') ||
        (sarahHand == 'rock' && reeseHand == 'scissors') || 
        (sarahHand == 'paper' && reeseHand == 'rock'))
    {
        winner = onePlayer;
        player1Score++;
        console.log (onePlayer.name,'hand played', sarahHand,'.', twoPlayer.name, 'hand played', reeseHand,'.', 'Sarah is the winner!');
        return winner
    } 
    else
    
        ((reeseHand == 'rock' && sarahHand == 'scissors') ||
        (reeseHand == 'scissors' && sarahHand == 'paper') ||
        (reeseHand == 'paper' && sarahHand == 'rock')); 
   { 
        winner = twoPlayer;
        player2Score++;
        console.log (twoPlayer.name, 'hand played', reeseHand,'.', onePlayer.name, 'hand played', sarahHand, '.', 'Reese is the winner!');
        return winner
    }
}
    
    playRound (onePlayer, twoPlayer)

/*Define a function called playGame() that takes arguments player1, player2, and playUntil.
Play rounds until one of the players wins playUntil hands
When one player has won enough games, return the winning player object*/

function playGame (onePlayer, twoPlayer , playUntil ) {
  while (playUntil > player1Score && playUntil > player2Score) {
  playRound (onePlayer, twoPlayer)
    console.log ()
}
    if (player1Score > player2Score) {
        console.log (onePlayer.name, 'has won', playUntil, 'games!')
        return onePlayer;
    }

    else (player2Score > player1Score); {

        console.log (twoPlayer.name, 'has won', playUntil, 'games!')
        return twoPlayer
    } 
};

playGame (onePlayer, twoPlayer, playUntil)
console.log ()

/*Define a function called playTournament()
Take 4 players and playUntil as arguments
Play a game between the first two players, and the second two players
Play a game between the winners of the first round.
Announce the tournament winner's name "[name] is the world champion";*/

function playTournament (onePlayer, twoPlayer,threePlayer, fourPlayer, playUntil) {
    playGame (onePlayer, twoPlayer, playUntil)
    playGame (threePlayer, fourPlayer, playUntil)
}
if (player1Score > player2Score && > player3Score && > player4Score) {

    
}