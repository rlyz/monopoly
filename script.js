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
let player2 = ["player2",,property2,1,1];
let players = [player1,player2];
//current player turn f =0 (player1)
let f=0;
//global variables
let move = 0;
let newSquare=0
currentOccupants = ['',''];
displayOccupants =currentOccupants.join;

// place in an array for ease of access
let squareAll = [square2,square3,square4,square5,square6,square7,square8,square9,square10,square11,square12];
var fillBoard = function(){
    for(i=0;i<11;i++){
        var a =i+2
        document.getElementById('square'+a+'_name').innerHTML = squareAll[i][0];
        document.getElementById('square'+a+'_value').innerHTML = squareAll[i][1];
    }
}

fillBoard();
let u=0
let currentSquare = players[f][4];
var roll = function(){
    move = Math.ceil(Math.random()*2);
    console.log(move+"move");
    currentSquare += move;
    players[f][4] = currentSquare
    console.log(currentSquare +"currentsquare value")
    }

var start = function(){
    p1 = players[0][0]
    p2 = players[1][0]
    k =[p1,p2]
    document.getElementById('square1_residents').innerHTML = k;
}

document.getElementById('roll').addEventListener('click',roll);

var d = document.getElementById('start');



var reset = function(){
    d.removeEventListener('click',start);
    d.addEventListener('click',start,{once:true});
}

document.getElementById('reset').addEventListener('click',reset);

// Maps location to new Tile and removes from old tile
var movePlayerTile = function(){
    currentSquare

//helper function takes in player, roll, as inputs

for (f=0; f<2;f++) {
    let currentPlayer = players[f];
    roll();
console.log(players[0],players[1])
}

}