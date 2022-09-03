import { GameBoard } from "./gameLogic";

const board = GameBoard();

const generateGameBoard = (function () {
    const content = document.getElementById('content');

    const gameBoard = () => {
        //create 10x10 grid
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
    }

    const makeListeners = () => {
        //creates event listeners on the board
        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', board.getCoords)
        }
    }

    return {
        gameBoard,
        makeListeners,

    }
})();

export {
    generateGameBoard,

}