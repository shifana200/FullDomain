class Node{
    constructor(data){
        this.data = data;
        this.prev= null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    add(data){
        const newNode = new Node(data);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    
    print(){
        let current =this.head;
        let result = "";
        while(current){
            result +=current.data + '<->';
            current = current.next;
        }
        console.log(result + 'null')
    }
}
const list = new DoublyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print()








