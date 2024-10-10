// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let n = 0;
    let arr = [];
    let arr_cpy = array;
    let iter = (Math.ceil((array.length) / size))
    for (let index = 0; index < iter; index++) {
        arr = [...arr, arr_cpy.splice(n, size)]
    }
    return arr
}

console.log(chunk([1, 2, 3, 4, 5], 10));
module.exports = chunk;