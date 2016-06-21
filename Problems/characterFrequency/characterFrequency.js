/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {

  	var countObj = countCharacters(string);
	var array = transformObject(countObj);
	var result = sortArray(array);
  	return result;

	function countCharacters(string) {
		var obj = {};
		for(var i=0; i<string.length; i++) {
			if(!(string[i] in obj)) {
				obj[string[i]] = 1;
			} else {
				obj[string[i]]++;
			}
		}
		return obj;
	}

	function transformObject(obj) {
		var arr = [];
		for(var key in obj) {	
			arr.push([key, obj[key]]);
		}
		return arr;
	}

	function sortArray(array) {
		while(!sorted(array)) {
			for(var i=0; i<(array.length-1); i++) {
				if(array[i][1] < array[i+1][1]) {
					var temp = array[i+1];
					array[i+1] = array[i];
					array[i] = temp;
				}				
			}
		}
		return array;
	}

	function sorted(array) {
		for(var i=0; i<(array.length-1); i++) {
			if(array[i][1] < array[i+1][1]) {
				return false;
			}
		}
		return true;
	}
    
};