const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (item === arr[i]) return i;
  }

  return null;
}

console.log(linearSearch(array, 11));
console.log(count);
