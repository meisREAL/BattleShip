

const Ship = (length) => {
    let isSunk = false;
    const shipLength = length;
    const shipHits = [] //place to track hits
    const coords = ['', '', '']

    const hit = (hitPosition) => {
        shipHits.push(hitPosition);
        checkIfSunk();
    }
    const checkIfSunk = () => {
        // (shipHits.length >= shipLength) ? isSunk = true : isSunk = false;
        if (shipHits.length >= shipLength) {
            isSunk = true;
        }
    }

    return {
        shipLength,
        hit,
        isSunk,
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
        placeShip(gameShip)
    }

    const placeShip = (ship) => {
        //saves ship to gameBoard

    }

    const generateShipLocation = (ship) => {
        const col = Math.floor(Math.random() * 9);
        const row = Math.floor(Math.random() * 9);
        const choice = Math.floor(Math.random * 2);

        if (choice <= 1) { //horizontal positioning 
            for (let i = 0; i < ship.shipLength; i++) {
                if (col <= 7) {
                    gameBoard[row][col + i] = 'ship';
                    ship.coords[i] = `${gameBoard[row][col + i]}`;
                } else {
                    gameBoard[col][col - i] = 'ship';
                    ship.coords[i] = `${gameBoard[col][col - i]}`;
                }
            }
        } else if (choice > 1) {
            for (let i = 0; i < ship.shipLength; i++) {
                if (row <= 7) {
                    gameBoard[row + i][col] = 'ship';
                    ship.coords[i] = `${gameBoard[row + i][col]}`;
                } else {
                    gameBoard[row - i][col] = 'ship';
                    ship.coords[i] = `${gameBoard[row - i][col]}`;
                }
            }
        }
    }

    return {
        //
        gameBoard,
        gameShips,
        getShip,
    }
}


export {
    Ship,
    GameBoard,

}