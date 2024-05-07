const array = [
  0, 1, 3, 2, 4, 6, 5, 7, 10, 9, 8, 15, 16, 11, 12, 17, 13, 14, 18,
];
let count = 0;

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }

      count += 1;
    }

    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

console.log(selectSort(array)); //O(n2)
console.log("count:", count);
