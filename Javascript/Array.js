//square all numbers

const nums = [1,2,3,4]
const squared = nums.map(n=>n*n)
console.log(squared)

//--------------------------------------------------------------------------------
// Filter – Keep only even numbers

const num =[1,2,3,4]
const even = num.filter(n=>n%2===0)
console.log(even)

//--------------------------------------------------------------------------------
//Reduce – Sum of all numbers

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc,val)=>acc+val,0)
console.log(sum)


//--------------------------------------------------------------------------------
//4. forEach – Print each element

const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit=>console.log(fruit))


//--------------------------------------------------------------------------------
//Find – First number greater than 10

const nums = [4, 9, 15, 3];
const found = nums.find(n=>n>10)
console.log(found)


//--------------------------------------------------------------------------------
//FindIndex – Index of "banana"

const fruits = ["apple", "banana", "mango"];
const index = fruits.findIndex(f=>f==='banana')
console.log(index)


//--------------------------------------------------------------------------------
//. Some – Check if any element is > 10

const nums = [2, 5, 8, 12];
console.log(nums.some(n=>n>10))


//--------------------------------------------------------------------------------
//Every – Check if all elements are positive

const nums = [1, 2, 3];
console.log(nums.every(n=>n>0))


//--------------------------------------------------------------------------------
//Includes – Check if array contains "cat"

const pets = ["dog", "cat", "rabbit"];
console.log(pets.includes('cat'))


//--------------------------------------------------------------------------------
// Sort – Sort numbers ascending

const nums = [3, 1, 4, 2];
nums.sort((a,b)=>a-b);
console.log(nums)


//--------------------------------------------------------------------------------
// Sort – Sort numbers descending

const nums = [3, 1, 4, 2];
nums.sort((a,b)=>b-a);
console.log(nums)


//--------------------------------------------------------------------------------
// Reverse – Reverse an array

const nums = [1, 2, 3];
nums.reverse()
console.log(nums)


//--------------------------------------------------------------------------------
//Concat – Merge two arrays

const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b)
console.log(merged)


//--------------------------------------------------------------------------------
//Slice – Get part of an array

const letters = ["a", "b", "c", "d"];
console.log(letters.slice(1,3))


//--------------------------------------------------------------------------------
//Splice – Remove and insert

const fruits = ["apple", "banana", "mango"];
fruits.splice(2,1,"orange")
console.log(fruits)


//--------------------------------------------------------------------------------
// Push & Pop – Add and remove from end

const arr =[1,2]
arr.push(3)
arr.pop()
console.log(arr)


//--------------------------------------------------------------------------------
//Unshift & Shift – Add and remove from start

const arr =[2,3]
arr.unshift(1)
arr.shift()
console.log(arr)


//--------------------------------------------------------------------------------
//Flat – Flatten nested array

const arr =[1,[2,[3,4,[5,6,[7]]]]]
console.log(arr.flat(4))


//--------------------------------------------------------------------------------
// Join – Convert array to string

const letters = ["a", "b", "c"];
console.log(letters.join('-'))


//--------------------------------------------------------------------------------
//From – Create array from string

const str ='hello'
const arr = Array.from(str)
console.log(arr)


//--------------------------------------------------------------------------------
//isArray – Check if it's an array

console.log(Array.isArray([1,2,3])) //true
console.log(Array.isArray('hello')) //false


//--------------------------------------------------------------------------------
//remove even duplicates from an array

function removeEvenDuplicates(arr){
    let result=[]
    let seenEven = new Set()
    
    for(let num of arr){
        if(num%2===0){
            if(!seenEven.has(num)){
                result.push(num)
                seenEven.add(num)
            }
        }else{result.push(num)}
    }return result
}

const arr =[23,89,90,66,45,67,90,22,4,22,8,97,90]
console.log(removeEvenDuplicates(arr))


//--------------------------------------------------------------------------------
//remove odd duplicates from an array

function removeOddDuplicates(arr){
    let result=[]
    let seenEven = new Set()
    
    for(let num of arr){
        if(num%2!==0){
            if(!seenEven.has(num)){
                result.push(num)
                seenEven.add(num)
            }
        }else{result.push(num)}
    }return result
}

const arr =[23,89,90,89,45,67,90,23,45,22,8,97]
console.log(removeOddDuplicates(arr))


