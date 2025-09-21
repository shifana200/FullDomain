//✅ Type Coercion

console.log(1 + '1') //=> '11'
console.log('A' - 1) //=> NaN
console.log(1 + +'1') // =>2
console.log(null == undefined) //=>true
console.log({} == {}) //=>false
console.log("" == "") //=>true
console.log("a" + 1) //=> 'a1'

//--------------------------------------------------------------------------------
//Map – Store key-value pairs (any type as key)

const map = new Map()
map.set('name','shifana')
map.set('age',21)
map.set(21,'tewntyOne')
map.set(true,'yes')

console.log(map)
console.log(map.get('name')) //shifana
console.log(map.has('age')) //true
console.log(map.size) //4

//--------------------------------------------------------------------------------
//Set – Store unique values

const set = new Set();
set.add("apple");
set.add("banana");
set.add("apple"); // Duplicate, ignored

console.log(set);            // Set(2) { 'apple', 'banana' }
console.log(set.has("apple"));// true
console.log(set.size)

//--------------------------------------------------------------------------------
//Object.freeze() – Make object immutable

const person = {name:"shifana" ,age:21}
Object.freeze(person)

person.age=25;
console.log(person.age)

//--------------------------------------------------------------------------------
//Object.seal() – Prevent new props, allow edits

const user = {name:"shifana",age:21}
Object.seal(user)

user.age=22; //allowed
user.city="kochi" //ignored
delete user.name; //not allowed
console.log(user)

//--------------------------------------------------------------------------------
//Object.is() – Like === but better at handling edge cases

console.log(Object.is(NaN, NaN));     // ✅ true (=== gives false)
console.log(Object.is(0, -0));        // ❌ false (=== gives true)
console.log(Object.is(25, 25));         //true
console.log(Object.is([],[]))         // false
console.log(Object.is({},{}))         // false
console.log(Object.is("",""))         // true

//--------------------------------------------------------------------------------
//Shallow Copy – Only top level copied

const original = {name:"shifana",info:{city : "kochi"}}

const shallow = {...original}

shallow.info.city = "calicut"
console.log(original.info.city) // ❌ Calicut (changed in original too)

//--------------------------------------------------------------------------------
//Deep Copy – Full independent clone

const original = {name:"shifana",info:{city : "kochi"}}

const deep = JSON.parse(JSON.stringify(original));

deep.info.city = "calicut"
console.log(original.info.city) // ✅ Kochi (original unchanged)

//--------------------------------------------------------------------------------
//callback hell,rest , spread operator, 
//filter even ,odd,prime number,positive ,negative
//move all zeros to end /front
//remove duplicates
//print only uniques in array
//find kth largest and kth smallest
//largest/smallest - odd/even/prime element

//promise

const promise = new Promise((resolve,reject)=>{
    const isReady= true;
    if(isReady){
        resolve("task completed")
    }else{
        reject("task failed")
    }
})

promise.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})


//promise.all() - Waits for all promises to resolve. Fails fast if any promise is rejected.

const p1 = Promise.resolve("p1 done")
const p2 =Promise.resolve("p2 done")


Promise.all([p1,p2])
.then((values)=>{
    console.log(values)
})


//Promise.allSettled() -Waits for all promises, regardless of resolve or reject.

const p1 = Promise.resolve("success")
const p2 = Promise.reject("fail")

Promise.allSettled([p1,p2])
.then((results)=>{
    console.log(results)
})

// Promise.race() - Returns the result of the first promise that settles (resolve or reject).

const p1 = new Promise((res)=>setTimeout(()=>res("p1 won"),1000))
const p2 = new Promise((res)=>setTimeout(()=>res("p2 won"),500))

Promise.race([p1,p2])
.then((result)=>{
    console.log(result)
})

//Promise.any() - Returns the first fulfilled promise. Ignores rejections unless all fail.

const p1 = Promise.reject("error")
const p2 = Promise.resolve('success')

Promise.any([p1,p2])
.then((res)=>{
    console.log(res)
})

//--------------------------------------------------------------------------------
//generator function

function* numbergenerater(){
    yield 1;
    yield 2;
    yield 3;
}
const gf = numbergenerater()

