/*
* checkForBingo isn't making API calls or modifying anything outside of our control, 
* so no real need to do any mocking
*
* Run tests with "npm run test"
*/
const checkForBingo = require('./index') 

test('Returns true for a diagonal-up bingo', () => {
  const bingoCard = [ 
    1, 29, 35, 54, 72,
    13, 19, 44, 53, 67,
    9, 21, 'FREE', 59, 63,
    7, 24, 34, 48, 61,
    8, 20, 33, 46, 65
  ];
  const drawnNumbers = [8, 24, 53, 72];
  const funcResult = checkForBingo(bingoCard, drawnNumbers);

  expect(funcResult).toBe(true)
})

test('Returns true for a diagonal-down bingo', () => {
  const bingoCard = [ 
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ];
  const drawnNumbers = [8, 24, 53, 72];
  const funcResult = checkForBingo(bingoCard, drawnNumbers);

  expect(funcResult).toBe(true)
})

test('Returns true for a column bingo', () => {
  const bingoCard = [ 
    35, 29, 35, 8, 65,
    13, 48, 44, 24, 67,
    9, 21, 'FREE', 53, 63,
    7, 19, 34, 72, 61,
    1, 20, 33, 46, 71
  ];
  const drawnNumbers = [8, 24, 53, 72, 46];
  const funcResult = checkForBingo(bingoCard, drawnNumbers);

  expect(funcResult).toBe(true)
})

test('Returns true for a row bingo', () => {
  const bingoCard = [ 
    35, 29, 35, 6, 65,
    13, 48, 44, 28, 67,
    9, 21, 'FREE', 51, 63,
    8, 24, 53, 72, 46,
    1, 20, 33, 43, 71
  ];
  const drawnNumbers = [8, 24, 53, 72, 46];
  const funcResult = checkForBingo(bingoCard, drawnNumbers);

  expect(funcResult).toBe(true)
})

test('Returns false if no bingo exists', () => {
  const bingoCard = [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ];
  const drawnNumbers = [1, 33, 53, 65, 29, 75]
  const funcResult = checkForBingo(bingoCard, drawnNumbers);

  expect(funcResult).toBe(false);
})