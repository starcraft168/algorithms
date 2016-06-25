/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
	var obj = {};
	
	function subRoutine(word, string) {
		if(string === '') {
			obj[word] = true;
		}

		for(var i=0; i<string.length; i++) {
			subRoutine(word + string[i], string.slice(0, i) + string.slice(i+1, string.length + 1));
		}
	}
    subRoutine('',string);

	return Object.keys(obj);
};
      
console.log(allAnagrams('abc'));

/*
Explanation:

Basically each letter in the string is getting popped out and added to the word.
Each letter in the resulting string is getting popped out and added to the word.
This recursion happens over and over again until the string is empty, which ends 
the recursion. And then we can return the word.
*/