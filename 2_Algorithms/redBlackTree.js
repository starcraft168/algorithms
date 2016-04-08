var redBlackTree = function(value, color) {
	this.rootNode = this.createNode(value,color);
	this.rootNode.left = null;
	this.rootNode.right = null;

};

redBlackTree.prototype.add(node) {
	if(node.value < this.rootNode.value) {
		this.rootNode.left = this.createNode(node.value, node.color);
	} else {
		this.rootNode.right = this.createNode(node.value, node.color);
	}
};

redBlackTree.prototype.traverse() {

};

redBlackTree.prototype.createNode = function(value, color) {
	var node = {};
	node.value = value;
	node.color = color;
	return node;
};

