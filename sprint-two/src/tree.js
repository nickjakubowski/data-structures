var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // sets each objects children property to an empty array
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // turns each value into an instance of the Tree class
  // and pushes that object to the children array of the 
  //current node
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
    // sets boolean to represents presence of object, defaults to false
    var truthy = false;
    // if this current object's value property is equal to the
    // target or if truty = true, return true
    if (this.value === target || truthy) {
      return true;
    // else loop through the current objects children property
    // and call that childs contain method recursively.
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          truthy = true;
        }
      }
    }
  return truthy;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
