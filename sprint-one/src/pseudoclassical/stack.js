var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Stack.prototype.size = function() {
  return this.length;
}

Stack.prototype.push = function(value) {
  this[this.length] = value;
  this.length++;
}

Stack.prototype.pop = function(value) {
  if (this.length > 0) {
    this.length--;
  }
  var popped = this[this.length];
  delete this[this.length];
  return popped;
}
