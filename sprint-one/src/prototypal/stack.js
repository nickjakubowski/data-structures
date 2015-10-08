var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  return newStack;

};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
}

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
}

stackMethods.pop = function() {
  if (this.length > 0) {
    this.length--;
  }
  var popped = this[this.length];
  delete this[this.length];
  return popped; 
}

