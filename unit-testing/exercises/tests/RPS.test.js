const whoWon = require('../RPS.js');

describe("whoWon", function() {

    test("Returns 'TIE!' if player1 === player2", function() {
        let output = whoWon('rock', 'rock'); 
        expect(output).toEqual('TIE!'); 
    }); 

    test("Returns 'Player 2 wins!' if player1 === 'rock' && player2 === 'paper'", function() {
        let output = whoWon('rock', 'paper'); 
        expect(output).toEqual('Player 2 wins!');
    });

    test("Returns 'Player 2 wins!' if player1 === 'paper' && player2 === 'scissors'", function() {
        let output = whoWon('paper', 'scissors'); 
        expect(output).toEqual('Player 2 wins!');
    });

    test("Returns 'Player 2 wins!' if player1 === 'scissors' && player2 === 'rock'", function() {
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual('Player 2 wins!');
    });

    test("Returns 'Player 1 invalid selection.' if player1 !== 'rock' or 'paper' or 'scissors'", function() {
        let output = whoWon('lizard', '');
       
        expect(output).toEqual('Player 1 invalid selection.');
    });

    test("Returns 'Player 1 wins!' if 'Player 2 wins!' is false", function() {
        let output = whoWon('rock', 'scissors');
        expect(output).toEqual('Player 1 wins!');
    });
    
    //test("Returns 'Player 2 invalid selection.' if player2 chooses anything other than 'rock', 'paper', or 'scissors'", function() {
    //    let output = whoWon(rock, lizard); 
    //    expect(output).toEqual('Player 2 invalid selection.');
    //});
});