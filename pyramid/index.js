// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    if (n <= 0) {
        return null;
    }

    for (let row = 0; row < n; row++) {
        let str = '';

        const numSpaces = n - row - 1;
        const numHashes = 2 * row + 1;

        str += ' '.repeat(numSpaces);

        str += '#'.repeat(numHashes);

        str += ' '.repeat(numSpaces);
        console.log(str);
    }
}
// pyramid(2);
module.exports = pyramid;