var sequentialSearch = function(collection, target) {
	for(var i=0; i<collection.length; i++) {
		if(collection[i] === target) {
			return true
		}
	}
	return false;
}; 

//Takes in a collection as a parameter and returns true/false if the target is in the collection

/*
 * Complexity: What is the time complexity of the above functions?

 Linear O(n) because there's one for loop
 */

