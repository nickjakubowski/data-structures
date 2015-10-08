var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  _.extend(newQueue, queueMethods);
  return newQueue
};

var queueMethods = {
  size: function(){
    return this.length;
  },
  enqueue: function(value) {
    this[this.length] = value
    this.length++;
  },
  dequeue: function(value) {
    if (this.length > 0) {
      this.length--;
    }
    var dequeued = this[0];
    delete this[0];
    for (var i=0; i<this.length; i++) {
      this[i] = this[i+1];
      // this[this.idxTracker] = this[key];
      // this.idxTacker++;
    }
    return dequeued;
  }
};



