var Heap = function(value){
	this.value = value;
	this.children = [];
};

Heap.prototype.insert = function(tree) {
	var subRoutine = function(this) {
		if(tree.value < this.value && this.children.length < 2) {
			this.children.push(tree);
			return;
		} 
		if(tree.value < this.value && this.children.length === 2) {
			for(var i=0; i<this.children.length; i++) {
				subRoutine(this.children[i]);
			}
		}
	}
	subRoutine(this);
};

Heap.prototype.contains = function(target) {
	var subRoutine = function(this) {
		if(this.value === target) {
			return true;
		}
		if(this.children.length) {
			for(var i=0; i<this.children.length; i++) {
				subRoutine(this.children[i]);
			}			
		}
	}
	subRoutine(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
