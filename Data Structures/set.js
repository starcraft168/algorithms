var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage[item] = true;

};

setPrototype.contains = function(item) {
	for(var key in this._storage) {
		if(key === item) {
			return true;
		}
	}
	return false;
};

setPrototype.remove = function(item) {
	for(var key in this._storage) {
		if(key === item) {
			delete this._storage[key];
		}
	}
};



var example = Set();
example.add('hello');
example.add('bye');
console.log(example._storage); // {'hello': true, 'bye': true}