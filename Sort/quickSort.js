const array = [
  0, 1, 3, 2, 4, 6, 5, 7, 10, 9, 8, 15, 16, 11, 12, 17, 13, 14, 18,
];
let count = 0;

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    count += 1;

    if (i === pivotIndex) continue;

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array)); //O(nlogn)
console.log(count);
