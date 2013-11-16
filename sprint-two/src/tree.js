var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.treeNode = treeMethods.treeNode;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(val){
  var response = false;
  var searchTree = function(val, node) {
    if (node.value === val){
      response = true;
      return;
    }
  
    if(node.children.length === 0) {
     return;
    }

    for(var i = 0; i < node.children.length; i++){
      return searchTree(val, node.children[i]);
    }
  };

  searchTree(val, this);
  return response;
};
