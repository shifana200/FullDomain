//hash table

class hashTable{
    constructor(size=10){
        this.table = new Array(size)
        this.size=size;
    }
    _hash(key){
        let hash=0;
        let strkey=key.toString()
        for(let i=0;i<strkey.length;i++){
            hash +=strkey.charCodeAt(i);
        }return hash%this.size;
    }
    
    set(key,value){
        const index = this._hash(key)
        if(!this.table[index]){
            this.table[index]=[];
        }
        this.table[index].push([key,value])
    }
    
    get(key){
        const index = this._hash(key)
        if(!this.table[index])return undefined;
        for(let pair of this.table[index]){
            if(pair[0]===key){
                return pair[1];
            }
        }return undefined;
    }
    
    delete(key){
        const index = this._hash(key);
        if(!this.table[index])return false;
        this.table[index]=this.table[index].filter(pair=>pair[0]!==key)
        return true;
    }
    
    print(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const ht = new hashTable()
ht.set("name","shifana")
ht.set(67,89)
ht.set("age",22)
console.log(ht.get("name"))
ht.delete("age")
ht.print()



//hash table implementing seperate chaining

class hashTable{
    constructor(size=10){
        this.table = new Array(size)
        this.size=size;
    }
    _hash(key){
        let hash=0;
        let strkey=key.toString()
        for(let i=0;i<strkey.length;i++){
            hash +=strkey.charCodeAt(i);
        }return hash%this.size;
    }
    
    set(key,value){
        const index = this._hash(key)
        if(!this.table[index]){
            this.table[index]=[];
        }
        for(let pair of this.table[index]){
            if(pair[0]===key){
                pair[1]=value;
                return
            }
        }
        this.table[index].push([key,value])
    }
    
    get(key){
        const index = this._hash(key)
        if(!this.table[index])return undefined;
        for(let pair of this.table[index]){
            if(pair[0]===key){
                return pair[1];
            }
        }return undefined;
    }
    
    delete(key){
        const index = this._hash(key);
        if(!this.table[index])return false;
        this.table[index]=this.table[index].filter(pair=>pair[0]!==key)
        return true;
    }
    
    print(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const ht = new hashTable()
ht.set("name","shifana")
ht.set(67,89)
ht.set(67,0)
ht.set("age",22)
ht.set("name","riya")

console.log(ht.get("name"))
ht.delete("age")
ht.print()


//linear probing
class hashTable{
    constructor(size=10){
        this.table= new Array(size)
        this.size =  size
    }
    
    _hash(key){
        let hash=0;
        let keyStr = key.toString()
        for(let i=0;i<keyStr.length;i++){
            hash +=keyStr.charCodeAt(i)
        }return hash% this.size;
    }
    
    set(key,value){
        let index = this._hash(key)
        while(this.table[index]){
            index = (index+1)%this.size
        }this.table[index]=[key,value]
    }
    
    get(key){
        let index = this._hash(key)
        while(this.table[index]){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }index = (index+1)% this.size;
        }return undefined;
    }
    
    delete(key){
        let index = this._hash(key)
        while(this.table[index]){
            if(this.table[index][0]===key){
                this.table[index]=null;
                return true;
            }index = (index+1)%this.size;
        }return false;
    }
    print(){
        console.log(this.table)
    }
}
const ht = new hashTable();
ht.set("name","isha")
ht.set("name","priya")
ht.delete("name")
console.log(ht.get("name"))
ht.print()


//quadratic probing
class hashTable{
    constructor(size=10){
        this.table = new Array(size)
        this.size=size
    }
    
    _hash(key){
        let hash=0;
        let keyStr = key.toString()
        for(let i=0;i<keyStr.length;i++){
            hash += keyStr.charCodeAt(i)
        }return hash% this.size
    }
    
    set(key,value){
        let orgIndex = this._hash(key)
        let index = orgIndex
        let i=1;
        while(this.table[index]){
            if(this.table[index][0]===key){
                this.table[index][1]=value
                return;
                
            }
            index = (orgIndex + i*i)% this.size
            i++
        }this.table[index]=[key,value]
    }
    
    get(key){
        let orgIndex = this._hash(key)
        let index = orgIndex
        let i=1;
        while(this.table[index]){
            if(this.table[index][0]===key){
                return this.table[index][1];
            }index = (orgIndex + i*i)%this.size
            i++;
        }return undefined
    }
    
    delete(key){
          let orgIndex = this._hash(key)
        let index = orgIndex
         let i=1;
        while(this.table[index]){
            if(this.table[index][0]===key){
                this.table[index]=null;
                return true;
            }index = (orgIndex + i*i)%this.size
            i++;
            
        }return false
    }
    
    print(){
        console.log(this.table)
    }
    
}

const ht = new hashTable()
ht.set(5, "apple");
ht.set(15, "banana");
ht.set(25, "cherry");

 console.log(ht.get(89))
ht.print()


//double hashing
class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    _hash1(key) {
        let hash = 0;
        let keyStr = key.toString();
        for (let i = 0; i < keyStr.length; i++) {
            hash += keyStr.charCodeAt(i);
        }
        return hash % this.size;
    }

    _hash2(key) {
        return (7 - (key % 7)); 
    }

    set(key, value) {
        let hash1 = this._hash1(key);
        let hash2 = this._hash2(key);
        let index = hash1;
        let i = 1;

        while (this.table[index] !== undefined && this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index][1] = value; 
                return;
            }
            index = (hash1 + i * hash2) % this.size;
            i++;
        }
        this.table[index] = [key, value];
    }

    get(key) {
        let hash1 = this._hash1(key);
        let hash2 = this._hash2(key);
        let index = hash1;
        let i = 1;

        while (this.table[index] !== undefined) {
            if (this.table[index] !== null && this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (hash1 + i * hash2) % this.size;
            i++;
        }
        return undefined;
    }

    delete(key) {
        let hash1 = this._hash1(key);
        let hash2 = this._hash2(key);
        let index = hash1;
        let i = 1;

        while (this.table[index] !== undefined) {
            if (this.table[index] !== null && this.table[index][0] === key) {
                this.table[index] = null; 
                return true;
            }
            index = (hash1 + i * hash2) % this.size;
            i++;
        }
        return false;
    }

    print() {
        console.log(this.table);
    }
}

const ht = new HashTable();
ht.set(5, "apple");
ht.set(15, "banana");
ht.set(25, "cherry");

ht.print();


//remove duplicates ina string
function removeDuplicates(str){
    return [...new Set(str)].join("")
}
console.log(removeDuplicates("hello how are you hello"))


//to check duplicate is present or not
function isDup(str){
    let newStr={};
    for(let char of str){
        if(newStr[char]){
            return true;
        }newStr[char]=true
    }return false
}
console.log(isDup("helo"))


//find least occured element using hash table
function leastOcc(arr){
    let fre={}
    for(let num of arr){
        fre[num]=(fre[num] || 0) +1
    }
    let minfreq=Infinity;
    let leastNum=null;
    
    for(let num in fre){
        if(fre[num]<minfreq){
            minfreq=fre[num]
            leastNum=Number(num);
        }
    }return leastNum;
}
console.log(leastOcc([3,4,5,4,3,3,23,34,5,23,4,4]))
