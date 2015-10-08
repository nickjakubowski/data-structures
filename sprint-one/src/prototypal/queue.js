var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(queueMethods);
  newObj.length = 0;
  return newObj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
}

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
}

queueMethods.dequeue = function(value) {
  if ( this.length > 0 ) {
    this.length--;
  };
  var removed = this[0];
  delete this[0];
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i+1]; 
  }
  return removed;

}