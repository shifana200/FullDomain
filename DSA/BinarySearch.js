 //LINEAR SEARCH

//search an element in an array 
function linearSearch(nums,target){
    for(let i=0;i<nums.length;i++){
        if(target===nums[i]){
            return i;
        }
    }return -1;
}
console.log(linearSearch([1,2,4,5,9,7,85],9))



//BINARY SEARCH
function binarySearch(nums,target){
    let start =0;
   let end = nums.length-1;
   while(start<=end){
       let middle = Math.floor((start+end)/2);

       if(nums[middle]===target){
           return middle;
       }else if(nums[middle]<target){
           start = middle+1;
       }else{
           end=middle-1;
       }
   }return -1;
   
}
console.log(binarySearch([1,2,3,4,5,5,6,7],4))

//binary search using recursion
function binarySearch(arr,start,end,target){
    if(start>end)return -1;
    let mid = Math.floor((start+end)/2);
    if(arr[mid]===target){return mid}
    else if(arr[mid]<target){
        return binarySearch(arr,mid+1,end,target)
    }else{
        return binarySearch(arr,start,mid-1,target)
    }
}
let arr=[1,2,3,6,8,9,4,65]
console.log(binarySearch(arr,0,arr.length-1,9))


//using binary search replace the target with 0 and return the modified array
const nums =[12,33,35,56,78,89,123,156];

function binarySearch(nums,target){
    let start=0;
    let end = nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        
        if(nums[mid]===target){
             nums[mid]=0;
            return nums;
        }else if(nums[mid]< target){
            start = mid+1;
        }else{
            end = mid-1;
        }
        
    }
    return nums;
}

console.log(binarySearch(nums,56))

//replace the target occurences with zero

function replaceAlloccurences(arr,target){
    let start=0;
    let end = arr.length-1;
    let first=-1;
    let last=-1;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            first = mid;
            end = mid-1;
        }else if (arr[mid]<target){
            start = mid+1
        }else{
            end = mid-1;
        }
    }
    
    if(first===-1) return arr;
    
    start=0;
    end = arr.length-1;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            last = mid;
            start=mid+1;
        }else if(arr[mid]<target){
            start=mid+1;
        }else{
            end = mid-1
        }
    }
    
    for(let i=first;i<=last;i++){
        arr[i]=0;
    }
    
    return arr;
}

const arr=[1,2,2,3,3,4,4,4,4,5,6,55,55]
console.log(replaceAlloccurences(arr,4))

