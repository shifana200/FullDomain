class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    
    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head=newNode
    }
    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current=current.next
        }current.next = newNode
    }
    
    size(){
        let count =0;
        let current = this.head;
        while(current){
            count++
            current=current.next
        }return count
    }
    
    addAt(index,data){
        if(index<0 || index>this.size){
            console.error("invalid")
            return
        }
        const newNode = new Node(data)
        if(index===0){
            newNode.next = this.head
            this.head=newNode
            return
        }
        let current = this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        newNode.next = current.next
        current.next=newNode
    }
    
    removeTop(){
        if(!this.head){return}
        this.head = this.head.next
    }
    removeLast(){
        if(!this.head){return}
        let current = this.head;
        while(current.next.next){
            current=current.next;
        }current.next = null;
    }
    removeAt(index){
        if(index<0 || index>this.size){
            console.error("invalid")
            return
        }
        if(index===0){
            
            this.head = this.head.next
            return
        }
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }
        if(current.next){
            current.next= current.next.next
        }
    
        
    }

    //finding the middle element
    
    findMiddle(){
        if(!this.head){
            console.log("list is empty")
            return null
        }
        let slow = this.head;
        let fast = this.head;
        
        while(fast && fast.next){
            slow = slow.next
            fast= fast.next.next
        }
        console.log("middle element",slow.data)
        return slow.data;
    }

    //adding and removing middle element 
  addMiddle(data){
      const middleIndex = Math.floor(this.size()/2)
      this.addAt(middleIndex,data)
  }
  
  removeMiddle(data){
      const middleIndex = Math.floor(this.size()/2)
      this.removeAt(middleIndex)
  }

  //reversing linkedlist
  reverse(){
    let prev= null;
    let current = this.head;
    while(current){
        let nextNode = current.next;
        current.next =prev
        prev=current
        current = nextNode
    }
    this.head=prev
}

    
    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    
}

const ll = new LinkedList()
ll.addFirst(78)
ll.addAt(1,45)
ll.addLast(90)
ll.addMiddle(70)
ll.removeMiddle()

ll.print()
ll.findMiddle()





//------------------------------------------------

//adding first element to linked list
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        
    }
    addFirst(data){
        const newNode = new Node(data)
        newNode.next= this.head;
        this.head=newNode;
    }
}
let list = new linkedList();
list.addFirst(10)
list.addFirst(20)

console.log(list.head)


//adding node at a specific position
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedList{
    constructor(){
    this.head=null;
    }
    size(){
        let count =0;
        let current = this.head;
        while(current){
            count++;
            current=current.next;
        }return count;
    }
    addAt(index,data){
        if(index<0 || index > this.size()){
            console.error("Invalid index")
            return;
        }
        const newNode = new Node(data)
        if(index===0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next
        }
        newNode.next=current.next;
        current.next= newNode;
    }
}
let list = new linkedList()
list.addAt(0,90);
 list.addAt(1,89)
 list.addAt(1,129)

console.log(list.head)

//adding two linked list
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(0);
    var current = dummy;
    var carry =0;

    while(l1!=null || l2!=null || carry>0){
        var vall1 = l1? l1.val :0;
        var vall2 = l2? l2.val:0;

        var sum = vall1+vall2+carry;
        carry = Math.floor(sum/10);
        sum%=10;

        current.next= new ListNode(sum)
        current = current.next;

        if(l1)l1=l1.next;
        if(l2)l2=l2.next;
    }return dummy.next;
    
};




class listNode{
    constructor(value){
        this.value=value;
        this.next=null;
        
    }
}
class linkedList{
    constructor(){
        this.head=null;
    }
    addFirst(value){
        const newNode= new listNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    addEnd(value){
        const newNode = new listNode(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current=current.next;
        }
        
        current.next=newNode;
    }
    
    addAt(index,value){
        const newNode = new listNode(value)
        if(index===0){
            newNode.next=this.head;
            this.head = newNode;
            return
        }
        let current = this.head;
        let count=0;
        while(current && count<index-1){
            current = current.next;
            count++;
        }
        if(!current)return;
        newNode.next = current.next;
        current.next=newNode;
    }
    
    removeTop(){
        if(!this.head)return;
            this.head = this.head.next
        
    }
    
    removeEnd(){
        if(!this.head)return;
        if(!this.head.next){
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next=null;
    }
    removeAt(index){
        if(!this.head)return;
        if(index===0){
            this.head=this.head.next;
            return
        }
        let current = this.head;
        let count =0;
        while(current.next && count <index-1){
            current = current.next;
            count++;
        }
        if(!current.next)return;
        current.next = current.next.next;
    }
    
    search(value){
        let current=this.head;
        while(current){
            if(current.value===value)return true;
            current = current.next;
        }return false;
    }
    reverse(){
        let prev=null;
        let current=this.head;
        while(current){
            let nextNode = current.next;
            current.next = prev;
            prev=current;
            current=nextNode;
        }
       return  this.head=prev;
    }

    printList() {
        let current= this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        result += "null";  // Indicate end of list
        console.log(result);
    }
  
}
let list = new linkedList()
list.addFirst(90)
list.addEnd(100)
list.addAt(1,98)
list.removeAt(0)
list.search(100)
console.log(list.head)

list.reverse()

console.log(list.search(100))
console.log(list.head)



// Node class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node
    add(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode; // if list is empty
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next; // move to last node
        }
        current.next = newNode; // attach new node
      }
    }
  
    // Print all values
    print() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.value + " -> ";
        current = current.next;
      }
      console.log(result + "null");
    }
  }
  
  // Usage
  const list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  
  list.print(); // Output: 10 -> 20 -> 30 -> null
  