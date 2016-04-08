var topologicalSort = function(adjacencyList) {
	var result = [];
	var length = Object.keys(adjacencyList).length;

	var topSort = function(obj) {
		for(var key in obj) {
			if(obj[key].length === 0 && !(obj[key] in result)) {
				result.push(key);
            delete obj[key];
				filter(key, obj);
            return;
			}
		}
	};

	var filter = function(target, obj) {
		for(var key in obj) {
			for(var i=0; i<obj[key].length; i++) {
				if(obj[key][i] === target) {
					obj[key].splice(i,1);
				}
			}
		}
	};
   
   for(var i=0; i<length; i++) {
	   topSort(adjacencyList);
   }
	return result;
};



/*

Find a vertex with nothing going into it. Remove such vertex. Repeat.

C------->D-------->E
|      /^		  /^
|     /         /  
|	 ^B^\		   /
|  /    \	  /
V /      \   /
A--------->F

Solution: [C, A, F, B, D, E]

Adjacency List Representation

{
A: ['C'],
B: ['A', 'F'],
C: [],
D: ['B', 'C'],
E: ['D', 'F'],
F: ['A'] 
}

*/
