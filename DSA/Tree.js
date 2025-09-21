//tree implementation
//addchild
//findNode
//display
//preorder
//postorder
//levelorder
//height of tree


class TreeNode{
    constructor(value){
        this.value=value;
        this.children=[]
    }
}
class Tree{
    constructor(value){
        this.root=new TreeNode( value)
    }
    
    addChild(parentValue,childValue){
        const parent = this.findNode(this.root,parentValue)
        if(parent){
            parent.children.push(new TreeNode(childValue))
        }else{
            console.log("parent not found")
        }
    }
    
    findNode(node,value){
        if(node.value===value)return node;
        for(let child of node.children){
            const result = this.findNode(child,value)
            if(result)return result
        }return null;
        
    }

    getNode(value){
        return this.findNode(this.root ,value)
    }


    display(node=this.root,level=0){
        console.log(" ".repeat(level*2)+ node.value)
        node.children.forEach(child=>this.display(child,level+1))
    }
    
    preOrderTraversal(node = this.root){
        console.log(node.value)
        node.children.forEach(child=>this.preOrderTraversal(child))
    }
    
    postOrderTraversal(node=this.root){
        node.children.forEach(child=>this.postOrderTraversal(child))
        console.log(node.value)
    }
    
    levelOrderTraversal(){
        const queue = [this.root]
        while(queue.length>0){
            const node = queue.shift();
            console.log(node.value)
            queue.push(...node.children)
        }
    }

    //to find height of tree
    getHeight(node = this.root) {
        if (!node) return 0;
        if (node.children.length === 0) return 1;
    
        let maxHeight = 0;
        for (let child of node.children) {
            maxHeight = Math.max(maxHeight, this.getHeight(child));
        }
        return maxHeight + 1;
    }
}

const tree = new Tree("A")
tree.addChild("A","B")
tree.addChild("A","C")
tree.addChild("B", "D");
tree.addChild("B", "E");
tree.addChild("C", "F");
tree.display()

console.log(tree.getNode("A"))

console.log("preOrderTraversal")
tree.preOrderTraversal()

console.log(" Post order traversal")
tree.postOrderTraversal()

console.log(" levelOrderTraversal")
tree.levelOrderTraversal()
