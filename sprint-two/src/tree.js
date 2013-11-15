var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if (!this.children)
    this.children = makeNode(value);
};

treeMethods.contains = function(){
  
};

treeMethods.makeNode = function(value){
	var newNode = {};
	newNode.value = value;
	newNode.children = [];
	return newNode;
};
