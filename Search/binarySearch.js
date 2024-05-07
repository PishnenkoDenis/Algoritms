const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const words = ["first", "second", "third", "fourth", "fifth"];
let count = 0;

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (item === arr[middle]) {
      found = true;
      position = middle;
      return position;
    }

    if (item > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return position;
}

let recursiveCount = 0;

function recursiveBinarySearch(arr, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  recursiveCount += 1;

  if (item === arr[middle]) return middle;

  if (item > arr[middle]) {
    return recursiveBinarySearch(arr, item, middle + 1, end);
  } else {
    return recursiveBinarySearch(arr, item, 0, middle - 1);
  }
}

console.log("binarySearch", binarySearch(array, 8)); //O(logn)
console.log("count:", count);

console.log(
  "recursiveBinarySearch",
  recursiveBinarySearch(array, 8, 0, array.length) //O(logn)
);
console.log("count:", recursiveCount);
