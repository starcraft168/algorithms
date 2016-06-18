/* STAGING HERE
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); l// [3]
 */

var binarySearch = function (array, target) {
  // your code here!
  var top = array.length-1;
  var bottom = 0;
  var middle = Math.floor((top + bottom)/2); // 6

  var subRoutine = function() {
	  if(array[middle] === target) {
	  		return middle;
	  } else if(array[middle] < target) { //target is greater than middle
	  		middle++;
	  		bottom = middle;
	  		middle = Math.floor((top + bottom)/2);

	  } else if(array[middle] > target) { //target is less tha middle
	  		middle--;
	  		top = middle;
	  		middle = Math.floor((top + bottom)/2);
	  }
	  return subRoutine(); //in JavaScript, if you want to return a value, you need an explicit return statement 	
  }; //otherwise it may result in undefined
  return subRoutine();
};


/*

The list must first be sorted. 
Let's say the target was 10.

[0,1,2,3,4,5,6,7,8,9,10*,11,12]

The middle number is 6. Is 6 === 10 ? No. 
But 6 < 10, so we get rid of the bottom half.

[7,8,9,10,11,12]

The middle number is 9. Is 9 === 10? No.
But 9 < 10, so we get rid of the bottom half.

[10,11,12]

The middle number is 11. Is 10 === 11? No.
But 11 > 10, so we get rid of the top half.

[10]

The middle number is 10. Is 10 === 10? Yes.
Return the index of 10 in array, which is 10!


