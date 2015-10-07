var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var newStack = {};
    newStack.length = 0;
    _.extend(newStack, stackMethods);
    return newStack;
};

var stackMethods = {
  push: function(value) {
    this[this.length] = value;
    this.length++;
  },
  pop: function(value) {
    if (this.length > 0) {
      this.length--;
    };
    var popped = this[this.length];
    delete this[this.length];
    return popped;
  },
  size: function(value) {
      return this.length;
  },
};




