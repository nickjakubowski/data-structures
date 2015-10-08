var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    // if no items have been added to the list
    if (this.head === null){
      // then both head and tail point to the newly added node 
      this.head = newNode;
      this.tail = newNode;
      // else if there is already at least one item in the list
    } else {
      // the current tails next property now points to the newly added node
      this.tail.next = newNode;
      //the newly added node becomes the new tail property of the list
      this.tail = newNode;
    }    
  };

  list.removeHead = function() {
    //removed head equals the current head
    var removedHead = this.head;
    //this.head now becomes the next node in the list
    this.head = this.head.next;
    // return the value of the removed head
    return removedHead.value;
  };

  list.contains = function(target) {
    // set the search default to false
    var included = false;
    // recursive function
    var listChecker = function(val) {
      // if the current nodes value property is equal to the target set
      // the included variable to true and return out of the function
      if (val.value === target) {
        included = true;
        return
        // else if val.next === null (AKA if were on the .last item) return 
        // out of the function
      } else if (val.next === null) {
        return
        // else call the listChecker function of the next obj in the list
      } else {
        listChecker(val.next)
      }
    };
    // call the listChecker function on the head of the list
    listChecker(this.head);
    // return true or false
    return included;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};









// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {
//     var newNode = Node(value);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//     this.tail.next = newNode;
//     this.tail = newNode;
//     console.log(list);  
//     }
//   };

//   list.removeHead = function() {
//     this.head = this.next;
//     delete this.head
//   };

//   list.contains = function(target) {
//   };

//   return list;
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
