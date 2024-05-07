function mergeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    mergeSort(left);
    mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }
      k++;
    }

    while (i < left.length) {
      array[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      array[k] = right[j];
      j++;
      k++;
    }
  }
  return array;
}

const arr = [1, 3, 5, 6, 8, 4, 9, 2];
console.log(mergeSort(arr));
