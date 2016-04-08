var BinarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};


BinarySearchTree.prototype.insert = function(tree) {
	var subRoutine = function(tree) {
		if(this.right === null && tree.value > this.value) {
			this.right = tree;
		} else if(this.left === null && tree.value < this.value) {
			this.left = tree;
		} else if(this.right !== null && tree.value > this.value) {
			subRoutine(this.right);
		} else if(this.left !== null && tree.value < this.value) {
			subRoutine(this.left);
		}		
	}
	subRoutine(this);
};

BinarySearchTree.prototype.contains = function(tree) {
	var subRoutine = function() {
		if(this.value === tree.value) {
			return true;
		} else if(tree.value > this.value && this.right === null) {
			return false;
		} else if(tree.value < this.value && this.left === null) {
			return false;
		} else if(tree.value > this.value && this.right !== null) {
			subRoutine(this.right);
		} else if(tree.value < this.value && this.left !== null) {
			subRoutine(this.left);
		}
	}
	subRoutine(this);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {	
	var subRoutine = function() {
		if(this.value !== null) {
			callback(this.value);
		} 
		if(this.right !== null && this.left == null) {
			subRoutine(this.right);
		}
		if(this.right !== null && this.left !== null) {
			subRoutine(this.right); //fix this
			subRoutine(this.left);
		}
		if(this.right === null && this.left !== null) {
			subRoutine(this.left);
		}
	}
	subRoutine(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
