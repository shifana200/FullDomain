class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return 'empty'
        }return this.items.shift()
    }
    
    isEmpty(){
        return this.items.length===0
    }
    
    size(){
        return this.items.length;
    }
    
    peek(){
        if(this.isEmpty()){
            return 'empty'
        }return this.items[0]
    }
    print(){
        if(this.isEmpty()){
            return 'empty'
        }else{
            console.log(this.items.join("->"))
        }
    }
    
}
const q = new Queue()
q.enqueue(89)
q.enqueue(21)
q.enqueue(45)

console.log(q.size())
console.log(q.peek())
q.print()



//circular Queue
class circularQueue{
    constructor(size = 10){
        this.queue=[]
        this.size=size;
    }
    enqueue(element){
        if(this.size===this.queue.length)return false;
        this.queue.push(element)
        return true
        
    }
    
    dequeue(){
        if(this.queue.length===0)return -1;
        return this.queue.shift();
    }
    
    peek(){
        if(this.queue.length===0)return -1;
        return this.queue[0]
    }
    
    rear(){
        if(this.queue.length===0)return -1;
        return this.queue[this.queue.length-1]
    }
    
    isEmpty(){
        return this.queue.length===0
    }
    size(){
        return this.queue.length;
    }
    print(){
        console.log(this.queue.join("->"))
    }
}

const myQ= new circularQueue(10)
myQ.enqueue(89)
myQ.enqueue(67)


console.log(myQ.peek())
console.log(myQ.rear())
myQ.print()
