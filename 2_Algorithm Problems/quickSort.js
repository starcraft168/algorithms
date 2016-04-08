var quickSort = function(array) {

	var subRoutine = function(arr) {
		if(arr.length <= 1) {
			return arr;
		}
		var pivot = [arr[0]];
		var lower = [];
		var upper = [];
		for(var i=1; i<arr.length; i++) {
			if(arr[i] <= pivot) {
				lower.push(arr[i]);
			} else {
				upper.push(arr[i]);
			}
		}
		return subRoutine(lower).concat(pivot, subRoutine(upper));
	};
	return subRoutine(array);
}; 

/* These both work. Note the explicit return statement in the above. */

var quickSort = function(array) {
    if(array.length <= 1) {
      return array;
    }
    var pivot = [array[0]];
    var lower = [];
    var upper = [];
    for(var i=1; i<array.length; i++) {
        if(array[i] <= pivot) {
            lower.push(array[i]);
        } else {
            upper.push(array[i]);
        }
    }
    return quickSort(lower).concat(pivot, quickSort(upper));
};  

/*

1. Choose the first element as the pivot
2. Put all numbers less than the pivot and greater than the pivot each into its own array.
3. Repeat this process until all the elements are in a subarray, then merge them upward

[5, 3, 4, 9, 1, 7]

[3, 4, 1] 5 [9, 7]   // here 5 is the pivot

[1] 3 [4] // 3 is the pivot --> [1, 3, 4]

[7] 9 // 9 is the pivot --> [7, 9]

[1, 3, 4] 5 [7, 9] --> [1, 3, 4, 5, 7, 9]

