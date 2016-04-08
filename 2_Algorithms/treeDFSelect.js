/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
  var results = [];
  var subRoutine = function(node) {
    if(filter(node.value)) {
      results.push(node.value);
    }

    for(var i=0; node.children.length; i++) {
      subRoutine(node.children[i]));
    }
  }
  subRoutine(this);
  return results;
};



/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};



//Basic Tree Structure
var Tree = function(value) {
  this.value = value;
  this.children = [];
};


Tree.prototype.addNode = function(value) {
  var node = new Tree(value);
  this.children.push(node);
};

Tree.prototype.filter = function(node) {
  if(node.value % 2 === 0) {
    return true;
  }
};

Tree.prototype.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  
  for(var i=0; i<this.children.length; i++) {
    if(this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

Tree.prototype.traverse = function() {
  var elements = [];
  var subRoutine = function(node) {
    if(node.filter(node)) {
      elements.push(node.value);
    }

    for(var i=0; i<node.children.length; i++) {
      subRoutine(node.children[i]);
    }
  };
  subRoutine(this);
  return elements;
};


var smallTree = new Tree(10);
smallTree.addNode(1);
smallTree.addNode(2);
smallTree.addNode(3);
smallTree.children[0].addNode(5);
smallTree.children[1].addNode(6);
smallTree.children[1].addNode(7);

console.log(smallTree.contains(7));

console.log(smallTree.traverse());





















