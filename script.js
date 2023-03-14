// Array -> stores if palyers occupation sign was set 
let squares = [];


// Current occupation sign 
let currentSign = 'circle';  


// Update squares
function fillSquares(id) {      // Id -> for each square
    if (!squares[id]) {      // Only if square is NOT filled following code gets exectuted (to aviod d)
        if (currentSign == 'circle') {      // Checks current sign (player switching) -> if currentSign 'circle' change to 'cross'
            currentSign = 'cross';
            document.getElementById('player-2').classList.remove('inactive');   // Remove class inactive for player -> visual feedback which player is on turn
            document.getElementById('player-1').classList.add('inactive');   
        } else {
            currentSign = 'circle'      // If state 'false' -> 'circle'
            document.getElementById('player-2').classList.add('inactive');   // Remove class inactive for player -> visual feedback which player is on turn
            document.getElementById('player-1').classList.remove('inactive'); 
        }
        squares[id] = currentSign;     // Square is filled with 'circle' or 'cross'
        console.log(squares);
        draw();     // Function is called after each click
        checkWhoWins();     // Function is called after each click
    }
}


// Show occupation sign in field
function draw() {
    for (let i = 0; i < squares.length; i++) {      // Itteration through array
        if (squares[i] == 'circle') {       // If square at position i = 'circle' remove d-none
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (squares[i] == 'cross') {        // If square at position i = 'cross' remove d-none
            document.getElementById('cross-' + i).classList.remove('d-none');
        }  
    }
}


// Checks who wins
function checkWhoWins() {
    let winner;
    // Vertical wins
    if (squares[0] == squares[1] && squares[1] == squares[2] && squares[0]) {     // 1. row -> 3 same signs
        winner = squares[0];    // Also 1 and 2 usable -> all the same
    }

    if (squares[3] == squares[4] && squares[4] == squares[5] && squares[3]) {     // 2. row -> 3 same signs
        winner = squares[3];
    }

    if (squares[6] == squares[7] && squares[7] == squares[8] && squares[6]) {     // 1. row -> 3 same signs
        winner = squares[6];
    }

    // Horizontal wins
    if (squares[0] == squares[3] && squares[3] == squares[6] && squares[0]) {     // 1. column -> 3 same signs
        winner = squares[0];
    }

    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1]) {     // 2. column -> 3 same signs
        winner = squares[1];
    }

    if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2]) {     // 1. row -> 3 same signs
        winner = squares[2];
    }

    // Diagonal wins
    if (squares[0] == squares[4] && squares[4] == squares[8] && squares[0]) {     // 1. diagonal (top left to bottom right) -> 3 same signs
        winner = squares[0];
    }

    if (squares[2] == squares[4] && squares[4] == squares[6] && squares[2]) {     // 2. diagonal (top right to bottom left) -> 3 same signs
        winner = squares[2];
    }

    if (!!winner) {
        console.log('WON!', winner);
    }
}