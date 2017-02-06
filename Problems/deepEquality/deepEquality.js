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

  var arr1 = [];
  var arr2 = [];
  function flatten1(val) {
    for(var key in val) {
      if(val[key] === undefined) {
        return;
      }
      if(typeof val[key] === 'object') {
        flatten1(val[key]);
      } else {
        arr1.push(val[key]);
      }
    }
  }

  function flatten2(val) {
    for(var key in val) {
      if(typeof val[key] === 'object') {
        flatten2(val[key]);
      } else {
        arr2.push(val[key]);
      }
    }
  }

  function compareArrays(arr1, arr2) {
    for(var i=0; i<arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  flatten1(apple);
  flatten2(orange);

  console.log(arr1);
  console.log(arr2);

  return compareArrays(arr1, arr2);
};
console.log(deepEquals({a:1, b: {c:3}}, {a:1, b: {c:3}}));
console.log(deepEquals({a:1, b: {c:5}}, {a:1, b: {c:6}}));

