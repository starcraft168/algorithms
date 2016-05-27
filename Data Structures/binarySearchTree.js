var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var node = new BinarySearchTree(value);
  
  if(node.value === this.value) {
    return;
  } else if(node.value > this.value && this.right === null) {
    this.right = node;
  } else if(node.value < this.value && this.left === null) {
    this.left = node;
  } else if(node.value > this.value && this.right !== null) {
    this.right.insert(value);
  } else if(node.value < this.value && this.left !== null) {
    this.left.insert(value);
  }
};

BinarySearchTree.prototype.traverse = function(target) {
  if(this.value === target) {
    return true;
  } else if(target > this.value && this.right === null) {
    return false; //instead of setting this to another node, simply return false!
  } else if(target < this.value && this.left === null) {
    return false;
  } else if(target > this.value && this.right !== null) {
    return this.right.traverse(target);
  } else if(target < this.value && this.left !== null) {
    return this.left.traverse(target);
  }
};

var tree = new BinarySearchTree(8);
tree.insert(3);
tree.insert(10);
tree.insert(18);
tree.insert(13);
console.log(tree.value);
console.log(tree.right.value);
console.log(tree.left.value);
console.log(tree.right.right.value);
console.log(tree.right.right.left.value);
console.log(tree.traverse(15)); //false
console.log(tree.traverse(18)); //true


