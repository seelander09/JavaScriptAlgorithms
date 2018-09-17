var arr = [
  31,
  22,
  -5,
  9,
  20,
  -8,
  -97,
  -50,
  42,
  88,
  -33,
  27,
  98,
  40,
  -26,
  72,
  77,
  -12,
  13,
  44,
  -78,
  -2
];

function findMinimumValue(arr) {
  var minidx = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minidx]) {
      minidx = i;
    }
  }
  return arr[minidx];
}

// This approach trades a slow write time for a faster read time by sorting the array when we add values.

function insertSorted(arr, val) {
  arr.push(val);
  var i = arr.length - 1;
  while (i > 0 && arr[i - 1] > val) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[i] = val;
}
