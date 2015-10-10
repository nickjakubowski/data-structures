var BinarySearchTree = function(value) {
  var newNode = Object.create(bsTreeMethods)
  newNode.value = value;
  newNode.left = null;
  newNode.right = null;
  return newNode;
};

var bsTreeMethods = {};

bsTreeMethods.insert = function(val) {
  if (val > this.value) {
    if (this.right !== null) {
      this.right.insert(val)
    } else {
      this.right = BinarySearchTree(val);
    }
  } else if (val <= this.value) {
    if (this.left !== null) {
      this.left.insert(val)
    } else {
      this.left = BinarySearchTree(val);
    }
  }
}

bsTreeMethods.contains = function(value){
  var truthy = false;
  var traverser = function(val) {
    if (this.left === null && this.right === null) {
      return
    } else if (this.value > val) {
      if (this.left === null) {
        return
      } else {
        this.left.contains.traverser(val)
      }
    } else if (this.val < val) {
      if (this.right === null) {
        return
      } else {
        this.right.contains.traverser(val);
      }
    } else if (this.value === val) {
      truthy = true;
      return;
    }
  }
  traverser(value);
  return truthy;
}

// bsTreeMethods.contains = function(val) {
// //   var found = present || false
// //   if (this.left === null && this.right === null) {
// //     found = false;
// //   } else if (present) {
// //     found = true;
// //   } else if (this.value === val) {
// //     found = true;
// //   } else if (this.value > val) {
// //     this.left.contains(val, found);
// //   } else if (this.value < val) {
// //     this.right.contains(val, found)
// //   } 
// //   return found;
// }

bsTreeMethods.depthFirstLog = function(val) {

}






/*
 * Complexity: What is the time complexity of the above functions?
 */
