/*

DIJKSTRA'S SHORTEST PATH ALGORITHM

1. Find the node with the lowest score (R=0) in the priority queue (distanceScores). This is the root node.
2. For each neighboring node, assign it a score equal to the root node's score + edge weight if it is lower than
   the neighboring node's current score. (tentative distance)
3. Repeat

Priority Queue is the distanceScores chart, which is initialized to Infinity and R=0
Visited edges are kept track of by removing an edge from the graph each time it has been used to calculate the tentative distance.
Visited nodes are kept track of by using a set - each time it has been visited, we remove the node from the set.

Input: Edge list undirected graph with varying edge weights

var sample = [['R','A',3],['R','B',9],['A','B',2],['A','C',1],['A','D',7],['C','D',3],['B','D',6],['B','E',4],['D','E',1]];

Output: Single shortest path

var distanceScores = {
  A: Infinity,
  B: Infinity,
  C: Infinity,
  D: Infinity,
  E: Infinity,
  R: 0
};

var parentTree = {
  A: null,
  B: null,
  C: null,
  D: null,
  E: null
};

*/

var dijkstra = function(start, end, graph) {
	this.graph = graph;
	this.distanceScores = this.createChart(graph, 'distance', start);
	this.parentTree = this.createChart(graph, 'parent', start);
	this.set = this.grabNodes(graph);

    while(this.set.length > 0) {
		var target = this.findLowestScoreNode(this.distanceScores, this.set);
		this.iterate(target, this.graph, this.distanceScores, this.parentTree);
		this.removeNode(target,this.set);
    }
        
	return this.path(start,end,this.parentTree);
};

//returns an array of the sequence of the shorest path to take from start to end
dijkstra.prototype.path = function(start, end, obj) {
  var arr = [];
  arr.push(end); 
  var target = obj[end]; 
  arr.push(target); 
  
  while(target !== start) {
    target = obj[target]; 
    arr.push(target);
  }
  return arr.reverse();
};

//creates a distance/parent score chart and assigns each node (key) an initial value of Infinity
dijkstra.prototype.createChart = function(graph, string, start) {
	var obj = {};
	for(var i=0; i<graph.length; i++) {
		var node1 = graph[i][0];
		var node2 = graph[i][1];
		if(string ==='distance') {
			obj[node1] = Infinity;
			obj[node2] = Infinity;
		} else {
			obj[node1] = null;
			obj[node2] = null;
		}
	}

	if(string === 'distance') {
		obj[start] = 0;
	} else {
		delete obj[start];
	}
	return obj;
};


//finds the node with the lowest score in the distanceScores chart that is in pqueue
dijkstra.prototype.findLowestScoreNode = function(distanceScores, array) {
    var inArray = function(target, array) {
      for(var i=0; i<array.length; i++) {
        if(target === array[i]) {
          return true;
        }
      }
      return false;
    };
  
	var temp = Infinity;
	for(var key in distanceScores) {
		if(distanceScores[key]<temp && inArray(key,array)) {
			temp = distanceScores[key];
		}
	}
	for(var key in distanceScores) {
		if(distanceScores[key] === temp && inArray(key,array)) {
			return key;
		}
	}
};

dijkstra.prototype.iterate = function(node, graph, distanceScores, parentTree) {
	//[['R','A',3],['R','B',9]] for node 'R'
	var getNeighbors = function(node, graph) {
		var neighbors = [];
		for(var i=0; i<graph.length; i++) {
			if(graph[i][0]===node || graph[i][1] === node) {
				neighbors.push(graph[i]);
			}
		}
		return neighbors;
	};

	var neighborNodes = getNeighbors(node, graph);

	//calculate the tentative distance and the parent tree
	for(var i=0; i<neighborNodes.length; i++) {
		var neighbor1 = neighborNodes[i][0];
		var neighbor2 = neighborNodes[i][1];
		var edgeWeight = neighborNodes[i][2];
		var tentativeDistance = distanceScores[node] + edgeWeight;

		if(neighbor1!==node) {
			if(tentativeDistance < distanceScores[neighbor1]) {
				distanceScores[neighbor1] = tentativeDistance;
				parentTree[neighbor1] = node;
			}
			
		}

		if(neighbor2!==node) {
			if(tentativeDistance <distanceScores[neighbor2]) {
				distanceScores[neighbor2] = tentativeDistance;
				parentTree[neighbor2] = node;
			}
			
		}
	}
	//remove edges from the graph with a target node in it - this means we already visited the edge
	var removeEdge = function(node, graph) {
		for(var i=0; i<graph.length; i++) {
			if(node === graph[i][0] || node === graph[i][1]) {
				graph.splice(i,1);
			}
		}
		for(var i=0; i<graph.length; i++) {
			if(node === graph[i][0] || node === graph[i][1]) {
				graph.splice(i,1);
			}
		}
	};

	removeEdge(node, graph);

};

//return an array of all the nodes in the graph
dijkstra.prototype.grabNodes = function(graph) {
	var nodes = Object.keys(this.createChart(graph));
	return nodes;
};

//remove the node from the set
dijkstra.prototype.removeNode = function(node, array) {
	for(var i=0; i<array.length; i++) {
		if(array[i]===node) {
			array.splice(i,1);
		}
	}
	return array;
};


var test = new dijkstra('R','E',sample);
console.log(test);










