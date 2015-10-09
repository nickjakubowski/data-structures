

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.index = 0;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var obj = {};
  obj.value = node;
  obj.links = [];
  this[this.index] = obj;
  this.index++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (this[key].value === node ) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (this[key].value === node) {
      delete this[key];
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (this[key].value === fromNode) {
      if (this[key].links.indexOf(toNode) > -1) {
        return true;
      }
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (this[key].value === fromNode) {
      this[key].links.push(toNode)
    } else if (this[key].value === toNode) {
      this[key].links.push(fromNode);
    }
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (this[key].value === fromNode) {
      this[key].links.splice(this[key].links.indexOf(toNode),1);
    } else if (this[key].value === toNode) {
      this[key].links.splice(this[key].links.indexOf(fromNode), 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (this[key].value) {
      cb(this[key].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


