var makeBinarySearchTree = function(){
  var instance = Object.create(binaryTreeMethods);
  instance.left;
  instance.right;
  instance.value;

  return instance;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  if (!this.value) {
    this.value = value;
    return;
  }
  if (value > this.value) {
    this.right = this.right || makeBinarySearchTree();
    this.right.insert(value);
  } else if (value < this.value) {
    this.left = this.left || makeBinarySearchTree();
    this.left.insert(value);
  }
};

binaryTreeMethods.contains = function(value){
  if (this.value === value) {
    return true;
  }
  if (this.left) {
    var contains = this.left.contains(value);
    if(contains) {
      return true;
    }
  }
  if (this.right) {
    return this.right.contains(value);
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(){};