var selectionSort = function(array) {
	var checkSorted = function(arr) {
		var bool = true;
		for(var i=0; i<arr.length; i++) {
			if(arr[i] > arr[i+1]) {
				bool = false;
			}
		}
		return bool;
	};

	var counter = 0;
	while(!checkSorted(array)) {

		//finds the smallest number in the array
		var min = array[counter];
		var index = 0;
		for(var j=counter; j<array.length; j++) {
			if(array[j] < min) {
				min = array[j];
				index = j;
			}
		}

		//swaps the smallest number with the beginning number
		var tmp = array[counter];
		array[counter] = min;
		array[index] = tmp;
		counter++;		
	}
	return array;
}; 


/*

Somewhat similar to insertion sort - there is a sorted and unsorted portion

Selection Sort iterates through the unsorted list, finds the lowest element,
and swaps it with the element in the beginning of the unsorted list

The swapped element turns into a sorted list that trails behind the unsorted list

[23, 42, 4, 16, 8, 15]
[4, 42, 23, 16, 8, 15]
[4, 8, 23, 16, 42, 15]
[4, 8, 15, 16, 42, 23]
[4, 8, 15, 16, 23, 42]

SELECTION SORT chooses the smallest element and swaps it with the last element in the sorted list,
whereas INSERTION SORT chooses selects the next element in the unsorted portion, and
inserts that element in the appropriate spot in the sorted portion.

*/

