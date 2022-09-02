

const Ship = (length) => {
    let isSunk = false;
    const shipLength = length;
    const shipArr = [] //place to track hits

    const hit = (hitPosition) => {
        shipArr.push(hitPosition);
        checkIfSunk();
    }
    const checkIfSunk = () => {
        (shipArr.length >= shipLength) ? isSunk = true : isSunk = false;
    }

    return {
        shipLength,
        hit,
        isSunk,
        shipLength,
        shipArr
    }
};


export {
    Ship,
}