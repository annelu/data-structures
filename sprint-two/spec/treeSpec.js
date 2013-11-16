describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree(1);
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.

  it ("should contain a value when a tree is made with a passed in value", function(){
    expect(tree.value).toEqual(1);
  });

  it ("should add a child node when .addChild is called", function(){
    tree.addChild(1);
    expect(tree.children[0].value).toEqual(1);
  });

  it ("should be able to add child node to child node", function(){
    tree.addChild(2);
    tree.children[0].addChild(3);
    expect(tree.children[0].children[0].value).toEqual(3);
  });

  it ("should check whether node and descendants contain passed in value", function(){
    tree.addChild(2);
    tree.children[0].addChild(3);
    expect(tree.contains(1)).toEqual(true);
    expect(tree.contains(2)).toEqual(true);
    expect(tree.contains(3)).toEqual(true);
    expect(tree.contains(4)).toEqual(false);
  });

});
