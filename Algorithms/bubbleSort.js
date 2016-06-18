var bubbleSort = function(arr) {
   var checkSorted = function(input) {
   	for(var i=0; input.length; i++) {
   		if(input[i+1] < input[i]) {
   			return false;
   		}
   	}
   	return true;
   };
   
	while(true) {
		if(checkSorted(arr)) {
			return arr;
		}

		for(var i=0; i<arr.length; i++) {
			if(arr[i+1] < arr[i]) {
				var temp = arr[i+1];
				arr[i+1] = arr[i];
				arr[i] = temp;
			}
	   }
	}
};  

var someMoreCodeHere = function() {
	
}
/* 

[2,7,4,1,5,3]
[2,4,1,5,3,7]
[2,1,4,3,5,7]

...

[1,2,3,4,5,7]

Swap each pair of elements until the array is sorted.