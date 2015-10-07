var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var length = 0;
  var dequeue = 0;

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;

  };

  someInstance.dequeue = function() {
    if (length > 0) {
      length--;
    }
    var item = storage[dequeue];
    delete storage[dequeue];
    console.log(storage);
    for (var key in storage) {
      storage[dequeue] = storage[key];
      dequeue++
    }
    dequeue = 0;
    return item;

  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
