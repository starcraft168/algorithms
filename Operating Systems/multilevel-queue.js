//Multi-level Queue

//When processes can be readily categorized, then multiple separate queues can be established, each implementing whatever 
//scheduling algorithm is most appropriate for that type of job, and/or with different parametric adjustments.
//Scheduling must also be done between queues, that is scheduling one queue to get time relative to other queues. 
//Two common options are strict priority ( no job in a lower priority queue runs until all higher priority queues are empty ) 
//and round-robin ( each queue gets a time slice in turn, possibly of different sizes. )