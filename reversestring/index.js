// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    str = [...str].reverse();
    let y = '';
    for (let r of str) {
        y += r;
    }
    return y
}
// console.log(reverse('Greetings!'));
module.exports = reverse;