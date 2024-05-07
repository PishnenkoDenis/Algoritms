class Queue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  put(element) {
    this.queue.push(element); //O(1)
  }

  remove() {
    return this.queue.shift(); //O(1)
  }

  size() {
    return this.queue.length;
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.put(1);
queue.put(2);
queue.put(3);
queue.put(4);
queue.print();
queue.remove();
queue.print();
queue.remove();
queue.print();

queue.put(0);
queue.print();
