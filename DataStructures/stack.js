class Stack {
  constructor() {
    this.count = 0;
    this.store = {};
  }

  push(value) {
    //O(1)
    this.store[this.count] = value;
    this.count++;
  }

  pop() {
    //O(1)
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.store[this.count];
    delete this.store[this.count];

    return result;
  }

  size() {
    return this.count;
  }

  endOfStack() {
    return this.store[this.count - 1];
  }
}

class ArrayStack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.size());
console.log(stack.endOfStack());
console.log(stack.pop());
console.log(stack.size());
stack.push("string");
console.log(stack.size());
