

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.table = [];
};

HashTable.prototype.insert = function(k, v) { 
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this.table[index])) {
    this.table[index] = [];
    this.table[index].push([k, v]);
  } else {
    for (var i=0; i<this.table[index].length; i++) {
      if (this.table[index][i][0] === k) {
        this.table[index][i][1] = v
      } else if (this.table[index].length - 1 === i) {
        this.table[index].push([k,v])
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i=0; i<this.table[index].length; i++) {
    if (this.table[index][i][0] === k) {
      return this.table[index][i][1]
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i=0; i<this.table[index].length; i++) {
    if (this.table[index][i][0] === k) {
      this.table[index][i][1] = null;
      console.log(this.table[index][i])
    } 
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


