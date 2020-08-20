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
let square2 = ['Six Avenue', 160, 2, null, null];
let square3 = ['Baltic Avenue', 160, 4, null, null];
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
let squareAll = [square2, square3, square4, square5, square6, square7, square8, square9, square10, square11, square12];

//function to fill the board with all the rent, tile names etc
var fillBoard = function(){
    for(let g=0;g<11;g++){
        var a = g + 2
        document.getElementById('square' + a + '_name').innerHTML = squareAll[g][0];
        document.getElementById('square' + a + '_value').innerHTML = "$"+squareAll[g][1];
        document.getElementById('p1').innerHTML = "Player 1 $" + player1[1];
        document.getElementById('p2').innerHTML = "Player 2: $" + player2[1];
    }
}

fillBoard();

//function to start the game putting players 1 and 2 in the start tile
var start = function () {
    document.getElementById('square1_residents').innerHTML = "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\"><img src=\"images/p2.png\" width=\"30px\" height=\"30px\">";
    document.getElementById('currentPlayer').innerHTML = "Player 1:" + "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">"
}


var d = document.getElementById('start');

d.addEventListener('click', start, { once: true })

// Maps location to new Tile and removes from old tile
var movePlayerTile = function () {
    switch (i) {
        case 0:
            //sets the current player
            document.getElementById('currentPlayer').innerHTML = "Player 2:" + "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\">"
            p = k
            k[i] = "";
            var immediateSquare = document.getElementById('square' + players[i][4] + '_residents');

            //removes the current player from the current square he's on
            if (immediateSquare.innerHTML == "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\"><img src=\"images/p2.png\" width=\"30px\" height=\"30px\">" || immediateSquare.innerHTML == "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\"><img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">" ) {
                immediateSquare.innerHTML = "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\">"
            } else if (immediateSquare.innerHTML == "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">" ){
                immediateSquare.innerHTML = null;
            }

            roll();
            document.getElementById('lastturnmsg').textContent = "Dice Rolled " + move;
            for (g = 0; g < p.length; g++) {
                p[g] = "";
            }
        
            p[i] = "player" + [i + 1]
            nextSquare = document.getElementById('square' + players[i][4] + '_residents')
            if (nextSquare.innerHTML !== "") {
                nextSquare.innerHTML += "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">"
            } else { nextSquare.innerHTML = "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">"}


            combine = "square" + players[i][4];
            cellcolor = "cell" + players[i][4] + "color";
            nextSquareProperty = eval(combine);
            nextCellColor = eval(cellcolor);
            if (nextSquareProperty[3] === null) {
                if (confirm("You rolled " + move + " and landed on " + nextSquareProperty[0] + ". It is for sale @ $" + nextSquareProperty[1] + " Do you want to purchase it?")) {
                    players[i][1] -= nextSquareProperty[1];
                    nextCellColor.innerHTML = "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">";
                    nextSquareProperty[3] = i;
                }

            }

            if (nextSquareProperty[3] === i + 1) {
                rent = nextSquareProperty[1] * 2;
                players[i][1] -= rent;
                players[i+1][1] += rent
                alert("You rolled "+ move + " and landed on " +nextSquareProperty[0] + ". It is owned by Player 2 and you paid $"+rent+ " in rent.")
            }



            if (players[i][1] < 0) {
                n.removeEventListener('click', movePlayerTile);
                d.removeEventListener('click', start, { once: true })
                alert("Sorry " + "player"+(i+1) + ", you lose!");
            }
            i++;
            document.getElementById('p1').innerHTML = "Player 1 $" + player1[1];
            document.getElementById('p2').innerHTML = "Player 2: $" + player2[1];
            break;

    /*console.log(players[0],players[1])*/

        case 1:
            document.getElementById('currentPlayer').innerHTML = "Player 1:" + "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">"
            p = k
            k[i - 1] = "";
            var immediateSquare = document.getElementById('square' + players[i][4] + '_residents');
            if (immediateSquare.innerHTML == "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\"><img src=\"images/p2.png\" width=\"30px\" height=\"30px\">" || immediateSquare.innerHTML == "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\"><img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">") {
                immediateSquare.innerHTML = "<img src=\"images/p1.jpg\" width=\"30px\" height=\"30px\">"
            } else if (immediateSquare.innerHTML == "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\">") {
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
                nextSquare.innerHTML += "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\">"
            } else { nextSquare.innerHTML = "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\">" }



            combine = "square" + players[i][4];
            cellcolor = "cell" + players[i][4] + "color";
            nextSquareProperty = eval(combine);
            nextCellColor = eval(cellcolor);
            if (nextSquareProperty[3] === null) {
                if (confirm("You rolled " + move + " and landed on " + nextSquareProperty[0] + ". It is for sale @ $" + nextSquareProperty[1] + " Do you want to purchase it?")) {
                    players[i][1] -= nextSquareProperty[1];
                    nextCellColor.innerHTML = "<img src=\"images/p2.png\" width=\"30px\" height=\"30px\">";
                    nextSquareProperty[3] = i;
                }

            }

            if (nextSquareProperty[3] === i - 1) {
                rent = nextSquareProperty[1] * 2;
                players[i][1] -= rent
                players[i-1][1] += rent
                alert("You rolled " + move + " and landed on " + nextSquareProperty[0] + ". It is owned by Player 1 and you paid $" + rent + " in rent.")
            }



            if (players[i][1] < 0) {
                n.removeEventListener('click', movePlayerTile);
                d.removeEventListener('click', start, { once: true })
                alert("Sorry " + "player"+(i+1) + ", you lose!");
            }
            i--;
            document.getElementById('p1').innerHTML = "Player 1: $" + player1[1];
            document.getElementById('p2').innerHTML = "Player 2: $" + player2[1];
            break;
      }
             /*console.log(players[0],players[1])*/
}


//roll function that calculates the dice roll and adds it to the players stored position
var roll = function () {
    move = Math.ceil(Math.random() * 6);
    console.log(move + "move");

/*console.log(players[f][4] + "currentsquare value")*/

        if (players[i][4] + move <= 12) {
            players[i][4] += move;
        } else {
            players[i][4] += move - 12;
            players[i][1] += 200
            alert("$200 for passing start");
        }
}
var n = document.getElementById('roll');
document.getElementById('roll').addEventListener('click', movePlayerTile);


//Reset function that reassigns all initial variables and states
/*var reset = function () {
    d.removeEventListener('click', start);
    d.addEventListener('click', start, { once: true });

    var player1 = ["player1", 1000, property1, 0, 1];
    var player2 = ["player2", 1000, property2, 1, 1];
    var players = [player1, player2];

    var p1 = players[0][0];
    var p2 = players[1][0];
    var k = [p1, p2];


    document.getElementById('currentPlayer').innerHTML = player1[0];

    for (var r = 0; r < 12; r++) {
        var immediateSquare = document.getElementById('square' + [r + 1] + '_residents');
        immediateSquare.innerHTML = "";
    }

    let square2 = ['Mediterranean Avenue', 60, 2, null, null];
    let square3 = ['Baltic Avenue', 60, 4, null, null];
    let square4 = ["Oriental Avenue", 100, 6, null, null];
    let square5 = ["Vermont Avenue", 100, 6, null, null];
    let square6 = ["Connecticut Avenue", 120, 8, null, null];
    let square7 = ["St. Charles Place", 140, 10, null, null];
    let square8 = ["States Avenue", 140, 10, null, null];
    let square9 = ["Virginia Avenue", 160, 12, null, null];
    let square10 = ["St. James Place", 180, 14, null, null];
    let square11 = ["Tennessee Avenue", 180, 14, null, null];
    let square12 = ["New York Avenue", 200, 16, null, null];
    }
*/
