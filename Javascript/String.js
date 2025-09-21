// length – Find string length

const name = "Shifana";
console.log(name.length);

//--------------------------------------------------------------------------------
//toUpperCase() / toLowerCase()

const word = "Hello";
console.log(word.toUpperCase()); // HELLO
console.log(word.toLowerCase()); // hello

//--------------------------------------------------------------------------------
//charAt(index) – Get character at index

const name = "Shifana";
console.log(name.charAt(2)); // i

//--------------------------------------------------------------------------------
//indexOf() / lastIndexOf()

const msg = "hello world";
console.log(msg.indexOf("o")); // 4
console.log(msg.lastIndexOf("o")); // 7

//--------------------------------------------------------------------------------
//includes() – Check if substring exists

console.log("javascript".includes("script")); // true

//--------------------------------------------------------------------------------
// startsWith() / endsWith()

const str = "Fullstack Developer";
console.log(str.startsWith("Full"));  // true
console.log(str.endsWith("per"));  

//--------------------------------------------------------------------------------
//slice(start, end) – Get part of string

const lang = "JavaScript";
console.log(lang.slice(0, 4)); //java

//--------------------------------------------------------------------------------
//substring(start, end) – Similar to slice

console.log("frontend".substring(0, 5)); // front


//--------------------------------------------------------------------------------
//trim() / trimStart() / trimEnd()

const messy = "   hello   ";
console.log(messy.trim());       // "hello"
console.log(messy.trimStart());  // "hello   "
console.log(messy.trimEnd());    // "   hello"

//--------------------------------------------------------------------------------
//replace() – Replace part of string

const msg = "Hello World";
console.log(msg.replace("World", "Shifana")); // Hello Shifana

//--------------------------------------------------------------------------------
//split() – Convert string to array

const date = "2025-06-14";
const parts = date.split("-");
console.log(parts); // ["2025", "06", "14"]

//--------------------------------------------------------------------------------
//concat() – Merge strings

const first = "Hi ";
const second = "there!";
console.log(first.concat(second)); // Hi there!

//--------------------------------------------------------------------------------
 //repeat(n) – Repeat string n times

console.log("ha".repeat(3)); // hahaha

//--------------------------------------------------------------------------------
//match() – Get matches using RegEx

const sentence = "I have 2 apples and 3 bananas";
console.log(sentence.match(/\d+/g)); // ['2', '3']

//--------------------------------------------------------------------------------
//padStart() / padEnd()

const num = "7";
console.log(num.padStart(3, "0")); // 007
console.log(num.padEnd(3, "*"));   // 7**

//--------------------------------------------------------------------------------
// localeCompare() – Compare strings alphabetically

console.log("apple".localeCompare("banana")); // -1

//--------------------------------------------------------------------------------
//toString() – Convert other types to string

const num = 123;
console.log(num.toString()); // "123"

//--------------------------------------------------------------------------------
// codePointAt() – Get Unicode of character

console.log("A".codePointAt(0)); // 65

//--------------------------------------------------------------------------------
//fromCharCode() – Convert Unicode to character

console.log(String.fromCharCode(65)); // "A"

//--------------------------------------------------------------------------------
//remove a char of the string without built in methods

function removeCharOfString(str,removeIndex){
    let result ="";
    for(let i=0;i<str.length;i++){
    if(i!==removeIndex){
        result +=str[i]
    }
    }return result
}

console.log(removeCharOfString('helloo',3))

//--------------------------------------------------------------------------------
//remove a specific char of a string

function removeCharOfString(str,removeChar){
    let result ='';
    for(let char of str){
        if(char !==removeChar){
            result +=char
        }
    }return result
  
}

console.log(removeCharOfString('hellyoo','y'))


//--------------------------------------------------------------------------------
//find the  first non repeating char in a string

//using freq obj method
const str ="aabccdeeff";

function nonRepeatingChar(str){
  const freq={};
   
  for(let char of str){
      freq[char] = (freq[char] || 0)+1;
  }
   
  for(let char of str){
      if(freq[char]===1){
          return char;
      }
  }
  return null
}

console.log(nonRepeatingChar(str))

//ES6 option

const nonRepeatingChar = str =>[...str].find(c=>str.indexOf(c)===str.lastIndexOf(c)) || null;

console.log(nonRepeatingChar(str))


//--------------------------------------------------------------------------------
//check if a string is palindrome or not

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}

const str ="malayalam"
console.log(isPalindrome(str))


//--------------------------------------------------------------------------------
//count the no.of vowels in a string

function vowels(str){
    let count=0;
    let vowel=['a','e','i','o','u']
    
    for(let char of str){
        if(vowel.includes(char)){
            count++
        }
    }return count;
}
const str ="hello world";
console.log(vowels(str))

//--------------------------------------------------------------------------------
//remove all vowels from a string

function removeVowels(str){
    let result="";
    let vowels=['a','e','i','o','u'];
    for(let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result +=char;
        }
    }
    return result
}

const str="javaScrIpt";
console.log(removeVowels(str))

