//create two dropdown for selecting country and selecting city

import React,{useState} from "react";

const data = {
  India:["delhi","Mumbai","Chennai"],
  USA: ["New York", "Los Angeles", "Chicago"],
  UK: ["London", "Manchester", "Liverpool"]}

  function CountryCitySelector(){

    const[selectedCountry,setSelectedCountry] = useState('');
    const [selectedCity,setSelectedCity] = useState('');

    const handleCountryChange =(e)=>{
      setSelectedCountry(e.target.value);
      setSelectedCity('')
    }

    return (

      <div>
        <h2>Selected country and city</h2>

        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">select country</option>
          {Object.keys(data).map((country)=>(
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select value={selectedCity} onChange={(e)=>setSelectedCity(e.target.value)}
          disabled={!selectedCountry}>
          <option value="">select city</option>
          {selectedCountry && data[selectedCountry].map((city)=>(
            <option  key={city} value={city}>{city}</option>
          ))}
        </select>

        <h3>
          selected : {selectedCountry || "none"} - {selectedCity || "none"}
        </h3>
      </div>
    )
  }

  export default CountryCitySelector

//---------------------------------------------------
//example for lazy loading

import React,{Suspense,lazy} from "react";

const lazyComponent = lazy(()=>import('./mybigComponent'));

function App(){
    return (
        <div>
            <h1>lazy component</h1>
            <Suspense fallback={<p>loading component....</p>}>
                <lazyComponent/>
            </Suspense>
        </div>
    )
}

export default App;

//find height of bst 

function height(root){
    if(!root) return 0;
    return 1 + Math.max(height(root.left),height(root.right))
}

//BFS and DFS in graph

//convert arr to bst 
function sortedArrToBST(nums){
    if(!nums.length) return null;
    let mid = Math.floor(nums.length/2);
    let root = {val:nums[mid]}
    
    root.left = sortedArrToBST(nums.slice(0,mid));
    root.right = sortedArrToBST(nums.slice(mid+1));
    return root
}
const nums=[-10,-3,0,5,9]
console.log(sortedArrToBST(nums))

//--------------------------------------------------
//create a perfect binart tree

class Node{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

function createPerfectTree(depth,value=1){
    if(depth===0) return null;
    let root = new Node(value);
    root.left = createPerfectTree(depth-1,value*2);
    root.right =createPerfectTree(depth-1,value*2+1);
    return root;
}

let tree = createPerfectTree(3);
console.log(JSON.stringify(tree,null,2))

//------------------------------------------------------------------
//flatten a nested object

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result); // go inside nested object
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const obj ={name:"shifana",
    age:21,
    address:{
        city:"kochi",
        location:{
            lat:9.87,
            lng:89.9
        }
    }
}

console.log(flattenObject(obj))

//flatten a nested array

function flattenArr(arr){
    let result =[];
    
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArr(item))
        }else{
            result.push(item)
        }
    }
    return result;
}

const arr=[1,2,[3,4,[5,6],7]]
console.log(flattenArr(arr))


//----------------------------------------------------
//deep clone without structered clone

function deepClone(obj){
  if(obj===null || typeof obj !=='object') return obj;
  if(Array.isArray(obj)) return obj.map(deepClone);
  
  const clone={};
  for(let key in obj){
      clone[key]= deepClone(obj[key])
  }
  return clone;
}
const original ={a:{b:1,c:2},d:8,e:9}
const copy = deepClone(original);
console.log(copy)

