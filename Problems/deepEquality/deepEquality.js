/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  var arr = [];
  
  function check(val) {
    for(var key in val) {
      if(typeof val[key] === 'object') {
        check(val[key]);
      } else {
        arr.push(val[key]);
      }
    }
  }

  function checkArrays(arr1, arr2) {
    for(var i=0; i<arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  checkArrays(arr1, arr2);
  check(apple);
  return arr;

};

// console.log(deepEquals({a:1, b: {c:3}}, {a:1, b: {c:3}}));
// console.log(deepEquals({a:1, b: {c:5}}, {a:1, b: {c:6}}));
console.log(deepEquals({a:1, b: {c:3}}));
