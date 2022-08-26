/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

/*
* Tests are in './index.test.js', use "NPM RUN TEST" to run
*/
function checkForBingo (bingoCard, drawnNumbers) {
  /*
  * Define a function to search for any additional matches after an initial match is found
  */
  const findMatches = (index, direction) => {
    let matches = 1;
    while (matches < 5) {
      /*
      * Increment index in to next element in sequence according to the inputted direction
      */
      switch (direction) {
        case 'row': 
          index += 1;
          break;
        case 'column': 
          index += 5;
          break;
        case 'diagonal-up': 
          index -= 4;
          break;
        case 'diagonal-down': 
          index += 6;
          break;
      }
      if (drawnNums.has(bingoCard[index])) {
        matches++;
      } else {
        return false;
      }
    }
    return true;
  }

  /* 
  * Declare a Set for the drawn numbers and O(1) lookup time using .has(), push 'FREE' to set
  */
  const drawnNums = new Set();
  drawnNums.add('FREE');

  /*
  * Iterate through the drawnNumbers array ONCE
  */
  drawnNumbers.forEach(num => {
    drawnNums.add(num);
  })

  /*
  * Iterate through the elements in the first column to find any horizontal matches 
  */
  for (let row = 0; row < 5; row++) {
    if (drawnNums.has(bingoCard[row * 5])) {
      if (findMatches(row * 5, 'row')) return true;
    }
  }
  
  /*
  * Iterate through the elements in the first row to find any vertical matches 
  */
  for (let column = 0; column < 5; column++) {
    if (drawnNums.has(bingoCard[column])) {
      if (findMatches(column, 'column')) return true;
    }
  }

  /*
  * If the first element in the array (top left element) or the 20th element (bottom-right element) are a match, check for diagonals
  */
  if (drawnNums.has(bingoCard[0])) {
    if (findMatches(0, 'diagonal-down')) return true;
  }

  if (drawnNums.has(bingoCard[20])) {
    if (findMatches(20, 'diagonal-up')) return true;
  }

  /* 
  * If none of the findMatches return true, return false
  */
  return false;
}                                       

module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
// checkForBingo(
//   [
//     8, 29, 35, 54, 65,
//     13, 24, 44, 48, 67,
//     9, 21, 'FREE', 59, 63,
//     7, 19, 34, 53, 61,
//     1, 20, 33, 46, 72
//   ],
//   [
//     8, 24, 53, 72
//   ]
// )

// // this should return false
// checkForBingo(
//   [
//    8, 29, 35, 54, 65,
//    13, 24, 44, 48, 67,
//    9, 21, 'FREE', 59, 63,
//    7, 19, 34, 53, 61,
//    1, 20, 33, 46, 72
//   ],
//   [
//     1, 33, 53, 65, 29, 75
//   ]
// )