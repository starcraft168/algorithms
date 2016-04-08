var Queue = function() { //LIFO
	this.storage = {};
	this.index = 0;
	this.counter = 0;
};

Queue.prototype.add = function(item) {
	this.storage[this.index] = item;
	this.index++;

};

Queue.prototype.contains = function(item) {
	for(var key in this.storage) {
		if(this.storage[key] === item) {
			return true;
		}
	}
	return false;
};

Queue.prototype.remove = function() {
	delete this.storage[this.counter];
	this.counter++;
};



var example = new Queue();
example.add('fish'); 
example.add('cat');
example.add('dog');
console.log(example.storage); // {0:'fish', 1:'cat', 2:'dog'}
example.remove();
example.remove();
console.log(example.storage); // {2:'dog'}
example.add('ninja');
console.log(example.storage); // {2:'dog', 3:'ninja'}