//Round Robin

//Round robin scheduling is similar to FCFS scheduling, except that CPU bursts are assigned with limits called time quantum.
//When a process is given the CPU, a timer is set for whatever value has been set for a time quantum.
//If the process finishes its burst before the time quantum timer expires, then it is swapped out of the CPU just like the normal FCFS algorithm.
//If the timer goes off first, then the process is swapped out of the CPU and moved to the back end of the ready queue.
//The ready queue is maintained as a circular queue, so when all processes have had a turn, then the scheduler gives the first process another turn, and so on.
//If the quantum is large enough, then RR reduces to the FCFS algorithm

var roundRobin = function(batch) {
	this.queue = batch;
	this.quantum = 3;
}

roundRobin.prototype.sort = function() {
	return this.queue.sort(function(a,b) {
		return b - a;
	});
}


roundRobin.prototype.process = function() {
	if(this.queue.length === 0) {
		console.log('queue empty!');
		return;
	}
	
	if(this.queue[this.queue.length-1] <= this.quantum) {
		return this.queue.pop();
	} else {
		var leftover = this.queue.pop() - this.quantum;
		this.queue.unshift(leftover); //push to the beginning of the queue
		return this.quantum;
	}
}

//Sorted:   [1,2,6,7,10]
//Leftover: [0,0,3,4,7,0,1,4,1,1,0]
//Process:  [1,2,3,3,3,3,3,3,1,3,1]
var test = new roundRobin([2,7,1,10,6]);
console.log(test.sort());
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');
console.log('This process has been complete and took', test.process(), 'minutes');


