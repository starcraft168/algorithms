/*

Items with a high priority code are dequeued before items with a lower priority code,
and items that have the same priority code are dequeued on a first-come, first-served,
or first-in, first-out, basis.


*/


var priorityQueue = function() {
	this.queue = [];

};


priorityQueue.prototype.insert = function(item, value) {
	this.queue.push([item, value]);

};

priorityQueue.prototype.dequeue = function() {
	//run a quick loop to extract the highest value in the queue

	var highestValue = function(queue) {
		var temp = 0;
		for(var i=0; i<queue.length; i++) {
			if(queue[i][1] >= temp) {
				temp = queue[i][1];
			}
		}
		return temp;		
	};

	var result = [];
	var temp = highestValue(this.queue);
	//run another loop to push all the items with that value into a result array
	for(var j=0; j<this.queue.length; j++) {
		if(this.queue[j][1] === temp) {
			result.push(this.queue[j]);
			this.queue.splice(j,1);
		}
	}
   return result;
};

var test = new priorityQueue();
test.insert('asdf',1);
test.insert('sadf',2);
test.insert('asd',5);
test.insert('sa',3);
test.insert('as',5);
console.log(test.queue);
console.log(test.dequeue());
