h//bubbleSort

const num =[45,90,78,6,23,55]

function bubbleSort(arr){
    const n = arr.length;
    for(i=0;i<n;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }return arr
}
console.log(bubbleSort(num))

//selection Sort

const num =[23,78,2,90,67,44,81,12,56]
function selectionSort(arr){
    const n = arr.length;
    for(let i=0;i<n;i++){
        let minIndex =i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }return arr
}
console.log(selectionSort(num))

//insertion sort

const num =[23,78,2,90,67,44,81,12,56]
function insertionSort(arr){
   const n = arr.length ;
  for(let i=1;i<n;i++){
      const key = arr[i]
      let j=i-1;
      while(j>=0 && arr[j]>key){
          arr[j+1]=arr[j];
          j--;
      }
      arr[j+1]=key;
  }return arr
}
console.log(insertionSort(num))

//merge sort

const num =[23,78,2,90,67,44,81,12,56]
function mergeSort(arr){
    if(arr.length<=1)return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left,right)
}

function merge(left,right){
    let sortedArr=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }return [...sortedArr,...left,...right]
}
console.log(mergeSort(num))

//quick sort

const num =[23,78,2,90,67,44,81,12,56]
function quickSort(arr){
    if(arr.length<=1)return arr;
    let pivot = arr[0]
    let left=[];
    let right=[];
    
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(num))

//--------------------------------------------------------------
//sort the obj based on the specific property
const data = [
    { name: "A", amount: 23 },
    { name: "B", amount: 78 },
    { name: "C", amount: 2 },
    { name: "D", amount: 90 },
    { name: "E", amount: 67 }
  ];
  
  
  function mergeSort(arr){
      if(arr.length<=1)return arr;
      let mid = Math.floor(arr.length/2);
      let left = mergeSort(arr.slice(0,mid))
      let right = mergeSort(arr.slice(mid))
      return merge(left,right)
  }
  
  function merge(left,right){
      let sortedArr=[];
      while(left.length && right.length){
          if(left[0].amount <right[0].amount){
              sortedArr.push(left.shift())
          }else{
              sortedArr.push(right.shift())
          }
      }return [...sortedArr,...left,...right]
  }
  
  console.log(mergeSort(data))

  //----------------------------------------------------------------------
  //find middle six elements of array and sort it

const arr=[1,23,84,50,63,17,98,29]
function middleSix(arr){
    const len = arr.length;
    
    if(len<=6){
        return arr.slice()
    }
    const start = Math.floor((len-6)/2);
    return arr.slice(start,start+6)
}



function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left,right){
    let sortedArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }return [...sortedArr,...left,...right]
}

function sortSix(arr){
    const MiddleSix = middleSix(arr);
    return mergeSort(MiddleSix)
}

console.log(sortSix(arr))


//sort the object based on key 
function mergeSortKeys(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSortKeys(arr.slice(0, mid));
    const right = mergeSortKeys(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    const sorted = [];
    
  
    while (left.length && right.length) {
      if (left[0]<right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
  
    return [...sorted, ...left, ...right];
  }
  
  function sortObjectKeys(obj){
      const keys = Object.keys(obj);
      const sortedKeys = mergeSortKeys(keys);
      
      const sortedObj={};
      
      for(let key of sortedKeys){
          sortedObj[key]= obj[key]
      }
      return sortedObj
  }
  
  const unsorted ={d:3,f:8,a:1,b:2}
  
  const sorted = sortObjectKeys(unsorted);
  console.log(sorted)
  
  //sort array of strings using merge sort
  function mergeSort(arr){
    if(arr.length<=1)return arr;
    
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left,right)
}

function merge(left,right){
    let sortedArr =[];
    
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right] 
}


const arr=["banana","kiwi","rambuttan","pineapple","apple"]
console.log(mergeSort(arr));

//sort a string using mergesort
function mergeSort(arr){
    if(arr.length<=1)return arr;
    
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left,right)
}

function merge(left,right){
    let sortedArr =[];
    
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right] 
}


let str = 'banana';
const sortedStr = mergeSort(str.split(""));
const result = sortedStr.join("");
console.log(result)




















  
  
  
  
  
  
  
  







