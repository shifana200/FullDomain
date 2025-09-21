//multiply array elements
function multiply(arr){
    if(arr.length<=0){
        return 1;
    }else{
        return arr[arr.length-1]*multiply(arr.slice(0,arr.length-1));
    }
}

console.log(multiply([1,2,3,4]))


//-----------------------------------------------------------------------------
//factorial of a number
function factorial(n){
    if(n===0){return 1;
        
    }else{
        return n* factorial(n-1)
    }
}
console.log(factorial(5))

//-----------------------------------------------------------------------------
//create array in given range 
function rangeOfNumbers(startNum,endNum){
    if(endNum<startNum){
        return [];
    }else{
        const numbers = rangeOfNumbers(startNum ,endNum-1)
        numbers.push(endNum);
        return numbers
    }
}
console.log(rangeOfNumbers(1,9))

//-----------------------------------------------------------------------------
//number is palindrome or not
function isPalindrome(num,str=num.toString()){
    if(str.length<=1){
        return true;
    }
    if(str[0]!==str[str.length-1]){
        return false;
    }
    return isPalindrome(num,str.slice(1,-1))
    
    
}
console.log(isPalindrome(1221))

//-----------------------------------------------------------------------------
//check if a string is palindrome or not
function isPalindrome(str,start=0,end=str.length-1){
    if(start>end)return true;
    if(str[start]!==str[end])return false;
    return isPalindrome(str,start+1,end-1)
}

console.log(isPalindrome('madam'))

//-----------------------------------------------------------------------------
//create fibonacci series

//with for loops

function fib(n){
    let arr=[0,1];
    for(let i=2;i<n;i++){
        arr.push(arr[i-2]+arr[i-1]);
    }return arr;
}
console.log(fib(5))

//with recursion
function fib(n){
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-2);
}
console.log(fib(15))

//-----------------------------------------------------------------------------
//reverse a string

function reverseString(str){
    if(str===""){
        return "";
    }else{
        return reverseString(str.substr(1))+str.charAt(0);
    }
}
console.log(reverseString("hello"))

//-----------------------------------------------------------------------------
//subset 
function subset(nums){
    let result=[];
    let temp=[];
    
    function recursive(nums,i){
        if(i===nums.length){
            return result.push([...temp])
        }
        temp.push(nums[i]);
        recursive(nums,i+1);
        temp.pop();
        recursive(nums,i+1);
    }
    recursive(nums,0)
    return result;
}
console.log(subset([1,2,3]))

//-----------------------------------------------------------------------------
//print numbers from 1 to n
function printNumbers(n,i=1){
    if(i>n)return;
    console.log(i);
    printNumbers(n,i+1)
}

printNumbers(10)

//--------------------------------------------------------------------------------
//Print numbers from N to 1
function printNumbers(n){
    if(n<1)return;
    console.log(n);
    printNumbers(n-1)
}

printNumbers(10)

//--------------------------------------------------------------------------------
// Find factorial of a number
function  factorial(n){
    if(n===0)return 1;
    return n* factorial(n-1)
}

console.log(factorial(5))

//-------------------------------------------------------------------------------------
//Sum of first N natural numbers

function naturalNumberSum(n){
    if(n===0)return 0;
    return n+naturalNumberSum(n-1)
}

console.log(naturalNumberSum(10))

//-----------------------------------------------------------------------------
//Count number of digits in a number
function countDigit(n){
    if(n===0)return 0;
    return 1+countDigit(Math.floor(n/10))
}

console.log(countDigit(1234590))

//-----------------------------------------------------------------------------
//Find power of number (a^b)
function power(a,b){
    if(b===0)return 1;
    return a*power(a,b-1)
}

console.log(power(2,4))

//-----------------------------------------------------------------------------
//Sum of digits of a number
function sumOfDigits(n){
    if(n===0)return 0;
    return (n%10)+sumOfDigits(Math.floor(n/10))
}

console.log(sumOfDigits(54321))

//-------------------------------------------------------------------------------
//GCD (Greatest Common Divisor) using Recursion

function gcd(a,b){
    if(b===0) return a;
    return gcd(b,a%b)
}

console.log(gcd(48,18))

//-------------------------------------------------------------------------------
//Linear Search using Recursion
function linearSearch(arr,target,index=0){
    if(index>=arr.length) return -1;
    if(arr[index]===target) return index;
    return linearSearch(arr,target,index+1)
}
const arr=[78,23,5,1,3,77,90]
console.log(linearSearch(arr,90))

//-------------------------------------------------------------------------------
//Check if Array is Sorted (recursively)

function isSorted(arr,index=0){
    if(index===arr.length-1) return true;
    if(arr[index]>arr[index+1]) return false;
    return isSorted(arr,index+1)
}

console.log(isSorted([2,3,4,5,8,9,10]))

//-------------------------------------------------------------------------------
// Find Minimum in Array using Recursion
function findMin(arr,i=0){
    if(i===arr.length-1) return arr[i];
    return Math.min(arr[i],findMin(arr,i+1))
}

console.log(findMin([45,7,21,44,9,1,5,89]))

//-------------------------------------------------------------------------------
//Find Maximum in Array using Recursion
function findMax(arr,i=0){
    if(i===arr.length-1)return arr[i];
    return Math.max(arr[i],findMax(arr,i+1))
}

