var BinarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	//
};


BinarySearchTree.prototype.insert = function(node) {
	var subRoutine = function(node) {
		if(this.right === null && node.value > this.value) {
			this.right = node;
		} else if(this.left === null && node.value < this.value) {
			this.left = node;
		} else if(this.right !== null && node.value > this.value) {
			subRoutine(this.right);
		} else if(this.left !== null && node.value < this.value) {
			subRoutine(this.left);
		}		
	}
	subRoutine(this);
};

BinarySearchTree.prototype.contains = function(node) {
	var subRoutine = function() {
		if(this.value === node.value) {
			return true;
		} else if(node.value > this.value && this.right === null) {
			return false;
		} else if(node.value < this.value && this.left === null) {
			return false;
		} else if(node.value > this.value && this.right !== null) {
			subRoutine(this.right);
		} else if(node.value < this.value && this.left !== null) {
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
