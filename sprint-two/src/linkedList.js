// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    //tail.next = newNode;
    console.log(newNode);
    this[newNode] = true;
    //tail = newNode;
    //if (!head) {
      //head = newNode;
    //}
    console.log(this);
  };

  list.removeHead = function(){
    
  };

  /*list.contains = function(value){
    if(){
      return true;
    } else {
      return false;
    }
  }; */

  return list;
}; 

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
