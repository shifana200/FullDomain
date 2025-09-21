//second smallest in an array

// const num =[1,72,38,84,95,96,7]

function secondSmallestFind(arr){
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }else if(arr[i]!=smallest && arr[i]<secondSmallest){
            secondSmallest = arr[i];
        }
    }return secondSmallest;
}
console.log(secondSmallestFind(num))


//rotate an array by k

function rotateArray(arr,k){
    let size = arr.length;
    if(k>size){
        k=k%size;
    }
    reverse(arr,0,arr.length-1);
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);
    return arr;
    
}
function reverse(arr,left,right){
    while(left<right){
        const temp = arr[left];
        arr[left++]=arr[right];
        arr[right--]=temp;
    }
}
console.log(rotateArray(num,3))

//remove duplicates from an array

const num =[1,1,2,3,3,3,3,4,5,5,6,6,6,7,7]
function removeDuplicates(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            arr.splice(i+1,1)
            i--;
        }
    }let length = arr.length
    return {arr:arr,size:length};
}
console.log(removeDuplicates(num))


//remove duplicates from an array without inbuilt method
 const num =[1,1,2,3,3,3,3,4,5,5,7]
function removeDuplicates(arr){
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!=arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }return i+1;
}
console.log(removeDuplicates(num))

//sum of array using recursion
function sumArray(arr,n){
    if(n===0)return 0;
    return arr[n-1] +sumArray(arr,n-1)
}

console.log(sumArray([1,2,3,4,9],5))


//move all zeros to end
function moveZeroToEnd(arr){
    let j=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!=0){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            j++;
        }
    }return arr;
}
console.log(moveZeroToEnd([0,1,5,0,7,0,3,0,9,0]))

//sort the array without in-built methods and the time complexity should be less than o(n^2)

const arr=[0,1,1,0,0,0,1]
let left =0;
let right= arr.length-1;

while(left<right){
    if(arr[left]===1 && arr[right]===0){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++;
        right--;
    }
    
    if(arr[left]===0)left++;
    if(arr[right]===1)right--;
}
console.log(arr)

//sort the arr with zero and one in order
let arr = [0, 0, 1, 1, 0, 1, 0, 0, 1];

let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
        count++
    }
}

for(let i=0;i<arr.length;i++){
    if(i<count){
        arr[i]=0
    }else{
        arr[i]=1
    }
}
console.log(arr)