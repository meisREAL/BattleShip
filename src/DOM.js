import { GameBoard, boardStuff } from "./gameLogic";


// const boardStuff = GameBoard();
const generateGameBoard = () => {
    // const boardStuff = GameBoard();
    const gameBoard = () => {
        //create 10x10 grid
        const content = document.getElementById('content');
        const board = document.createElement('div');
        board.setAttribute('id', 'board');

        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-index-number', `${row}-${col}`);
                cell.setAttribute('id', `${row}${col}`)
                board.appendChild(cell);
            }
        }
        content.appendChild(board);
    }

    const makeListeners = () => {
        //creates event listeners on the board
        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', boardStuff.getCoords)
        }
    }

    const markOnBoard = (coordA, coordB) => {
        const hitCell = document.getElementById(`${coordA}${coordB}`)
        hitCell.textContent = 'MISS';
    }

    const markHitOnBoard = (coordA, coordB) => {
        const hitCell = document.getElementById(`${coordA}${coordB}`)
        hitCell.textContent = 'HIT';
        hitCell.style.background = 'red'
    }

    return {
        gameBoard,
        makeListeners,
        markOnBoard,
        markHitOnBoard
    }
};

const game = generateGameBoard();




export {
    generateGameBoard,
    game,
}