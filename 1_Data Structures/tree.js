var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	var subRoutine = function(tree) {
		if(tree.value === target) {
			return true;
		}

		for(var i=0; i<tree.children.length; i++) {
			if(tree.children[i].value === target) {
				return true;
			}
			subRoutine(tree.children[i]);
		}
		return false;
	};
	subRoutine(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 O(n) - Linear
 */

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