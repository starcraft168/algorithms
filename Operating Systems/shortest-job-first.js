//Shortest Job First Scheduling
//The idea behind the SJF algorithm is to pick the quickest fastest little job that needs to be done, 
//get it out of the way first, and then pick the next smallest fastest job to do next.

//This function takes in an array of batch processes
var shortestJobFirst = function(batch) {
	this.queue = batch;
}

shortestJobFirst.prototype.sort = function() {
	return this.queue.sort(function(a,b) {
		return b - a;
	});
}

shortestJobFirst.prototype.process = function() {
	return this.queue.pop();
}

var test = new shortestJobFirst([2,7,1,10,6]);
console.log(test.sort());
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');

