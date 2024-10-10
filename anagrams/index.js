// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let str1 = stringA.toLowerCase().trim();
    let str2 = stringB.toLowerCase().trim();
    return (str1.length == str2.length) ? [...str1].every(char => str2.includes(char)) : false;
}

module.exports = anagrams;