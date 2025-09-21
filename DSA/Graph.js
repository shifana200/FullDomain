class Graph{
    constructor(){
        this.adjacencyList={}
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }
    
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjVertex)
        }delete this.adjacencyList[vertex]
    }
    
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!==vertex2)
        
        this.adjacencyList[vertex2]= this.adjacencyList[vertex2].filter(v=>v!==vertex1)
    }
    
 //to check whether the graph is cycle or not        
hasCycle(){
    const visited = new Set()
    const dfs = (current ,parent)=>{
        visited.add(current)
        
        for(let neighbor of this.adjacencyList[current]){
            if(!visited.has(neighbor)){
                if(dfs(neighbor,current))return true;
            }else if(neighbor!==parent){
                return true
            }
        }return false 
        
    }
    
    for(let vertex in this.adjacencyList){
        if(!visited.has(vertex)){
            if(dfs(vertex,null))return true
        }
    }return false
}

//bfs traversal(())
bfs(start){
    let queue = [start];
    let visited = new Set();
    let result =[];
    
    visited.add(start);
    while(queue.length){
        let vertex = queue.shift()
        result.push(vertex)
        
        this.adjacencyList[vertex].forEach(neighbor=>{
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        })
    }return result
}


//dfs - iterative method
dfs(start){
    let stack =[start]
    let visited = new Set()
    let result =[]
    
    visited.add(start)
    while(stack.length){
        let vertex = stack.pop()
        result.push(vertex)
        
        this.adjacencyList[vertex].forEach(neighbor=>{
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                stack.push(neighbor)
            }
        })
    }return result;
}

//dfs- recursive method
dfs(start,visited = new Set(),result=[]){
    visited.add(start)
    result.push(start)
     this.adjacencyList[start].forEach(neighbor=>{
         if(!visited.has(neighbor)){
             visited.add(neighbor)
             this.dfs(neighbor,visited,result)
         }
     })
     return result
}
  

    
    
    display(){
        for (let vertex in this.adjacencyList){
            console.log(vertex + "-->" +this.adjacencyList[vertex].join(","))
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","C")
graph.addEdge("A","B")
// graph.display()

graph.removeEdge("A","B")
graph.removeVertex("B")
graph.display()