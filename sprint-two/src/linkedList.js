// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function(){
    if (this.head && this.head === this.tail) {
      var head = this.head;
      this.head = null;
      this.tail = null;
      return head;
    } else {
      removed = this.head.value;
      this.head = this.head.next;
      return removed;
    }
  };

  list.contains = function(value, node, containsNode){
    node = node || list.head;
    containsNode = containsNode || false;
    if (node.value === value) {
      containsNode = true;
    } else {
      this.contains(value, node.next, containsNode);
    }
    return containsNode;
  };
  
  return list;
}; 

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
