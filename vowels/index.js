// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let arr2 = [...str];
    for (let y of arr) {
        for (let t of arr2) {
            if (t.toLowerCase() == y) {
                count += 1;
                arr2.splice(arr2.indexOf(t), 1);
            }
        }
    }
    return count;
}
console.log(vowels('Hi There!'));
module.exports = vowels;