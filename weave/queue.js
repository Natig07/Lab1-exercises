// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        if (this.data) {
            return this.data[this.data.length - 1];
        }
    }
}
// const q = new Queue();
// q.add(4);
// q.add(6);

// console.log(q.peek());
// console.log(q.remove());
// console.log(q.peek());
module.exports = Queue;