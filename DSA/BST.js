//bst implementation
//insert
//insert 
//contain 
//delete
//inorder
//postorder
//preorder
//find closest value
//validate bst
//find nth largest
//find nth smallest




class treeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class binarySearchTree{
    constructor(){
        this.root=null
    }
    
    //to add a value
    insert(value){
        const newNode = new treeNode(value)
        if(!this.root){
            this.root = newNode;
            return;
        }
        
        let current = this.root;
        while(true){
            if(value<current.value){
                if(!current.left){
                    current.left=newNode
                    return 
                }current = current.left;
            }else{
                if(!current.right){
                    current.right=newNode
                    return
                }current = current.right;
            }
        }
    }
    //to find a value
    contains(value){
        let current = this.root;
        while(current){
            if(value===current.value)return true;
            current = value <current.value? current.left : current.right
        }return false
    }
    //to delete
    delete(value){
        const deleteNode = (node,value)=>{
            if(!node)return null;
            if(value<node.value){
                node.left = deleteNode(node.left,value)
            }else if(value>node.value){
                node.right= deleteNode(node.right,value)
            }else{
                if(!node.left && !node.right)return null;
                if(!node.left)return node.right
                if(!node.right)return node.left
                
                let minValue= this.findMin(node.right)
                node.value=minValue
                node.right= deleteNode(node.right,minValue)
            }return node;
        }
        this.root = deleteNode(this.root,value)
    }
    findMin(node){
        while(node.left)node = node.left;
        return node.value;
    }
    
    //traversals
    
  inorder(node=this.root){
      if(node){
          this.inorder(node.left)
          console.log(node.value)
          this.inorder(node.right)
      }
  }  
  
  
  postorder(node = this.root){
      if(node){
          this.postorder(node.left)
          this.postorder(node.right)
          console.log(node.value)
      }
  }
  
  preorder(node = this.root){
      if(node){
          console.log(node.value)
          this.preorder(node.left)
          this.preorder(node.right)
      }
  }
  
  //finding the closest value
  findClosestValue(node,target,closest=Infinity){
      if(!node)return closest;
      if(Math.abs(target-closest)>Math.abs(target-node.value)){
          closest= node.value
      }
      return target<node.value? this.findClosestValue(node.left,target,closest) : this.findClosestValue(node.right, target,closest)
  }
  
  // validate the tree is bst or not
    validateBST(node,min=-Infinity,max=Infinity){
        if(!node)return true;
        if(node.value<=min || node.value>=max)return false;
        return(
            this.validateBST(node.left,min,node.value) && 
            this.validateBST(node.right,node.value,max))
    }


    findNthLargest(n) {
        let count = 0;
        let result = null;

        function reverseInorder(node) {
            if (!node || result !== null) return;

            reverseInorder(node.right);
            count++;
            if (count === n) {
                result = node.value;
                return;
            }
            reverseInorder(node.left);
        }

        reverseInorder(this.root);
        return result !== null ? result : "Not enough elements";
    }


    findNthSmallest(n) {
        let count = 0;
        let result = null;

        function inorder(node) {
            if (!node || result !== null) return;

            inorder(node.left);
            count++;
            if (count === n) {
                result = node.value;
                return;
            }
            inorder(node.right);
        }

        inorder(this.root);
        return result !== null ? result : "Not enough elements";
    }


    height(node = this.root) {
        if (!node) return -1; // return -1 for edges count, use 0 if you want nodes count
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    display(node = this.root, space = 0, levelSpace = 5) {
        if (node == null) return;
    
        space += levelSpace;
        this.display(node.right, space);
    
        console.log(" ".repeat(space - levelSpace) + node.value);
    
        this.display(node.left, space);
    }

}
const bst= new binarySearchTree()
bst.insert(89)
bst.insert(12)
bst.insert(45)
bst.insert(67)
bst.insert(23)
console.log(bst.contains(12))
console.log("inorder :")
bst.inorder()
console.log("preorder:")
bst.preorder()
console.log("postorder:")
bst.postorder()
console.log("------------------------")
console.log(bst.findClosestValue(bst.root,77))

