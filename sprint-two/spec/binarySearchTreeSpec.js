describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree

  it ("should contain value", function(){
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(3);
    console.log(binarySearchTree);
    expect(binarySearchTree.contains(7)).toEqual(true);
  })

});
