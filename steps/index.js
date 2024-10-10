// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    if (n <= 0) {
        return null;
    }

    for (let row = 0; row < n; row++) {
        let str = '';

        const numSpaces = n - row - 1;
        const numHashes = row + 1;

        str += '#'.repeat(numHashes);

        str += ' '.repeat(numSpaces);
        console.log(str);
    }

}
steps(4);
module.exports = steps;