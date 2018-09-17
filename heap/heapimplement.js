function insertIntoHeap(heap, val) {
  if (heap.length < 1) {
    heap.length = 2;
    heap[1] = val;
  } else {
    var hold;
    heap.push(val);
    i = heap.length - 1;

    // while the child is less than the parent
    while (heap[i] < heap[Math.floor(i / 2)]) {
      hold = heap[i];
      heap[i] = heap[Math.floor(i / 2)];
      heap[Math.floor(i / 2)] = hold;
      i /= 2;
    }
  }
  return heap;
}

//sample outputs:
insertIntoHeap([], 13); // alters the empty array to be [undefined, 13]
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); //  alters the array to [undefined, 3, 7, 10, 8, 9, 20, 14, 1
