var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.treeNode = treeMethods.treeNode;
  newTree.parent = null;
  newTree.removeFromParent = treeMethods.removeFromParent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
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

treeMethods.removeFromParent = function(node){
  var parent = node.parent;
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === node){
      parent.children[i].parent = null;
      parent.children[i] = null;
    }
  }
};
