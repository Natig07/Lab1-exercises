// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let array = [...str];
    let arr2 = [];
    for (let index = 0; index < array.length; index++) {
        arr2[index] = 0;
    }
    let i = 0;
    let word_array = []
    for (let wrd of array) {
        if (!word_array.includes(wrd)) {
            word_array.push(wrd);
        }
    }
    for (let char of word_array) {
        while (array.includes(char)) {
            arr2[i]++;
            let k = array.indexOf(char);
            array.splice(k, 1);
        }
        i++;
    }
    let copy_arr2 = arr2.flatMap(x => [x]);
    copy_arr2.sort((a, b) => b - a);
    let ind;
    arr2.map((element, index) => {
        if (element == copy_arr2[0]) { ind = index };
    });
    // console.log(copy_arr2[0]);
    // console.log(array);
    // console.log(arr2);
    return word_array[ind];

}
console.log(maxChar('apple 1231111'));
module.exports = maxChar;