//--------------------------------------------------------------------------------
//remove an element in the array without built in functions

function removeAtIndex(arr,removeIndex){
    let result =[]
    for(let i=0;i<arr.length;i++){
        if(i!==removeIndex){
            result.push(arr[i])
        }
    }return result
}
console.log(removeAtIndex([89,87,76,66,54,34,21,11],4))



//--------------------------------------------------------------------------------
//swap elements adjacent wise

const arr=[1,2,3,4,5,6,7]
function swap(arr){
    let result =[...arr]
    
    for(let i=0;i<result.length-1;i+=2){
        let temp = result[i];
        result[i]=result[i+1];
        result[i+1]=temp;
    }
    return result
}
let swapped = swap(arr)
console.log(swapped)

//--------------------------------------------------------------------------------
//find the sum of even numbers and avg of odd numbers

const arr =[21,22,25,30,36,45,54]

function calculate(arr){
    let sum=0;
    let sumOdd=0;
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            sum +=arr[i]
        }else{
            sumOdd +=arr[i]
            count++;
        }
    } let avg = sumOdd/count
   return {
       evenSum:sum,oddavg:avg
   }
}
const result =calculate(arr)
console.log("sum of even numbers",result.evenSum)
console.log("average of odd numbers",result.oddavg)

//--------------------------------------------------------------------------------
//Find Non-Repeating Elements from an Array
function nonrepeat(arr){
    let freq={};
    
    for(let num of arr){
        freq[num]=(freq[num] || 0)+1;
    }
    
    return arr.filter(num=>freq[num]===1);
}
const arr=[1,22,3,55,1,65,23,22,78,55]
console.log(nonrepeat(arr))

//--------------------------------------------------------------------------------
//find elements in array which occur exactly 3 times

function threeOccur(arr){
    let freq={};
    for(let num of arr){
        freq[num]=(freq[num] ||0)+1;
    }
    return Object.keys(freq).filter(key=>freq[key]===3).map(Number)
}

console.log(threeOccur([1,1,1,3,3,3,78,90,90,45,90,90]))

//--------------------------------------------------------------------------------
//Reverse an Array Using Recursion

const arr1=[2,3,4,5,6]

function reverse(arr){
    if(arr.length<=1)return arr;
    return [arr[arr.length-1]].concat(reverse(arr.slice(0,-1)))
}

console.log(reverse(arr1))

//--------------------------------------------------------------------------------
//finding elements which only occur once 
function findNonRepeating(arr){
    return arr.filter((item)=>arr.indexOf(item)===arr.lastIndexOf(item))
}
console.log(findNonRepeating([4,5,4,6,7,5,8]))

//--------------------------------------------------------------------------------
//Remove duplicates but keep the last occurrence

const arr=[1,2,3,2,1,4]

function removeDuplicates(arr){
const seen = new Set();
let result=[];

for(let i=arr.length-1;i>=0;i--){
    if(!seen.has(arr[i])){
        seen.add(arr[i]);
        result.unshift(arr[i])
    }
}return result;
}

console.log(removeDuplicates(arr))

//--------------------------------------------------------------------------------
// Convert string to alternating capital case

function alternativeCase(str){
    let result="";
    
    for(let i=0;i<str.length;i++){
        result += i%2===0 ? str[i].toUpperCase() : str[i].toLowerCase()
    }
    return result;
}

console.log(alternativeCase("software devoleper"))

//--------------------------------------------------------------------------------
//flatten an array without flat method
const input =  [1, [2, [3, [4]], 5]];

function flattenArray(arr){
    let result=[];
    
    for(let num of arr){
        if(Array.isArray(num)){
            result = result.concat(flattenArray(num));
        }else{
            result.push(num)
        }
    }return result
}
console.log(flattenArray(input))

//--------------------------------------------------------------------------------
//find the second largest element using reduce method

const arr =[12,34,23,56,78,21,90,56,89];

const {first,second} = arr.reduce((acc,num)=>{
    if(num> acc.first){
        acc.second = acc.first;
        acc.first=num;
    }else if (acc.second < num &&  num !==acc.first){
        acc.second = num;
    }
    return acc;
},{first: -Infinity,second : -Infinity})

console.log("first largest : ",first)
console.log("second largest :" ,second)


//find secomd largest using sort method
const arr =[10,5,20,8,25];

