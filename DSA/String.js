//hamming distance
var hammingDistance = function(x, y) {
    x=x.toString(2);
    y=y.toString(2);

    if(x.length<y.length){
        while(x.length!=y.length){
            x="0"+x;
        }

    }else{
        while(x.length!=y.length){
            y="0"+y;
        }
    }

    let dis =0;
    for(let i=0;i<x.length;i++){
        if(x[i]!=y[i]){
            dis++;
        }
    }return dis;
    
};



//valid anagram
const isAnagram = function (s,t){
    if(s.length!=t.length)return false;
    let obj1={};
    let obj2={};
    for(i=0;i<s.length;i++){
        obj1[s[i]]=(obj1[s[i]] || 0)+1;
        obj2[t[i]]=(obj2[t[i]] || 0)+1;

    }
    for(let key in obj1){
        if(obj1[key]!=obj2[key])return false;
    }
    return true;
}
console.log(isAnagram("anagram","nagarm"))


//reverse a string without inbuilt method
function reverse(str){
    let result ="";
    let word="";
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            word = str[i]+word
        }else{
            result +=word +" ";
            word=""
        }
    }result +=word;
    return result;
}

console.log(reverse("hello world is muine"))

//to check if a string is pascal case or not
function isPascal(str){
    if(!str) return false;
    
    if(str[0]!==str[0].toUpperCase()) return false;
    
    for(let i=0;i<str.length;i++){
        let ch =str[i]
        if(!ch.match(/[a-zA-Z0-9]/)){
            return false
        }
    }return true
}

console.log(isPascal("HelloWorld"))