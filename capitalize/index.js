// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let strr = str.trim().split(' ');
    let strr2 = '';
    strr.map(word => {
        strr2 += word.replace(word.at(0), word.at(0).toUpperCase()) + ' ';
    })

    return strr2.trim();
}

module.exports = capitalize;