const uniqueArr = [...new Set(arr)];
uniqueArr.sort((a,b)=>b-a);

if(uniqueArr.length>=2){
    console.log('second largest element is :' ,uniqueArr[1]);
}else {
    console.log("no second largest element found")
}

//find second largest using forEach

const arr =[10,5,20,8,25];

let first = -Infinity;
let second =-Infinity;

arr.forEach(num=>{
    if(num>first){
        second = first;
        first= num;
    }else if (num > second && num !==first){
        second = num;
    }
})
console.log("second largest element is :" , second)


//--------------------------------------------------------------------------------
//find even duplicates from an array

const arr=[2, 3, 4, 2, 6, 6, 7, 8, 4, 9];

const result = arr.filter((val,index,num)=>{
    return val%2===0 && num.indexOf(val) !==num.lastIndexOf(val)
});

const final = [...new Set(result)]
console.log(final)

//using map frequency
 const freq = arr.reduce((acc,num)=>{
     acc[num] = (acc[num] || 0)+1;
     return acc;
 },{})
 
 const result = Object.keys(freq).filter(num=> freq[num] >1 && num%2===0).map(Number)
 console.log(result)
 
//--------------------------------------------------------------------------------
//find the frequency of one and zero wihtout any in built methods or if conditions


let arr=[0,1,0,1,1,0,1,1];
let freq={};
 for(let key of arr){
     freq[key]=(freq[key] || 0)+1;
 }
 console.log(freq)


//----------------------------------------------------------------------------------
//remove even duplicates
const num =[2, 3, 4, 2, 6, 4, 5, 6, 7, 8, 8];

function removeEvenDuplicates(arr){
    let seenEven=new Set();
    let result=[];
    
    for(let num of arr){
        if(num%2===0){
            if(!seenEven.has(num)){
                seenEven.add(num);
                result.push(num);
            }
        }else{
            result.push(num)
        }
    }return result
}

console.log(removeEvenDuplicates(num))

//---------------------------------------------------
//print the date after 15 days from now

const today = new Date()
const after15 = new Date()

after15.setDate(today.getDate()+15)

console.log("after 15 days :" ,after15.toDateString())

//-----------------------------------------------------------------------
//find the sum of even numbers using reduce
const arr =[1,2,3,4,5,6,7,8,9,10];
const sum=arr.reduce((acc,num)=>{if(num%2===0){return acc+num}
    return acc
},0);
console.log(sum)


//-----------------------------------------------------------------------
//give all the possible ways in which elements can be printed
const arr=['car','cat','map','pan'];

for(let i=arr.length-1;i>=0;i--){
let j = Math.floor(Math.random()*(i+1));
[arr[i],arr[j]]=[arr[j],arr[i]];
}

console.log(arr)

//----------------------------------------------------------------
//filer the multiples of five and duplicates in an array
const arr = [12,22,12,34,54,23,78,90,78,90,67,56,5,75,67,75,90]

const result= [...arr.filter((value,index)=> arr.indexOf(value)!==arr.lastIndexOf(value)),
...arr.filter(num=>num%5===0)]

console.log(result)

//----------------------------------------------------------------
//check if a array is palindrome or not

//METHOD-1

const arr =[1,2,3,2,1]
function isPalindrome(arr){
    let result=[];
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==result[i]){return false}
    }
    return true;
}
console.log(isPalindrome(arr))

//METHOD-2

const num = [1,2,3,2,1];
function isPalindrome(arr){
    return arr.every((val,i)=> val===arr[arr.length-1-i])
}

console.log(isPalindrome(num))

//METHOD-3

const num = [1,2,3,2,1]
function isPalindrome(arr){
    return JSON.stringify(arr) === JSON.stringify([...arr].reverse())
}
console.log(isPalindrome(num))

//----------------------------------------------------------------------------
//remove the occurence of multiples of five and then sort the array in ascending order

const num =[11,92,13,24,55,65,97,18]

let k=0;
for(let i=0;i<num.length;i++){
    if(num[i]%5!==0){
        num[k]=num[i];
        k++
    }
}

for(let i=0;i<k;i++){
    for(let j=0;j<k-i-1;j++){
        if(num[j]>num[j+1]){
            [num[j],num[j+1]]=[num[j+1],num[j]]
        }
    }
}

console.log(num.slice(0,k))


























































































































