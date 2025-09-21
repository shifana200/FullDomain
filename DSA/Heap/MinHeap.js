class MinHeap {
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

    
    buildMinHeap(array) {
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

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0); 

        return minValue;
    }

    
    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.getParentIndex(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex); 
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    
    heapifyDown(index) {
        let smallest = index;
        let leftChild = this.getLeftChildIndex(index);
        let rightChild = this.getRightChildIndex(index);

        
        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }

        
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }

        
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }


    heapSort() {
        const result = [];
        const original = [...this.heap]; // backup original heap
        while (this.heap.length > 0) {
            result.push(this.remove());
        }
        this.heap = original; // restore
        return result;
    }
    
    printHeap() {
        console.log("Heap Array:", this.heap);
    }
}

const minHeap = new MinHeap();

const array = [20, 55, 67, 12, 98, 23, 56, 77, 87];
minHeap.buildMinHeap(array);
console.log("After Build:");
minHeap.printHeap();

minHeap.insert(10);
console.log("After Inserting 10:");
minHeap.printHeap();

minHeap.insert(15);
console.log("After Inserting 15:");
minHeap.printHeap();

console.log("Removed:", minHeap.remove());
console.log("After Removal:");
minHeap.printHeap();

console.log("Removed:", minHeap.remove());
console.log("After Removal:");
minHeap.printHeap();
