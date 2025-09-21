
// Rename Field in an Object

const obj ={oldkey :'value'}

obj.newkey = obj.oldkey;
delete obj.oldkey;
console.log(obj.newkey)

// Remove Key Corresponding to the Lowest Value

const scores ={a:19,b:9,c:2,d:66}

const minkey = Object.keys(scores).reduce((a,b)=>scores[a]<scores[b]? a:b)
delete scores[minkey]
console.log(scores)

//Find Key Corresponding to Highest Value

const marks = { math: 78, science: 95, english: 88 };

const maxKey = Object.keys(marks).reduce((a,b)=>marks[a]>marks[b]? a:b)
console.log(maxKey)

//Remove Last Property from Object

const obj ={a:1,b:2,c:3,d:4}

const keys = Object.keys(obj)
delete obj[keys[keys.length-1]]
console.log(obj)

// Remove Object Keys Starting with "l"

const obj = { lemon: 1, apple: 2, lime: 3, banana: 4 };

for(let key in obj){
    if(key.startsWith("l")){
        delete obj[key]
    }
}
console.log(obj)

//Remove Keys with Odd Values

const obj = { a: 2, b: 3, c: 4, d: 5 };

for(let key in obj){
    if(obj[key]%2!==0){
        delete obj[key]
    }
}
console.log(obj)

// Check if an Object is Empty

const obj ={};

const isEmpty = Object.keys(obj).length===0
console.log(isEmpty)

//Create a Deep Copy of an Object 

//structuredClone used here ,can also be done using json.parse(json.stringify)

const original = {
    name: "Shifana",
    info: {
      age: 21,
      location: "Kerala"
    }
  };
  
  const copy = structuredClone(original) //const copy = JSON.parse(JSON.stringify(original));
  copy.info.location ="chennai";
  console.log(original) //no changes for the original values
  console.log(copy)


  //swap the key and value in objects

const obj ={name:"shifana",age:21,place:"nilambur"}

function swap(obj){
    const swapped={}
    
    for(let key in obj){
        let value=obj[key];
        swapped[value]=key;
    }return swapped
}

console.log(swap(obj))

//swap key value for arr of objects
function swapKeyValueArray(arr){
    return arr.map(obj=>{
        const swapped={};
        for(let key in obj){
            swapped[obj[key]]=key
        }
        return swapped;
    });
}

const arr = [
  { name: "Shifana", age: "22" },
  { name: "Amina", age: "24" },
  { name: "Fathima", age: "21" }
];

const swappedArr = swapKeyValueArray(arr);
console.log(swappedArr);

//---------------------------------------------------------------
const person ={name:"shifana",age:21,city:"PPM"}

//add new property
person.country="india"
console.log(person)

//delete a property
delete person.age;
console.log(person)

//Loop through the keys of an object
for(let key in person){
    console.log(key)
}

// Loop through the values of an object
for(let key in person){
    console.log(person[key])
}

// Count the number of keys in an object
console.log(Object.keys(person).length)

// Check if a property exists in an object
console.log("name" in person)

//Convert an object to array of key-value pairs
console.log(Object.entries(person))

//Convert array of key-value pairs to object
const arr=[["name","shifana"],["age",22]]
console.log(Object.fromEntries(arr))

// Find the key with the highest value
const scores={A:45,B:78,C:21};
let maxKey="";
let maxVal= -Infinity;

for(let key in scores){
    if(scores[key] > maxVal){
        maxVal=scores[key];
        maxKey=key;
    }
}
console.log(maxKey)

//----------------------------------------------------------
const person ={name:"shifana",age:21,city:"PPM"}

//add new property
person.country="india"
console.log(person)

//delete a property
delete person.age;
console.log(person)

//Loop through the keys of an object
for(let key in person){
    console.log(key)
}

// Loop through the values of an object
for(let key in person){
    console.log(person[key])
}

// Count the number of keys in an object
console.log(Object.keys(person).length)

// Check if a property exists in an object
console.log("name" in person)

//Convert an object to array of key-value pairs
console.log(Object.entries(person))

//Convert array of key-value pairs to object
const arr=[["name","shifana"],["age",22]]
console.log(Object.fromEntries(arr))

// Find the key with the highest value
const scores={A:45,B:78,C:21};
let maxKey="";
let maxVal= -Infinity;

for(let key in scores){
    if(scores[key] > maxVal){
        maxVal=scores[key];
        maxKey=key;
    }
}
console.log(maxKey)


//------------------------------------------------------------
//object.freeze 

const obj = {
    name: "Shifana",
    address: {
      city: "Malappuram"
    }
  };
  
  Object.freeze(obj);
  obj.address.city = "Kozhikode";
  console.log(obj.address.city); // ?

  //output will be kozhikode - because the property here trying to  access is in inner level,so it doesnt effect

  //--------------------------------------------------------------------------
  //Delete keys from an object if their value is undefined or false.

 const obj ={a:1,b:null,c:3,d:4,e:undefined,f:false,g:9}

 function trueObject(obj){
     for(let key in obj){
         if(obj[key]=== null || obj[key]=== undefined ||obj[key] === false){
             delete obj[key];
         }
     }return obj
 }
  console.log(trueObject(obj))
 
  //--------------------------------------------------------------------------
 // Remove keys from an object where the value is an empty string ("")
 
 const obj ={
   name: "John",
   age: "",
   city: "Mumbai",
   profession: "",
   country: "India"
 }
 
 function findEmptystring(obj){
     for(let key in obj){
         if(obj[key].length===0){
             delete obj[key];
         }
     }return obj;
 }
 
 console.log(findEmptystring(obj))
 
 
 //--------------------------------------------------------------------------
// to check if two objects are equal or not

const obj1={location:"nilambur" ,name:"shifana",age:21}
const obj2={name:"shifana",age:21,location:"nilambur"}

function isEqual(obj1,obj2){
    const keys1= Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if(keys1.length !== keys2.length) return false;
    
    for(let key of keys1){
       if( obj1[key]!==obj2[key]) return false
    }
    
    return true;
}

console.log(isEqual(obj1,obj2));


 //--------------------------------------------------------------------------
 // multiple keys in an object have the same value, remove all but the first occurrence.

const obj ={a:1,b:6,c:3,d:1,e:9,f:9,g:6,h:4}

function removeDuplicates(obj){
    const seenValues = new Set();
    const result={};
    
    for(let key in obj){
        if(!seenValues.has(obj[key])){
            seenValues.add(obj[key]);
            result[key]=obj[key];
        }
    }return result;
}

console.log(removeDuplicates(obj))

 //--------------------------------------------------------------------------
 //delete the last key value pair in obj

const obj ={a:1,b:2,c:3,d:4}

function deletePair(obj){
    const keys = Object.keys(obj);
    if(keys.length===0) return obj;
    
    const lastKey = keys[keys.length-1];
    delete obj[lastKey];
    return obj
}

console.log(deletePair(obj))

 //--------------------------------------------------------------------------
 //how to freeze nested objects

function deepFreeze(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            const value = obj[key];
            
            if(value && typeof value === "object"){
                deepFreeze(value);
            }
        }
    }
    return Object.freeze(obj)
}

const user ={
    name:"shifana",
    details:{
        age:23,
        location:{
            city:"calicut",pincode:789676
        }
    }
}

deepFreeze(user);
user.details.location.city="malappuram"
console.log(user)

 //--------------------------------------------------------------------------
 //--------------------------------------------------------------------------
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 






































