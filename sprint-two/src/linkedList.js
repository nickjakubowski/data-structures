var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }    
  };

  list.removeHead = function() {
    var removedHead = this.head;
    this.head = this.head.next;
    return removedHead.value;
  };

  list.contains = function(target) {
    var included = false;
    var listChecker = function(val) {
      if (val.value === target) {
        included = true;
        return
      } else if (val.next === null) {
        return
      } else {
        listChecker(val.next)
      }
    };
    listChecker(this.head);
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
