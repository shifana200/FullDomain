class MaxHeap {
    constructor() {
        this.heap = [];
    }

    
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    buildMaxHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1); 
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0); 

        return maxValue;
    }

    
    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.getParentIndex(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex); 
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    
    heapifyDown(index) {
        let largest = index;
        let leftChild = this.getLeftChildIndex(index);
        let rightChild = this.getRightChildIndex(index);

        
        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }

        
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }

        
        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    
    printHeap() {
        console.log("Heap Array:", this.heap);
    }
}

const maxHeap = new MaxHeap();

const array = [20, 55, 67, 12, 98, 23, 56, 77, 87];
maxHeap.buildMaxHeap(array);
console.log("After Build:");
maxHeap.printHeap();

maxHeap.insert(100);
console.log("After Inserting 100:");
maxHeap.printHeap();

maxHeap.insert(60);
console.log("After Inserting 60:");
maxHeap.printHeap();

console.log("Removed:", maxHeap.remove());
console.log("After Removal:");
maxHeap.printHeap();

console.log("Removed:", maxHeap.remove());
console.log("After Removal:");
maxHeap.printHeap();


heapSort() {
    const result = [];
    const original = [...this.heap]; // backup

    while (this.heap.length > 0) {
        result.push(this.remove());
    }

    this.heap = original; // restore original heap if needed
    return result.reverse();