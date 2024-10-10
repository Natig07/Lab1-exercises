// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let t = [...n.toString()];
    let arry2 = [];
    let p = '';
    for (let y of t) {
        if (y != '-') {
            arry2.push(y);
        } else {
            p = y;
        }
    }
    arry2.reverse();
    let y = '';
    y += p;
    for (let el of arry2) {
        y += el;
    }

    return +y;
}
console.log(reverseInt(-90));
module.exports = reverseInt;