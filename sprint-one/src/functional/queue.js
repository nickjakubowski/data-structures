var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var length = 0;
  var dequeue = 0;

  someInstance.enqueue = function(value) {
    storage[length+dequeue] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var val;
    if (length > 0) {
          val = storage[dequeue];
    delete storage[dequeue];
    console.log(dequeue)
    length--;      
    dequeue++;
    }

    console.log(dequeue);
    console.log(storage);
    return val;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
