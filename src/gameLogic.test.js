import { Ship } from "./gameLogic";

test('Ship length', () => {
    const testShip = Ship(4);
    expect(testShip.shipLength).toBe(4);
})
test('Ship array', () => {
    const testShip = Ship(4);
    testShip.hit('X');
    expect(testShip.shipHits).toStrictEqual(['X'])
})
test('Ship array 2', () => {
    const testShip = Ship(4);
    testShip.hit('X');
    testShip.hit('X');
    testShip.hit('X');
    expect(testShip.shipHits).toStrictEqual(['X', 'X', 'X'])
})
test('Ship array 2', () => {
    const testShip = Ship(4);
    testShip.hit('X');
    testShip.hit('X');
    testShip.hit('X');
    testShip.hit('X');
    expect(testShip.shipHits).toStrictEqual(['X', 'X', 'X', 'X'])
})
test('ship isSunk', () => {
    const testShip = Ship(4);
    expect(testShip.isSunk).toBe(false);
})
test('ship isSunk 2', () => {
    const testShip = Ship(4);
    testShip.hit('X');
    testShip.hit('X');
    testShip.hit('X');
    testShip.hit('X');
    // expect(testShip.shipArr).toStrictEqual(['X', 'X', 'X', 'X'])
    expect(testShip.isSunk).toBe(true);
})
//--------------------------------------------------------------------------------------------------


