describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList

  it("should have same head and tail the first time it's run", function(){
    linkedList.addToTail(1);
    expect(linkedList.head).toEqual(linkedList.tail);
  });

  it ("should have different head and tail after the first time it's run", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.head).not.toEqual(linkedList.tail);
  });

  it ("should store the second node in the next of the first", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.head.next.value).toEqual(2);
  });

  it ("should store the third node in the next of the first and store the third node as the tail", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.tail.value).toEqual(3);
  });
  
  it ("should have head and tail equal null when a node is added then removed", function(){
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it ("should remove the head when .removeHead is called and return the value of the removed head", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.tail.value).toEqual(3);
  });

  it ("should return true when linkedList has one node that contains the passed in value", function(){
    linkedList.addToTail(1);
    expect(linkedList.contains(1)).toEqual(true);
  });

  it ("should return true when linkedList has multiple nodes, at least one of which contains the passed in value", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.contains(3)).toEqual(true);
  });

  it ("should return false when linkedList doesn't contain the passed in value", function(){});
  
  it ("should return false when linkedList has no nodes", function(){
    expect(linkedList.contains(1)).toEqual(false);
  });

  it ("should return true when linkedList contains a node with the value passed to .contains, and false when it doesn't", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.contains(2)).toEqual(true);
    expect(linkedList.contains(3)).toEqual(true);
    expect(linkedList.contains(4)).toEqual(false);
  });

});
