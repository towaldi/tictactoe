// Array -> stores if palyers occupation sign was set 
let squares = [];


// Cancel condition
let gameOver = false;

// Current occupation sign 
let currentSign = 'circle';  


// Update squares
function fillSquares(id) {      // Id -> for each square
    if (!squares[id] && !gameOver) {      // Only if square is NOT filled following code gets exectuted (to aviod d) AND if not game over
        if (currentSign == 'circle') {      // Checks current sign (player switching) -> if currentSign 'circle' change to 'cross'
            currentSign = 'cross';
            document.getElementById('player-1').classList.remove('inactive');   // Remove class inactive for player -> visual feedback which player is on turn
            document.getElementById('player-2').classList.add('inactive');   
        } else {
            currentSign = 'circle'      // If state 'false' -> 'circle'
            document.getElementById('player-1').classList.add('inactive');   // Remove class inactive for player -> visual feedback which player is on turn
            document.getElementById('player-2').classList.remove('inactive'); 
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
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (squares[3] == squares[4] && squares[4] == squares[5] && squares[3]) {     // 2. row -> 3 same signs
        winner = squares[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (squares[6] == squares[7] && squares[7] == squares[8] && squares[6]) {     // 1. row -> 3 same signs
        winner = squares[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    // Horizontal wins
    if (squares[0] == squares[3] && squares[3] == squares[6] && squares[0]) {     // 1. column -> 3 same signs
        winner = squares[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1]) {     // 2. column -> 3 same signs
        winner = squares[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2]) {     // 1. row -> 3 same signs
        winner = squares[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // Diagonal wins
    if (squares[0] == squares[4] && squares[4] == squares[8] && squares[0]) {     // 1. diagonal (top left to bottom right) -> 3 same signs
        winner = squares[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }

    if (squares[2] == squares[4] && squares[4] == squares[6] && squares[2]) {     // 2. diagonal (top right to bottom left) -> 3 same signs
        winner = squares[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if (!!winner) {
        console.log('WON!', winner);
        gameOver = true;
        setTimeout(function(){  // Timeout (1 sec) -> delay dialog animation
            document.getElementById('dialog-game-over').classList.remove('d-none');     // Shows game over dialog
        }, 1000);
    }
}


// Restart game
function restart() {
    gameOver = false; // Reset cancel condition
    squares = [];     // Reset array
    document.getElementById('dialog-game-over').classList.add('d-none');     // Hide game over dialog

    for (let i = 1; i < 9; i++) {      // Hide win line
        document.getElementById('line-' + i).style.transform = 'scaleX(0)';
    }

    for (let i = 0; i < 9; i++) {   // Hide players signs
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}