console.log(gf.next())
console.log(gf.next())
console.log(gf.next())
console.log(gf.next())

//example 2 

function* wordGenerator(){
    yield "HI";
    yield "Hello";
    yield "How";
}
for(let word of wordGenerator()){
    console.log(word)
}

//print 1 to 10 numbers using generator function
function* countNum(){
    for(let i=1;i<=10;i++){
        yield i;
    }
}

for(let num of countNum()){
    console.log(num)
}

//print even numbers between 1 to 20 

function * evenNumbers(){
    for(let i=1;i<=20;i++){
        if(i%2===0){
            yield i;
        }
    }
}
for(let even of evenNumbers()){
    console.log(even)
}

//--------------------------------------------------------------------------------
//factory function

function createPerson(name,age){
    return {
        name:name,
        age:age,
        greet(){
            console.log(`hi,im ${this.name} and im ${this.age} years old`)
        }
    }
}

const person1 = createPerson("shifana",21)
const person2 = createPerson("roshan",25)
person1.greet()
person2.greet()

//--------------------------------------------------------------------------------
//currying
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

const result = add(2)(3)(4)
console.log(result)

//currying arrow function version
const add= a=>b=>c=>a+b+c
console.log(add(2)(3)(4))

//--------------------------------------------------------------------------------
//call,apply,bind

const person ={
    firstName:"shifana",
    lastName:"saleem"
}

function greet(greeting,punctuation){
    console.log(`${greeting},${this.firstName} ${this.lastName} ${punctuation}`)
}

greet.call(person,"hello","!")  //call
greet.apply(person,["hi","."])  //apply

//bind
const greetShifana = greet.bind(person,"hey","!!")
greetShifana()

//--------------------------------------------------------------------------------
//higher order function

function greet(name){
    return `hello,${name}`
}
function User(name,callback){
    const message = callback(name)
    console.log(message)
}

User("shifana",greet);

//--------------------------------------------------------------------------------
//IIFE

(function(){
    console.log("this is an iife")
})()

//--------------------------------------------------------------------------------
//setTimeout

setTimeout(()=>{
    console.log("this is run after 2 sec")
},2000)

//setInterval

const intervalId = setInterval(()=>{
    console.log("this runs after every 1 second")
},1000)

//clearInterval

let count=0;

const id = setInterval(()=>{
    count++;
    console.log(`count :${count}`)
    
    if(count===5){
        clearInterval(id)
        console.log("interval stopped")
    }
},1000)

//process.nextTick()

console.log("start")

process.nextTick(()=>{
    console.log("this runs before settimeout")
})

setTimeout(()=>{
    console.log("this runs after nextTick")
},0)

console.log("end")

//--------------------------------------------------------------------------------
//closure

function outer(){
    let name = "shifana"
    
    function inner(){
        console.log("hello  " + name)
    }
    return inner;
}

const greet = outer()
greet()

//async-await

function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('data recieved after 5 seconds')
        },5000)
    })
}

async function fetchData(){
    console.log("fetching data")
    const result = await getData()
    console.log(result)
}

fetchData()

//--------------------------------------------------------------------------------
//Polyfill for Array.prototype.map()

if(!Array.prototype.myMap){
    Array.prototype.myMap = function (callback,thisArg){
        if(typeof callback !=="function"){
            throw new TypeError(callback + "is not a function")
        }
        
        let result =[];
        
        for(let i=0;i<this.length;i++){
            if(this.hasOwnProperty(i)){
                result.push(callback.call(thisArg,this[i],i,this))
            }
        }
        return result;
    }
}

const numbers =[1,2,3,4];
const doubled = numbers.myMap((num)=>num*2);
console.log(doubled)

//--------------------------------------------------------------------------------
//simple example for currying
function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(add(1)(2)(3))


//--------------------------------------------------------------------------------
//Rest Parameter + Reduce → Find Average

function findAvg(...nums){
    if(nums.length ===0) return 0;
    
    const sum = nums.reduce((num,total)=>num+total,0);
    return sum/nums.length;
}

