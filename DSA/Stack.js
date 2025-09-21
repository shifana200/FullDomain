class Stack{
    constructor(){
        this.stack =[]
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.IsEmpty()){
            return 'stack is empty'
        }return this.stack.pop()
    }
    
    isEmpty(){
        return this.stack.length===0
    }
    
    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }return this.stack[this.stack.length-1]
    }
    size(){
        return this.stack.length
    }
    
    print(){
        if(this.stack.length===0){
            return 'stack is empty'
        }else{
            console.log(this.stack.join("->"))
        }
    }
}

const s = new Stack()
s.push(34)
s.push(45)
console.log(s.size())
console.log(s.peek())
s.print()


//reverse the words in a string
var reverseWords = function(s) {
    const splitStr=s.split(" ");
    const stack=[];
    for(let i of splitStr){
        stack.push(i)
    }
    let finalStr="";
    while(stack.length){
       const current =  stack.pop()
       if(current){
        finalStr +=" "+current
       }
    }return finalStr.trim();
};


//valid parenthesis
function isValid(s){
    const stack =[];
    for(let i=0;i<s.length;i++){
        const char = s[i];
        if(char==="(" || char==="{" ||char ==="["){
            stack.push(char);
        }else if(char===")" || char==="}" || char==="]"){
            if(isEmpty(stack)){
                return false;
            }
            const top = stack.pop();
            if((char===")" && top!=="(") ||
            (char==="}" && top!=="{")||
           (char==="]" && top!=="[") ){
               return false;
           }
        }
    }return isEmpty(stack)
}

function isEmpty(stack){
    return stack.length===0
}
const string = "({)}"
console.log(isValid(string))


//reverse a string using stack
function reverse(input){
    let stack = new Stack()
    for(let char of input){
        stack.push(char)
    }
    let reversedString =""
    while(stack.stack.length!==0){
        reversedString +=stack.pop()
    }return reversedString
}

console.log(reverse("123"))


function reverseQueue(queue) {
    let stack = [];

    // Dequeue all elements and push them onto the stack
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    // Pop all elements from the stack and enqueue back to the queue
    while (stack.length !== 0) {
        queue.enqueue(stack.pop());
    }
}