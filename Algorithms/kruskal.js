/*

KRUSKAL'S MINIMUM SPANNING TREE ALGORITHM

Kruskal's Algorithm, as described in CLRS, is directly based on the generic MST algorithm.
It builds the MST in forest. Initially, each vertex is in its own tree in forest. 
Then, the algorithm considers each edge in turn, order by increasing weight. If an edge (u, v) 
connects two different trees, then (u, v) is added to the set of edges of the MST, and two 
trees connected by an edge (u, v) are merged into a single tree. On the other hand, if an edge (u, v) 
connects two vertices in the same tree, then edge (u, v) is discarded.

input:

var sample = {
 A: [['B',2], ['C',3], ['D',3]],
 B: [['A',2], ['C',4], ['E',3]],
 C: [['A',3], ['B',4], ['D',5], ['E',1]],
 D: [['A',3], ['C',5], ['F',7]],
 E: [['B',3], ['C',1], ['F',8]],
 F: [['D',7], ['E',8], ['G',9]]
};

var sample = [['A','B',2], ['A','C',3], ['A','D',3], ['B','C',4], ['B','E',3], ['C','D',5], ['C','E',1],
['D','F',7], ['E','F',8], ['F','G',9]];

output:

{
 A: [['B',2], ['C',3], ['D',3]],
 B: [['A',2]],
 C: [['A',3], ['E',1]],
 D: [['A',3], ['F',7]],
 E: [['C',1]],
 F: [['D',7], ['G',9]]
}

[['E','C',1], ['A','B',2], ['A','C',3], ['A','D',3], ['D','F',7], ['E','F',8], ['F','G',9]]
*/


var kruskal = function(graph) {
	this.graph = this.sortEdgeWeights(graph);
	this.set = this.initializeSet(graph);
	this.result = [];
	this.add(this.graph);
	return this.result;
};

//sort the graph by ascending edge weights - bubble sort implementation - output is an array of edges (sorted graph)
kruskal.prototype.sortEdgeWeights = function(graph) {
	
	var checkSorted = function(graph) {
		for(var i=0; i<(graph.length-1); i++) {
			if(graph[i][2] > graph[i+1][2]) {
				return false;
			}
		}
		return true;
	};

	var subRoutine = function(graph) {
		for(var i=0; i<(graph.length-1); i++) {
			if(graph[i][2] > graph[i+1][2]) {
				var temp = graph[i];
				graph[i] = graph[i+1];
				graph[i+1] = temp;
			}
		}		
	};

	while(!checkSorted(graph)) {
		subRoutine(graph);
	}
   return graph;
 };

//builds the minimum spanning tree by going through each edge of the sorted graph and adding acyclic edges to the result
kruskal.prototype.add = function(graph) {
	for(var i=0; i<graph.length; i++) {
		var edge = graph[i];
		if(!this.edgeInDisjointSet(edge,this.set)) {
			this.result.push(edge);
			this.set = this.mergeEdge(edge,this.set);
		}
	}
};

//determine if an edge is in the disjoint set - ['E','C'] is in disjoint set [['E','C'],['A','B']], but ['A','C'] is not
kruskal.prototype.edgeInDisjointSet = function(edge, set) {
	for(var i=0; i<set.length; i++) {
		var count = 0;
		for(var j=0; j<set[i].length; j++) {
			if(edge[0] === set[i][j] || edge[1] === set[i][j]) {
				count++;
			}
		}
		if(count===2) {
			return true;
		}
	}
	return false;
};

//begin with the set of unconnected nodes in the minimum spanning tree - [['A'],['B'],['C'],['D'],['E'],['F'],['G']]
kruskal.prototype.initializeSet = function(graph) {

	var inArray = function(target, array) {
		for(var i=0; i<array.length; i++) {
			if(target===array[i][0]) {
				return true;
			}
		}
		return false;
	};

	var arr = [];
	for(var i=0; i<graph.length; i++) {
		if(!inArray(graph[i][0], arr)) {
			arr.push([graph[i][0]]);
		}

		if(!inArray(graph[i][1], arr)) {
			arr.push([graph[i][1]]);
		}
	}
	return arr;
};

//merge two disjoint sets when an edge is added - [['A','B'],['C','D'],['E','F']] --> [['A','B','C','D'],['E','F']] for edge ['B','C']
kruskal.prototype.mergeEdge = function(edge, set) {

	var inArray = function(target, array) {
		for(var i=0; i<array.length; i++) {
			if(target === array[i]) {
				return true;
			}
		}
		return false;
	};

	var firstSet; 
	var secondSet;

	for(var i=0; i<set.length; i++) {
		if(inArray(edge[0],set[i])) {
			firstSet = i;
		}

		if(inArray(edge[1], set[i])) {
			secondSet = i;
		}
	}

   var result = [];
	var merged = set[firstSet].concat(set[secondSet]);
   result.push(merged);
     
    for(var j=0; j<set.length; j++) {
        if(j !== firstSet && j !== secondSet) {
        		result.push(set[j]);
        }
    }
    return result;
};


var test = new kruskal(sample);
console.log(test);







