class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  removeMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChildIndex(currentIndex) < this.heap.length &&
        this.heap[this.getRightChildIndex(currentIndex)] <
          this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(currentIndex, smallerChildIndex);
      }

      currentIndex = smallerChildIndex;
    }
  }
}

const priorityQueue = new MinHeap();
priorityQueue.insert(10);
priorityQueue.insert(5);
priorityQueue.insert(20);
priorityQueue.insert(3);

console.log("Removed min value:", priorityQueue.removeMin());
console.log("Removed min value:", priorityQueue.removeMin()); 



//-------------------------heap sort-----------------
function heapify(arr, n, i) {
  let largest = i; 
  let left = 2 * i + 1; 
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
      largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
      largest = right;
  }

  if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; 
      heapify(arr, i, 0);
  }
}

let arr = [12, 11, 13, 5, 6, 7];
console.log("Unsorted array:", arr);

heapSort(arr);
console.log("Sorted array:", arr);


