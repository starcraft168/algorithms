var Stack = function() { //FIFO
	this.storage = {};
	this.index = 0;
};

Stack.prototype.add = function(item) {
	this.storage[this.index] = item;
	this.index++;
};

Stack.prototype.contains = function(item) {
	for(var key in this.storage) {
		if(this.storage[key] === item) {
			return true;
		}
	}
	return false;
};

Stack.prototype.remove = function() {
	this.index--;
	delete this.storage[this.index];
};



var example = new Stack();
example.add('cat');
example.add('fish');
example.add('dog');
console.log(example.storage); //{0:'cat', 1:'fish', 2:'dog'}
example.remove();
console.log(example.storage); //{0:'cat', 1:'fish'}


