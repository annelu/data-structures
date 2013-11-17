describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2', k1 = "k1", k2 = "k2";
    hashTable.insert(k1, v1);
    hashTable.insert(k2, v2);
    expect(hashTable.retrieve(k1)).toEqual(v1);
    expect(hashTable.retrieve(k2)).toEqual(v2);
  });

  // add more tests!

  it ("should remove first key", function(){
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2', k1 = "k1", k2 = "k2";
    hashTable.insert(k1, v1);
    hashTable.insert(k2, v2);
    hashTable.remove(k1);
    expect(hashTable.retrieve(k2)).toEqual(v2);
    expect(hashTable.retrieve(k1)).toEqual(undefined);
  })

  it ("should double in size as soon as 75 percent of the spaces have been filled", function(){
    hashTable.insert('k1', 'v1');
    hashTable.insert('k2', 'v2');
    hashTable.insert('k3', 'v3');
    hashTable.insert('k4', 'v4');
    hashTable.insert('k5', 'v5');
    hashTable.insert('k6', 'v6');
    hashTable.insert('k7', 'v7');
    expect(hashTable._limit).toEqual(16);
  });

  it ("should shrink when space usage falls below 25 percent", function(){
    hashTable.insert('k1', 'v1');
    hashTable.insert('k2', 'v2');
    hashTable.remove('k2');
    expect(hashTable._limit).toEqual(4);
  });

});
