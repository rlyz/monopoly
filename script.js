/*Possible GLobal variables
player name
money

Eventlistener for start game function

function to prompt for number of players

function to assign player names

function to check owner of current square

function to prompt purchase of property

function to minus earnings

event listener for dice

function to move tiles based on die roll

function to pay out when landing on start tile
 */

// boardSquare = [name,price,rent,owner,currentPlayer];
// currentPlayer = [position,cash,properties owned];

// Updating the game board to display the name, price and rent of the location. Additionally, dynamically tracks the currentPlayer in the square and who the owner is.
let square2 = ['Mediterranean Avenue', 60, 2, null, null];
let square3 = ['Baltic Avenue', 60, 4, null, null];
let square4 = ["Oriental Avenue", 100, 6, null, null];
let square5 = ["Vermont Avenue", 100, 6, null, null ];
let square6 = ["Connecticut Avenue", 120, 8, null, null];
let square7 = ["St. Charles Place", 140, 10, null, null];
let square8 = ["States Avenue", 140, 10, null, null];
let square9 = ["Virginia Avenue", 160, 12, null, null];
let square10 = ["St. James Place", 180, 14, null, null];
let square11 = ["Tennessee Avenue", 180, 14, null, null];
let square12 = ["New York Avenue", 200, 16, null, null];

// player info
let property1 = [];
let property2 = [];
//player[i] = [name,starting cash, property owned, index, starting position]
let player1 = ["player1",1000,property1,0,1];
let player2 = ["player2",1000,property2,1,1];
let players = [player1,player2];
//current player turn f =0 (player1)
let i=0;
//global variables
let move = 0;
let currentSquare = 0;
let newSquare = 0;
let p1 = players[0][0]
let p2 = players[1][0]
let k = [p1, p2]
let currentOccupants = ['',''];
let displayOccupants = currentOccupants.join;

// place in an array for ease of access
let squareAll = [square2,square3,square4,square5,square6,square7,square8,square9,square10,square11,square12];
var fillBoard = function(){
    for(let g=0;g<11;g++){
        var a = g + 2
        document.getElementById('square' + a + '_name').innerHTML = squareAll[g][0];
        document.getElementById('square' + a + '_value').innerHTML = squareAll[g][1];
        document.getElementById('p1').innerHTML = "Player 1 $" + player1[1];
        document.getElementById('p2').innerHTML = "Player 2: $" + player2[1];
    }
}

fillBoard();

var start = function () {
    document.getElementById('square1_residents').innerHTML = k;
}
document.getElementById('currentPlayer').innerHTML = player1[0]

var d = document.getElementById('start');

d.addEventListener('click', start, { once: true })

var reset = function(){
    d.removeEventListener('click',start);
    d.addEventListener('click',start,{once:true});
}

document.getElementById('reset').addEventListener('click',reset);

// Maps location to new Tile and removes from old tile
var movePlayerTile = function () {
    switch (i) {
        case 0:
            document.getElementById('currentPlayer').innerHTML = player2[0]
            p = k
            k[i] = "";
            var immediateSquare = document.getElementById('square' + players[i][4] + '_residents');

            if (immediateSquare.innerHTML == "player1,player2" || immediateSquare.innerHTML == "player2,player1" ) {
                immediateSquare.innerHTML = "player2"
            } else if ( immediateSquare.innerHTML == "player1" ){
                immediateSquare.innerHTML = null;
            }
            //helper function takes in player, roll, as inputs
            roll();
            document.getElementById('lastturnmsg').textContent = "Dice Rolled " + move;
            for (g = 0; g < p.length; g++) {
                p[g] = "";
            }
            /*console.log(p)*/
            p[i] = "player" + [i + 1]
            nextSquare = document.getElementById('square' + players[i][4] + '_residents')
            if (nextSquare.innerHTML !== "") {
                nextSquare.innerHTML += ",player" + [i + 1]
            } else { nextSquare.innerHTML = [p.join("")]}


            combine = "square" + players[i][4];
            nextSquareProperty = eval(combine);
            if (nextSquareProperty[3] === null) {
                if (confirm("FOR SALE @ $" + nextSquareProperty[1] + " BUYING OR NOT ???")) {
                    players[i][1] -= nextSquareProperty[1];
                    nextSquareProperty[3] = i;
                }

            }

            if (nextSquareProperty[3] === i + 1) {
                rent = nextSquareProperty[1] * 0.8;
                players[i][1] -= rent;
                players[i+1][1] += rent
                alert("You Paid $"+rent+" in rent sucker!")
            }

            

            if (players[i][1] < 0) {
                n.removeEventListener('click', movePlayerTile);
                alert("Sorry " + "player"+(i+1) + ", you lose!");
            }
            i++;
            document.getElementById('p1').innerHTML = "Player 1 $" + player1[1];
            document.getElementById('p2').innerHTML = "Player 2: $" + player2[1];
            break;

    /*console.log(players[0],players[1])*/

        case 1: 
            document.getElementById('currentPlayer').innerHTML = player1[0]
            p = k
            k[i - 1] = "";
            var immediateSquare = document.getElementById('square' + players[i][4] + '_residents');
            if (immediateSquare.innerHTML == "player1,player2" || immediateSquare.innerHTML == "player2,player1") {
                immediateSquare.innerHTML = "player1"
            } else if (immediateSquare.innerHTML == "player2") {
                immediateSquare.innerHTML = "";
            }
            //helper function takes in player, roll, as inputs
            roll();
            document.getElementById('lastturnmsg').innerHTML = "Dice Rolled " + move;
            for (g = 0; g < p.length; g++) {
                p[g] = "";
            }
            p[i] = "player" + [i + 1]
            nextSquare = document.getElementById('square' + players[i][4] + '_residents')
            if (nextSquare.innerHTML !== "") {
                nextSquare.innerHTML += ",player" + [i + 1]
            } else { nextSquare.innerHTML = [p.join("")] }

            nextSquareProperty = "square" + players[i][4]
            if (nextSquareProperty[3] === null) {
                if (confirm("FOR SALE @ $" + nextSquareProperty[1] + " BUYING OR NOT ???")) {
                    players[i][1] -= nextSquareProperty[1];
                }
                
            }

            combine = "square" + players[i][4];
            nextSquareProperty = eval(combine);
            if (nextSquareProperty[3] === null) {
                if (confirm("FOR SALE @ $" + nextSquareProperty[1] + " BUYING OR NOT ???")) {
                    players[i][1] -= nextSquareProperty[1];
                    nextSquareProperty[3] = i;
                }

            }

            if (nextSquareProperty[3] === i - 1) {
                rent = nextSquareProperty[1] * 0.8
                players[i][1] -= rent
                players[i-1][1] += rent
                alert("You Paid $" + rent + " in rent sucker!")
            }



            if (players[i][1] < 0) {
                n.removeEventListener('click', movePlayerTile);
                alert("Sorry " + "player"+(i+1) + ", you lose!");
            }
            i--;
            document.getElementById('p1').innerHTML = "Player 1 $" + player1[1];
            document.getElementById('p2').innerHTML = "Player 2: $" + player2[1];
            break;
      }
             /*console.log(players[0],players[1])*/
}


    
var roll = function () {
    move = Math.ceil(Math.random() * 2);
    console.log(move + "move");
 
/*console.log(players[f][4] + "currentsquare value")*/

        if (players[i][4] + move <= 12) {
            players[i][4] += move;
        } else {
            players[i][4] += move - 12;
            players[i][1] += 100
            alert("$100 for passing start");
        }
}
var n = document.getElementById('roll');
document.getElementById('roll').addEventListener('click', movePlayerTile);