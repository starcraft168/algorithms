var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = this.makeNode(value);
  
  if(this.head === null) {
    this.head = newNode;
    return;
  } 
  
  var head = this.head;
  
  //traverses through the linkedlist, starting with the head
  var subRoutine = function(node) {
    if(node.next === null) {
      node.next = newNode;
    } else {
      subRoutine(node.next);
    }
    
  };
  subRoutine(head);
  
  //the tail will always be the last node, or the newly created node
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  var nextNode = this.head.next;
  this.head = nextNode;
};

LinkedList.prototype.contains = function(target) {
  var head = this.head;
  
  var subRoutine = function(node) {
    if(node.value === target) {
      return true;
    } else if (node.next !== null){
      return subRoutine(node.next);
    }
    return false;
  };
  return subRoutine(head);
  
};


LinkedList.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
  
};



var linklist = new LinkedList();
linklist.addToTail(5);
linklist.addToTail(6);
linklist.addToTail(7);
linklist.addToTail(8);
console.log(linklist.head.value);
console.log(linklist.head.next.value);
console.log(linklist.head.next.next.value);
console.log(linklist.head.next.next.next.value);
console.log(linklist.tail.value);

linklist.removeHead();
console.log(linklist.head.value);
console.log(linklist.head.next.value);
console.log(linklist.head.next.next.value);

console.log(linklist.contains(6));

/*
 * Complexity: What is the time complexity of the above functions? Linear
 */
