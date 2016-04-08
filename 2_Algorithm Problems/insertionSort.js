/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
*/

var insertionSort = function(array) {
	//inserts an element into a sortedArray in the proper place
	var insertSorted = function(element, sortedArray) {
		for(var j=0; j<sortedArray.length; j++) {
			if(element < sortedArray[j]) {
				sortedArray.splice(j,0, element); 
				return;
			}
		}
		sortedArray.push(element); 
	}; 

	var sorted = [];
	for(var i=0; i<array.length; i++) { //loops through each element and puts into the sorted array
		insertSorted(array[i],sorted);
	}
   return sorted;
};

/*
Insertion sort iterates through the array, selects the next element in the unsorted portion, and
inserts that element in the appropriate spot in the sorted portion.

[2, 7, 4, 1, 5, 3]
[2, 7, 4, 1, 5, 3]
[2, 4, 7, 1, 5, 3]
[1, 2, 4, 7, 5, 3]
[1, 2, 4, 5, 7, 3]
[1, 2, 3, 4, 5, 7]

SELECTION SORT chooses the smallest element and swaps it with the last element in the sorted list,
whereas INSERTION SORT chooses selects the next element in the unsorted portion, and
inserts that element in the appropriate spot in the sorted portion.




