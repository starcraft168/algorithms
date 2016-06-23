/**
 * Write a function that, given a string, finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!

  function check(string) {
  		var count = 1;
  		var i = 0;
      var tracker = {};
    
  		while(i<string.length) {
	  		if(string[i] === string[i+1]) {
	  			count++;
	  			i++;
	  		} else {
	  			tracker[string[i]] = count;
	  			count = 1;
            i++;
	  		}
  		}
  		return tracker;
  }

  function computeTracker(tracker) {
  		var count = 0;
  		var letter = '';
  		var result = [];
  		for(var key in tracker) {
  			if(tracker[key] > count) {
  				count = tracker[key];
  				letter = key;
  			}
  		}
      
     console.log(letter);
     console.log(count);

  		var first = string.indexOf(letter);
  		var last = first + count - 1;
  		result.push(first);
  		result.push(last);
      console.log(first, last);
  		return result;
  }

  var tracker = check(string);
  var result = computeTracker(tracker);
  return result;


};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
  //
};
