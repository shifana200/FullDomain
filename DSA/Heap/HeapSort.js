//sort using heapsort
class heapSort{
    constructor(array){
        this.heap = array
        this.size = array.length
    }
    
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2*index+1;
    }
    getRightChildIndex(index){
        return 2*index+2;
    }
    
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    
    buildMaxHeap(){
        for(let i= Math.floor(this.size/2)-1 ;i>=0;i--){
            this.heapifyDown(i)
        }
    }
    
    heapifyDown(index){
        let largest = index;
        let leftChild = this.getLeftChildIndex(index)
        let rightChild = this.getRightChildIndex(index)
        if(leftChild < this.size && this.heap[leftChild]>this.heap[largest]){
            largest = leftChild;
        }
        if(rightChild <this.size && this.heap[rightChild]>this.heap[largest]){
            largest = rightChild;
        }
        if(largest !== index){
            this.swap(index,largest)
            this.heapifyDown(largest)
        }
    }
    
    sort(){
        this.buildMaxHeap()
        for(let i= this.size-1;i>0;i--){
            this.swap(0,i)
            this.size--;
            this.heapifyDown(0)
        }
    }
    print(){
        console.log("sorted array :" ,this.heap)
    }
}

const array = [23,56,12,55,87,67,77,98,20]
const heapsort = new heapSort(array)
heapsort.sort()
heapsort.print()


//sort using minheap

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

    
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
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

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return minValue;
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

    
    heapSortDescending(array) {
        for (let value of array) {
            this.insert(value);
        }

        const sortedArray = [];
        while (this.heap.length) {
            sortedArray.unshift(this.remove()); 
        }

        return sortedArray;
    }
}

const minHeap = new MinHeap();
const array = [23, 56, 12, 55, 87, 67, 77, 98, 20];
console.log("Sorted in Descending Order (Min Heap Sort):", minHeap.heapSortDescending(array));
