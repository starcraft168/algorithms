var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value); //create a new node

    if(list.tail !== null) {
      var prevNode = list.tail; //if the tail is already pointing at a previous node,
      prevNode.next = node; //then make the previous node point at the newly created node
    }

    list.tail = node; //point the tail to the newly created node

    if(list.head === null) {
      list.head = node; //if the head is pointing to null, then make it point to the newly created node
    }
  };

  list.removeHead = function() {
    if(list.head !== null) {
      var currentNode = list.head; //if the head is already pointing at a node, 
      list.head = currentNode.next; //then make the head point at the node's next node
    }
  };

  list.contains = function(target) {
    var subRoutine = function(node) {
      if(node.value === target) {
        return true;
      }
      if(node.next === null) {
        return false;
      }
      subRoutine(node.next);      
    }
    subRoutine(list.head); //start with the head and start traversing the LinkedList
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
