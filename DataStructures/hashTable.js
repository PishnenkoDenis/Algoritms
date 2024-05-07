class HashTable {
  constructor(limit) {
    this.table = [];
    this.limit = limit;
  }

  print() {
    console.log(this.table);
  }

  hash(string, max) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  }

  add(key, value) {
    let index = this.hash(key, this.limit);

    this.table[index] = this.table[index] || [];
    this.table[index].push({ key, value });
  }

  remove(key) {
    let index = this.hash(key, this.limit);

    if (this.table[index].length === 1 && this.table[index][0].key === key) {
      return this.table.splice(index, 1);
    } else {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key)
          return this.table[index].splice(i, 1);
      }
    }
  }

  show(key) {
    let index = this.hash(key, this.limit);

    return this.table[index].find((item) => item.key === key).value;
  }
}

const hashTable = new HashTable(14);
hashTable.add("first", "firstElement");
hashTable.add("second", "secondElement");
hashTable.add("third", "thirdElement");
hashTable.add("fourth", "fourthElement");
hashTable.print();
console.log("-----");
console.log(hashTable.show("second"));
console.log(hashTable.remove("fourth"));
console.log("-----");
hashTable.print();