//alternate solution 
const removeVowel = str=> str.replace(/[aeiou]/gi,"");
const str1="madam"
console.log(removeVowel(str1))

//--------------------------------------------------------------------------------
//Capitalize the First Letter of Each Word in a Sentence

const str ="hEllo worLD from javasCRIpt";

function capitaliseWord(str){
    const words = str.split(" ");
   
   const capitalise  = words.map(word=>{
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
   });
   
   return capitalise.join(" ")
}

console.log(capitaliseWord(str))

//--------------------------------------------------------------------------------
//check if two strings are anagrams

function checkAnagram(str1,str2){
    let word1 = str1.split("").sort().join("");
    let word2 = str2.split("").sort().join("");
    
    return word1 ===word2;
}

const str1 ="listen";
const str2 ="silent";

console.log(checkAnagram(str1,str2))

//--------------------------------------------------------------------------------
//Reverse Each Word in a Sentence

function reverseWord(str){
    const words = str.split(' ');
    const reversed = words.map(word=>word.split("").reverse().join(""))
    return reversed.join(" ");
}

const str ="hello world from javascript"
console.log(reverseWord(str))

//--------------------------------------------------------------------------------
//Check if Two Strings are Rotations of Each Other

function rotatedStr(str1,str2){
    if(str1.length !== str2.length) return false;
    let temp = str1+str1;
    if(temp.includes(str2)) return true;
    
    return false;
}
const str1="abcde";
const str2 ="deabc";

console.log(rotatedStr(str1,str2))

//--------------------------------------------------------------------------------
//remove duplicates characters from a string

function removeDuplicateChar(str){
    let result ="";
    for(let char of str){
        if(!result.includes(char)){
            result+=char;
        }
    }return result;
  }
  
  const str ="programming"
  console.log(removeDuplicateChar(str))

//--------------------------------------------------------------------------------
//Count the Occurrence of Each Character in a String

function countChar(str){
    const freq={};
    for(let char of str){
        if(char===" ")continue;
        freq[char]=(freq[char] || 0)+1;
    }
    return freq
}
const str="hello world";
console.log(countChar(str))

//--------------------------------------------------------------------------------
//Check for Palindrome (Ignoring Case and Non-Alphanumeric Characters)

function isPalindrome(str){
    const cleaned = str.replace(/[^a-z0-9]/gi,"").toLowerCase()
    return cleaned === cleaned.split("").reverse().join("")
 }
 const str="A man, a plan, a canal: Panama";
 console.log(isPalindrome(str))

//--------------------------------------------------------------------------------
//Find the First Non-Repeating Character in a String

function nonRepeatChar(str){
    const freq={};
    for(let char of str){
        freq[char] = (freq[char] || 0)+1;
    }
    
   for(let char of str){
       if(freq[char]===1){return char}
   }
   return null;
}
const str="programming"
console.log(nonRepeatChar(str))

//--------------------------------------------------------------------------------
// Compress a String (Run-Length Encoding)

function runLengthEncode(str){
    let result="";
    const freq={};
    for(let char of str){
        freq[char] = (freq[char] || 0)+1;
    }
     
     for(let char in freq){
         result += char + freq[char]
     }
     return result;
}
const str = "aaabbc";
console.log(runLengthEncode(str))

//actual method
function runLengthEncode(str){
    let result="";
    let count=1;
    
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            count++;
        }else{
            result +=str[i] + count;
            count=1;
        }
    }return result;
}

const str = "ababaabb"
console.log(runLengthEncode(str))


//--------------------------------------------------------------------------------
//check if a string is pangram or not
const str ="The quick brown fox jumps over the lazy dog";

function pangram(str){
 const lower = str.toLowerCase();
 const alphabetSet = new Set();
 
 for(let char of lower){
     if(char >='a' && char <='z'){
         alphabetSet.add(char)
     }
 }
 return alphabetSet.size === 26;
}

console.log(pangram(str))


//--------------------------------------------------------------------------------
//capitalise the last letter of each word

const str = 'hello world is very nice';
function capitalise(str){
   const words = str.split(" ");
   for(let i=0;i<words.length;i++){
       const word=words[i]
       let lastChar = word[word.length-1].toUpperCase();
       words[i] = word.slice(0,-1)+lastChar
   }
   return words.join(" ")
}
console.log(capitalise(str))


//--------------------------------------------------------------------------------
//longest word in a sentence

const str='hello world this is a javascript practice'
function longestWord(str){
    const words = str.split(" ");
    let longest="";
    for(let word of words){
        if(word.length>longest.length){
            longest=word
        }
    }
    return longest;
    
}
console.log(longestWord(str))

//-------------------------------------------------------------------------------------
//find the longest substriing wihtout repeating character
function lg(str){
    let set = new Set();
    let left=0,maxStr="";
    
    for(let i=0;i<str.length;i++){
        while(set.has(str[i])){
            set.delete(str[left])
            left++
        }
        set.add(str[i])
        
        if(i-left+1>maxStr.length){
            maxStr= str.slice(left,i+1)
        }
    }
    return maxStr;
}

console.log(lg("ababbabccbba"))


























