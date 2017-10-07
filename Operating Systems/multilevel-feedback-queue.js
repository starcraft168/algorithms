//Multilevel Feedback Queue Scheduling

//Multilevel feedback queue scheduling is similar to the ordinary multilevel queue scheduling described above, except jobs 
//may be moved from one queue to another for a variety of reasons:

//If the characteristics of a job change between CPU-intensive and I/O intensive, then it may be appropriate to switch a job from 
//one queue to another.
//Aging can also be incorporated, so that a job that has waited for a long time can get bumped up into a higher priority queue for 
//a while.