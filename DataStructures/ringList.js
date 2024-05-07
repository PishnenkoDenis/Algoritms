class RingListNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class RingList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addBegin(value) {
    if (this.head === null) {
      const node = new RingListNode(value, null, null);
      this.head = node;
      this.tail = node;
      this.size += 1;
    } else {
      const node = new RingListNode(value, null, this.head);
      this.head.prev = node;
      this.head = node;
      this.size += 1;
    }
  }

  addEnd(value) {
    if (this.tail === null) {
      const node = new RingListNode(value, null, null);
      this.head = node;
      this.tail = node;
      this.size += 1;
    } else {
      const node = new RingListNode(value, this.tail, this.head);
      this.tail = node;
      this.size += 1;
    }
  }

  removeBegin() {
    if (this.head === null) {
      return null;
    }
    const result = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }

    return result;
  }

  removeEnd() {
    if (this.tail === null) {
      return null;
    }

    const result = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.size--;
    }
    return result;
  }

  print() {
    console.log(this.size);
  }
}

const list = new RingList();
list.addBegin("1");
list.addBegin("2");
list.print();
list.addEnd("3");
list.print();
list.addBegin("0");
list.print();
console.log("0", list.removeBegin());
list.print();
console.log("3", list.removeEnd());
list.print();
console.log("1", list.removeEnd());
list.print();
