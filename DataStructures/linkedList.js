class LinkedNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  addBegin(value) {
    //O(1)
    if (this.size === 0) {
      this.head = new LinkedNode(value, null);
      this.size += 1;
      return true;
    }

    let newNode = new LinkedNode(value, this.head);
    this.head = newNode;
    this.size += 1;
  }

  removeBegin() {
    //O(1)
    if (this.head === null) return false;

    const removed = this.head.value;
    this.head = this.head.next;
    this.size--;

    return removed;
  }

  remove(value) {
    let currentNode = this.head;
    let previousNode;

    if (currentNode.value === value) {
      this.head = currentNode.next;
    } else {
      while (currentNode.value !== value) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.size -= 1;
  }

  isEmpty() {
    return this.size === 0;
  }

  indexOf(value) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index += 1;

      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;

    while (count <= index) {
      count += 1;
      currentNode = currentNode.next;
    }

    return currentNode?.value;
  }

  addAt(index, value) {
    let node = new LinkedNode(value);
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.size) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.size++;
    return node.value;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.size--;
    return currentNode.value;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();
list.addBegin("first");
list.addBegin("second");
list.addBegin("third");
list.addBegin("fifth");
console.log(list.getSize());
console.log(list.elementAt(0));
// console.log(list.removeAt(3));
// console.log(list.elementAt(2));
// console.log(list.indexOf("second"));
// console.log(list.getSize());

console.log(list.addAt(1, "newnode"));
console.log(list.getSize());
console.log(list.removeBegin());
console.log(list.getSize());
