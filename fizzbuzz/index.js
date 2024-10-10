// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let index = 1; index <= n; index++) {
        let i = index;
        if (index % 3 == 0 && index % 5 == 0) {
            i = 'fizzbuzz';
        } else if (index % 3 == 0) {
            i = 'fizz';
        } else if (index % 5 == 0) {
            i = 'buzz';
        }
        console.log(i)
    }
}
fizzBuzz(15);
module.exports = fizzBuzz;