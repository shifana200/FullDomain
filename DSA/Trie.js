//trie implementation
//insert
//search
//startWith
//autoComplete using trie
//find height of trie
//print


class trieNode{
    constructor(){
        this.children ={}
        this.endOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root = new trieNode()
    }
    
    insert(word){
        let current = this.root;
        for(let char of word){
            if(!current.children[char]){
                current.children[char]= new trieNode()
            }current = current.children[char]
        }current.endOfWord= true;
    }
    search(word){
        let current = this.root;
        for(let char of word){
            if(!current.children[char])return false;
            current = current.children[char]
        }return current.endOfWord;
    }
    
    startWith(prefix){
        let current = this.root;
        for(let char of prefix){
            if(!current.children[char])return false;
        current = current.children[char]
    }
        return true;
    }


    autoComplete(prefix){
        let current = this.root;
        let results =[]
        
        for(let char of prefix){
            if(!current.children[char])return results;
            current=current.children[char]
        }
        const dfs=(node,path)=>{
            if(node.endOfWord){
            results.push(path)
        }
        for (let char in node.children){
            dfs(node.children[char],path + char)
        }}
        dfs(current,prefix)
        return results
    }

    //find height of trie
    getHeight() {
        const findHeight = (node) => {
            if (!node) return 0;
            let max = 0;
            for (let char in node.children) {
                max = Math.max(max, findHeight(node.children[char]));
            }
            return 1 + max;
        };
        return findHeight(this.root) - 1; // subtract 1 to exclude root node level
    }
    


    printTrie(){
        const words=[]
        const traverse= (node,prefix)=>{
            if(node.endOfWord){
                words.push(prefix)
            }
            for(let char in node.children){
                traverse(node.children[char],prefix + char)
            }
        };
        traverse(this.root,"")
        console.log('words in trie are :',words)
    }
}

const trie = new Trie()
trie.insert("cat")
trie.insert("cap")
trie.insert("bat")
trie.insert("ban")
console.log(trie.search("bat"))
console.log(trie.startWith("ba"))
trie.printTrie()