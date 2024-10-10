// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let t;
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]) {
                t = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}
let arr = [3, 67, 23, 32, 2, 45, 4, 5, 6];
// console.log(bubbleSort(arr));

function selectionSort(arr) {
    let t, minn;
    for (let i = 0; i < arr.length - 1; i++) {
        minn = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minn]) {
                minn = j
            }
        }
        t = arr[i];
        arr[i] = arr[minn];
        arr[minn] = t;
    }
    return arr;
}

// console.log(selectionSort(arr));
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log(mergeSort(arr));

module.exports = { mergeSort, merge };


module.exports = { bubbleSort, selectionSort, mergeSort, merge };