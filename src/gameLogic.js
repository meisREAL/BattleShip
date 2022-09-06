import { generateGameBoard, game } from "./DOM";

const Ship = (length) => {
    // var isSunk = false;
    const shipLength = length;
    const shipHits = [] //place to track hits
    const coords = ['', '', '']

    const hit = (hitPosition) => {
        shipHits.push(hitPosition);
        checkIfSunk();
    }
    const checkIfSunk = () => {
        if (shipHits.length >= shipLength) {
            alert('You sank a ship!');
        }
    }

    return {
        shipLength,
        hit,
        // isSunk,
        shipLength,
        shipHits,
        coords,
    }
};

const GameBoard = () => {

    const gameBoard = [
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']], //this is game board made of array
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']], //this gameBoard will save missed hits
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']], //and ship placement
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
        [[''], [''], [''], [''], [''], [''], [''], [''], [''], ['']],
    ]
    const gameShips = [] // array to keep ship objects from Ship()

    const saveShips = (ship) => { //after new ship is created this function sends ship to array for storage
        gameShips.push(ship);
    }

    const getShip = (length) => {  //communicates with Ship for new object creation
        const gameShip = Ship(length);
        saveShips(gameShip);
        console.log(gameShips);
        generateShipLocation(gameShip);
    }

    const placeShip = (ship) => {
        //saves ship to gameBoard

    }

    const generateShipLocation = (ship) => {
        const col = Math.floor(Math.random() * 9);
        const row = Math.floor(Math.random() * 9);
        const choice = Math.floor(Math.random() * 2);

        if (choice < 1) { //horizontal positioning 
            for (let i = 0; i < ship.shipLength; i++) {
                if (col <= 7) {
                    gameBoard[row][col + i] = 'ship';
                    ship.coords[i] = `${[row]}-${[col + i]}`;
                } else {
                    gameBoard[row][col - i] = 'ship';
                    ship.coords[i] = `${[row]}-${[col - i]}`;
                }
            }
        } else if (choice >= 1) { //vertical positioning
            for (let i = 0; i < ship.shipLength; i++) {
                if (row <= 7) {
                    gameBoard[row + i][col] = 'ship';
                    ship.coords[i] = `${[row + i]}-${[col]}`;
                } else {
                    gameBoard[row - i][col] = 'ship';
                    ship.coords[i] = `${[row - i]}-${[col]}`;
                }
            }
        }
    }

    const receiveAttack = (coordA, coordB) => {
        //get coordinates of hit cell
        //check array gameBoard if there is a ship or empty
        // if empty mark missed hit X and return 
        //else check which ship got hit
        //mark ship as hit
        //mark cell as good hit
        //check if ship is sunk
        //return hit to board

        // console.log(coordA, coordB)

        if (gameBoard[coordA][coordB] == '') {
            gameBoard[coordA][coordB] = 'miss';
            game.markOnBoard(coordA, coordB);
        } else if (gameBoard[coordA][coordB] == 'miss') {
            alert('You already shot here');
        } else if (gameBoard[coordA][coordB] == 'ship') {
            for (let i = 0; i < gameShips.length; i++) {
                for (let j = 0; j < gameShips[i].coords.length; j++) {
                    if (gameShips[i].coords[j] == `${coordA}-${coordB}`) {
                        gameShips[i].hit('HIT');
                        // gameShips[i].checkIfSunk();
                        break;
                    }
                }
            }
            game.markHitOnBoard(coordA, coordB);
            console.log(gameShips);
        }
    }

    const getCoords = (e) => {
        //creates separate coordinates of cell hit
        const coords = e.target.dataset.indexNumber;
        const coordA = coords.slice(0, 1);
        const coordB = coords.slice(2);
        receiveAttack(coordA, coordB);
    }

    return {
        //
        gameBoard,
        gameShips,
        getShip,
        generateShipLocation,
        getCoords,
        saveShips,


    }
}

const boardStuff = GameBoard();
boardStuff.getShip(3);
boardStuff.getShip(3);



export {
    Ship,
    GameBoard,
    boardStuff,
}