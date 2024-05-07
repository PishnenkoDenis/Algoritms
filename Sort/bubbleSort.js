const array = [
  0, 1, 3, 2, 4, 6, 5, 7, 10, 9, 8, 15, 16, 11, 12, 17, 13, 14, 18,
];
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }

      count += 1;
    }
  }

  return arr;
}

console.log(bubbleSort(array)); //O(n2)
console.log("count", count);
