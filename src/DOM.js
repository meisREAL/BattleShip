import { GameBoard } from "./gameLogic";


// const board = GameBoard();
const generateGameBoard = {
    // const board = GameBoard();


    gameBoard: function () {
        //create 10x10 grid
        const content = document.getElementById('content');
        const board = document.createElement('div');
        board.setAttribute('id', 'board');

        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-index-number', `${row}-${col}`);
                board.appendChild(cell);
            }
        }

        content.appendChild(board);
    },

    makeListeners: function () {
        //creates event listeners on the board
        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', board.getCoords)
        }
    },

    markOnBoard: function () {
        //calls stuff on GameBoard object
        //checks GameBoard array 
        //marks cell
        board.getCoords(event);

    }

    // return {
    //     gameBoard,
    //     makeListeners,
    //     markOnBoard
    // }
};



export {
    generateGameBoard,

}