console.log(findAvg(10,20,30));
console.log(findAvg(5,15));
console.log(findAvg()); 

//--------------------------------------------------------------------------------
// Memoization of Factorial

function memoizedFactorial(){
    const cache={};
    
    return function fact(n){
        if(n<0) return undefined;
        if(n===0 || n===1) return 1;
        
        if(cache[n]){
            console.log("fetchig from cache:",n)
            return cache[n];
        }
        
        console.log("calculating : ",n);
        cache[n] = n* fact(n-1);
        return cache[n]
    };
}

const factorial = memoizedFactorial();

console.log(factorial(5))
console.log(factorial(5))

//--------------------------------------------------------------------------------
//IIFE for Sum

(function (a,b){
    const sum = a+b;
    console.log("sum is : ",sum)
})(3,5);

//--------------------------------------------------------------------------------
//Proxy that Blocks Keys Starting with _

const user ={
    _password : "secret123",
    name:"Shifa"
};

const safeUser = new Proxy(user, {
    get(target,prop){
        if(prop.startsWith("_")){
            throw new Error ("Access denied")
        }
        return target[prop];
    }
});

console.log(safeUser.name);
console.log(safeUser._password)

//--------------------------------------------------------------------------------
//Implement throttle Function

function throttle(func,delay){
    let lastCall=0;
    
    return function (...args){
        const now = new Date().getTime();
        
        if(now - lastCall >=delay){
            lastCall = now;
            func.apply(this,args)
        }
    }
}

function logScroll(){
    console.log("scroll event :",new Date().toLocaleString());
}

const throttleScroll = throttle(logScroll,1000);
setInterval(throttleScroll,100)


//--------------------------------------------------------------------------------
//Simulate JavaScript Event Loop (setTimeout + Promises)

console.log("start");

setTimeout(() => {                              //output
  console.log("setTimeout");                      //start
}, 0);                                            //end
                                                  //promise
Promise.resolve().then(() => {                      //setTimeout
  console.log("promise");
});

console.log("end");

//--------------------------------------------------------------

console.log("a");                                       //output
                                       
setTimeout(() => console.log("b"), 0);                   //a
                                                         //d
Promise.resolve().then(() => console.log("c"));          //c
                                                        //b
console.log("d");

//---------------------------------------------------
//functional composition

const add =x=>x+2;
const multiply =x => x*3;
const compose = (f,g)=>x=>f(g(x));
const result = compose(multiply,add)(5);
console.log(result)

//---------------------------------------------------------------
//flatMap() vs flat() vs map()
const arr =[1,2,3];

//using flatMap
const result1= arr.flatMap(n=>[n,n*2]);
console.log(result1)

//using map + flat;
const result2 = arr.map(n=>[n,n*2]).flat();
console.log(result2);

//using nested object and flattening it
const nested = [1,2,[3,4,[5,6],7],8,9];
const result3 = nested.flat(2)
console.log(result3)


//---------------------------------------------------------------
//prototype pollution

const obj ={}
console.log(obj.polluted) //undefined

Object.prototype.polluted = "Im hacked";

console.log(obj.polluted) //im hacked

//-----------------------------------------------------------------
//example for callback
function fetchData(callback){
    console.log('fetching data');
    setTimeout(()=>{
        callback("here is the data")
    },2000)
}

fetchData((data)=>{
    console.log(data)
})

//callback hell

 function do1((result1)=>{
    do2(result1,(result2)=>{
        do3(result2,(result3)=>{
            do4(result3,(result4)=>{
                console.log("all tasks are done",result4)
            })
        })
    })
})


//-----------------------------------------------------------------
//proxy object
const target={name:"Shifana",age:21};

const proxy = new Proxy(target,{
    get:(obj,prop)=>{
        if(prop==='age'){
            return obj[prop]+'years old';
        }return obj[prop];
    },
    
    set:(obj,prop,value)=>{
        if(prop==='age'&& value<0){
            throw new Error('age cannot be negative')
        }
        obj[prop]=value;
        return true;
    }
})

console.log(proxy.name)
console.log(proxy.age)
proxy.age=-7

//-----------------------------------------------------------------

//-----------------------------------------------------------------




























































