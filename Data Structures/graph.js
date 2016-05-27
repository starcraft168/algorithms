var Graph = function(){
	this.lattice = {};
};

Graph.prototype.addNode = function(node){
	if(!(node in this.lattice)) {
		this.lattice[node] = [];		
	}
};

Graph.prototype.contains = function(node){
	for(var key in this.lattice) {
		if(key === node) {
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for(var key in this.lattice) {
		if(key === node) {
			delete this.lattice[key];
		}
	}

	for(var key in this.lattice) {
		for(var i=0; i<this.lattice[key].length; i++) {
			if(this.lattice[key][i] === node) {
				this.lattice[key].splice(i,1); 
			}
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for(var i=0; i<this.lattice[fromNode].length; i++) {
		if(this.lattice[fromNode][i] === toNode) {
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.lattice[fromNode].push(toNode);
	this.lattice[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for(var i=0; i<this.lattice[fromNode].length; i++) {
		if(this.lattice[fromNode][i] === toNode) {
			this.lattice[fromNode].splice(i,1);
		}
	}

	for(var i=0; i<this.lattice[toNode].length; i++) {
		if(this.lattice[toNode][i] === fromNode) {
			this.lattice[toNode].splice(i,1);
		}
	}	
};

Graph.prototype.forEachNode = function(callback){
	for(var key in this.lattice) {
		callback(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n) - Linear and O(n^2)- quadratic
 */