console.log(findMax([23,45,12,33,90,345,2,1,5]))
   
//-------------------------------------------------------------------------------
//Product of All Array Elements
function productArr(arr,i=0){
    if(i===arr.length)return 1;
    return arr[i]* productArr(arr,i+1)
}

console.log(productArr([1,2,3]))

//-------------------------------------------------------------------------------
//Count Number of Zeros in a Number

function countZero(n){
    if(n===0)return 0;
    let isZero=n%10===0?1:0;
    return isZero+ countZero(Math.floor(n/10))
}

console.log(countZero(34090))

//-------------------------------------------------------------------------------
// Convert Decimal to Binary using Recursion
function decimalToBinary(n){
    if(n===0)return "";
    return decimalToBinary(Math.floor(n/2)) + (n%2)
}

console.log(decimalToBinary(13))

//-------------------------------------------------------------------------------
//Find First Index of a Number in Array
function firstIndex(arr,target,index=0){
    if(index===arr.length)return -1;
    if(arr[index]===target) return index;
    return firstIndex(arr,target,index+1)
}
console.log(firstIndex([23,4,55,67],67))

//-------------------------------------------------------------------------------

// Recursive Code to Print All Permutations

function generatePermutations(arr,index=0){
    if(index===arr.length){
        console.log([...arr])
        return;
    }
    
    for(let i = index;i<arr.length;i++){
        [arr[index],arr[i]]=[arr[i],arr[index]];
        
        generatePermutations(arr,index+1);
        
        [arr[index],arr[i]] = [arr[i],arr[index]];
    }
}

generatePermutations([1,2,3])

//-------------------------------------------------------------------------------
// Remove consecutive duplicates in a string
function removeDuplicates(str,i=0,result=""){
    if(i===str.length) return result;
    
    if(i===0 || str[i]!==str[i-1]){
        result +=str[i]
    }
    return removeDuplicates(str,i+1,result)
}

console.log(removeDuplicates("aaabbcdddeffssahhi"))

//-------------------------------------------------------------------------------
// Count number of ways to reach a target sum using dice
function countDice(target){
    if(target===0) return 1;
    if(target <0)return 0;
    
     let count=0;
     for(let i=1;i<=6;i++){
         count+=countDice(target-i)
     }
     return count
}

console.log(countDice(3))

//-------------------------------------------------------------------------------
//Generate all anagrams of a word
function generateAnagram(str,index=0){
    const arr = str.split("");
    
    function helper(i){
        if(i===arr.length){
            console.log(arr.join(""));
            return;
        }
        
        for(let j=i;j<arr.length;j++){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            helper(i+1);
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    helper(index)
}

generateAnagram("abc")

//-------------------------------------------------------------------------------
//fibonacci series without recursion
function fibonacciSeries(count){
    let a=0;b=1;
    for(let i=0;i<count;i++){
        console.log(a);
        [a,b]=[b,a+b]
    }
}

fibonacciSeries(15)

//fibonacci series with recursion
function fibonacciRecursive(n){
    if(n<=1) return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function printFibonacci(count){
    for(let i=0;i<count;i++){
        console.log(fibonacciRecursive(i))
    }
}

printFibonacci(10)

//-------------------------------------------------------------------------
//count the no of digits in the given number
const num= 12465
function findCount(num){
    let count=0;
   if(num===0)return 1;
   while(num>0){
       num= Math.floor(num/10)
       count++
   }
   return count;
}

console.log(findCount(num))

//fibonacci with recursion in efficient way
function fib(n,a,b){
    if(n===0)return;
    console.log(a)
    fib(n-1,b,a+b)
}

fib(10,1,1)

//-------------------------------------------------------------------------
//access all the files inside this
const fileSystem = {
    name: 'root',
    files: ['file1.txt', 'file2.txt'],
    folders: [
      {
        name: 'docs',
        files: ['doc1.pdf', 'doc2.pdf'],
        folders: [
          {
            name: 'personal',
            files: ['resume.docx'],
            folders: [],
          },
        ],
      },
      {
        name: 'images',
        files: ['photo1.jpg', 'photo2.jpg'],
        folders: [],
      },
    ],
  };
  
  // Recursive function
  function getAllFiles(folder){
      let result=[];
      
      if(folder.files){
          result.push(...folder.files)
      }
      if(folder.folders){
          for(let subfolder of folder.folders){
              result.push(...getAllFiles(subfolder))
          }
      }
      return result;
  }
  
  // Usage
  const allFiles = getAllFiles(fileSystem);
  console.log(allFiles);

  //----------------------------------------------------------------------
  //access all the categories inside this and push to an arrray

  const categories = {
    name: "Electronics",
    subcategories: [
      {
        name: "Mobiles",
        subcategories: [
          { name: "Android", subcategories: [] },
          { name: "iOS", subcategories: [] }
        ]
      },
      {
        name: "Laptops",
        subcategories: [
          { name: "Gaming", subcategories: [] },
          { name: "Business", subcategories: [] }
        ]
      }
    ]
  };
  
  function getCategories(folder){
      let result=[];
      if(folder.name){
          result.push(folder.name)
      }
      
      if(folder.subcategories){
          for(let cat of folder.subcategories){
              result.push(...getCategories(cat))
          }
      }
      return result;
  }
  
  const Categories = getCategories(categories)
  console.log(Categories)
  







