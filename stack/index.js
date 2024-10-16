// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.arr = []
    }
    push(el) {
        this.arr = [el, ...this.arr];
    }
    peek() {
        if (this.arr) {
            return this.arr[0];
        }
    }
    pop() {
        if (this.arr[0]) {
            return this.arr.splice(0, 1)[0];
        }
    }
}

const s = new Stack();
s.push(1);
s.push(2);
console.log(s.peek());
// console.log(s.arr);
console.log(s.pop()); // returns 2
console.log(s.pop()); // returns 1

module.exports = Stack;