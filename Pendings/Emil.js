//1. In an object there are duplicate values — delete those keys

let obj ={a:1,b:2,c:3,d:2,e:1,f:4,g:8,h:9,i:1}

let seen = new Set();
for(let key in obj){
    if(seen.has(obj[key])){
        delete obj[key]
    }else{
        seen.add(obj[key])
    }
}

console.log(obj)


// From an array delete duplicate odd numbers with O(n)

let arr = [1,3,5,2,3,1,4,5,7,2];
let seenOdd= new Set();

let result = arr.filter(num=>{
    if(num%2!==0){
        if(seenOdd.has(num)) return false;
        seenOdd.add(num)
    }
    return true;
})
console.log(result)


//Check if a file exists

const fs = require('fs');

let filePath = './text.txt';
if(fs.existsSync(filePath)){
    console.log('file exists')
}else{
    console.log('file doesnt exist')
}

//Block POST request from a specific domain

app.use((req,res,next)=>{
    if(req.method==="POST" && req.headers.origin ==="http://blocked.com"){
     return res.status(403).send('forbidden')   
    }
    next()
})

//Status code for DELETE

//200 — Successfully deleted and returning response.
//204 — Successfully deleted and no content in response.

// Fibonacci series — Iteration + Recursion

//using iteration
function fib(n){
    let arr=[0,1];
    for(let i=2;i<n;i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr;
}

console.log(fib(7))

//using recursion
function fibR(n){
    if(n<2) return n;
    return fibR(n-1) + fibR(n-2)
}

let n=7;
let series =[]
for(let i=0;i<n;i++){
    series.push(fibR(i))
}
console.log(series)

//MongoDB — most occurring hobby

db.people.aggregate([
  { $unwind: "$hobbies" },
  { $group: { _id: "$hobbies", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

//persons with ≥2 hobbies & average age

db.people.aggregate([
    { $match: { hobbies: { $exists: true }, $expr: { $gte: [ { $size: "$hobbies" }, 2 ] } } },
    { $group: { _id: null, averageAge: { $avg: "$age" } } }
  ]);

  
  //polyfills for filter

Array.prototype.myFilter = function (callback){
    let result=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
        
    }return result
}

let arr =[1,2,3,4]
let evens = arr.myFilter(num=>num%2===0);
console.log(evens)

//toggle visibility function using custom hook

import React,{useState} from "react";

function useToggle(initial = false){
  const [state,setState] = useState(initial);
  const toggle =()=>{
    setState(prev =>!prev)
}
    return [state,toggle]
  
}

function App(){
  const [isOn,toggle] = useToggle();

  return (
    <div>
      <p>{isOn? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default App


