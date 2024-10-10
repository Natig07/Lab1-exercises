// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const { LinkedList, Node } = require("./linkedlist");

function circular(list) {
    let copy1 = list.head;
    let copy2 = list.head;
    while (copy1 && copy2.next) {
        copy1 = copy1.next;
        copy2 = copy2.next.next;
        if (copy1 === copy2) {
            return true;
        }
    }
    return false;
}
const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = b;

console.log(circular(l));
module.exports = circular;