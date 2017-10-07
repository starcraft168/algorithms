//Priority Scheduling
//Priority scheduling is a more general case of SJF, in which each job is assigned a priority and the job
//with the highest priority gets scheduled first.

//This function takes in an array of batch processes, where the second number is the priority.
var priorityScheduling = function(batch) {
	this.queue = batch;
}

priorityScheduling.prototype.sort = function() {
	return this.queue.sort(function(a,b) {
		return b[1] - a[1];
	});
}

priorityScheduling.prototype.process = function() {
	return this.queue.pop()[0];
}

var test = new priorityScheduling([[2,2],[7,3],[1,1],[10,5],[6,4]]);
console.log(test.sort());
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');