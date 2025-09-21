//polyfill for map()
Array.prototype.myMap= function(callback){
    let result=[];
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }return result;
    
}
let arr1 =[1,2,3,4];
let num = arr1.myMap(x=>x*2)
console.log(num)

//polyfill for filter
Array.prototype.myFilter = function (callback){
    let result=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
    }return result
}
let arr =[1,2,3,4,5,6];
let even = arr.myFilter(num=>num%2===0)
console.log(even)

//polyfill for reduce()
Array.prototype.myReduce = function (callback,initialValue){
    let accumulator = initialValue !==undefined ? initialValue : this[0];
    let startIndex = initialValue!==undefined ? 0:1;
    for(let i = startIndex;i<this.length;i++){
        accumulator = callback(accumulator,this[i],i,this)
    }
    return accumulator
}

let arr2 =[1,2,3,4,5];
let sum = arr2.myReduce((acc,curr)=>acc+curr,0);
console.log(sum)





