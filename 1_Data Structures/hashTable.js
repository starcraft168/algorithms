/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  result.storage = [];
  result.storageLimit = 1000;
  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    if(this.storage[index] === undefined) {
      this.storage[index] = [[key,value]]; //if the bucket located at index is undefined, then set it equal to [[key, value]]
    }

    var bool = true;
    var counter = 0;
    for(var i=0; i<this.storage[index].length; i++) {
      if(this.storage[index][i][1] === value) { //determine if any of the values in the bucket are equal to the [key,value] argument
        bool = false; //set bool to false if they are equal
        counter = i; 
      }
    }

    if(bool) {
      this.storage[index].push([key,value]); //if the values are not equal, then push the [key,value] into the bucket
    } else {
      this.storage[index][counter] = [key,value]; //if the values are equal, then update the [key,value]
    }
  };

  result.retrieve = function(key, value) {
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    for(var i=0; i<this.storage[index].length; i++) {
      if(this.storage[index][i][1] === value) {
        return this.storage[index][i];
      }
    }
    return null; //return null if the [key,value] pair does not exist
  };

  result.remove = function(key, value) {
    var index = getIndexBelowMaxForKey(key, this.storageLimit);
    for(var i=0; i<this.storage[index].length; i++) {
      if(this.storage[index][i][1] === value) {
        this.storage[index].splice(i,1);
      }
    }
  };
  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


var example = makeHashTable();
example.insert('hi','son');
example.insert('hi','bye');
example.remove('hi','son');
console.log(example.storage);

/*
Hash Table - how to handle collisions

Assume that
hash(car) = 236;
hash(motorcycle) = 236;

If two pairs with different keys and different values hash to the same number, then we push into the array.

[…, [ [car, blue], [motorcycle, red] ], [train, pink], … ]


If two pairs with different keys but the same value hash to the same number, then we update the array.

[…, [ [car, blue] ], [train, pink], … ]

If you want to push in [motorcycle, blue], it then becomes:

[…, [ [motorcycle, blue] ], [train, pink], … ]


*/