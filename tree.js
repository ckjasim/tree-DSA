class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
  
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    
    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);
      
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  delete(value) {
    // ------ Why Do We Reassign this.root? ------
    // -- When you delete someone from the family tree, sometimes you need to move someone else up to the top to take their place. The this.root = this.deleteNode(this.root, value) line is doing just that: making sure the tree still has the right person at the top after the deletion.
    this.root = this.deleteNode(this.root, value);
}

deleteNode(root, value) {
    if(root === null) return null;
    if(value < root.value) {
        root.left = this.deleteNode(root.left, value)
    } else if(value > root.value) {
        root.right = this.deleteNode(root.right, value)
    } else { // -- Value found --

        // -- If there is only a one child or no child situation
        if(root.left === null) return root.right
        if(root.right === null) return root.left

        // -- If the node have both child
        const minNode = this.minValue(root.right)
        root.value = minNode
        root.right = this.delete(root.right, minNode)
    }
    return root
    }

minValue(root) {
  let curr = root
  while(curr.left !== null) {
    curr = curr.left
  }
  return curr
}
// min(root) {
//   let current = root;
//   while (current.left !== null) {
//     current = current.left;
//   }
//   return current.value;
// }
}



// Example usage
const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.isEmpty());

bst.preOrder(bst.root); // Output: 10, 5, 3, 7, 15
bst.inOrder(bst.root);  // Output: 3, 5, 7, 10, 15
bst.postOrder(bst.root); // Output: 3, 7, 5, 15, 10
bst.levelOrder(); // Output: 10, 5, 15, 3, 7


