//First Come First Serve Scheduling

//FCFS is very simple - Just a FIFO queue, like customers waiting in line at the bank or the post office or at a copying machine.
//Unfortunately, however, FCFS can yield some very long average wait times, particularly if the first process to get there takes a
//long time. 

//This function takes in an array of batch processes
var firstComeFirstServe = function(batch) {
	this.queue = batch;
}

firstComeFirstServe.prototype.process = function() {
	return this.queue.pop();
}

var test = new firstComeFirstServe([2,7,1,10,6]);
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');