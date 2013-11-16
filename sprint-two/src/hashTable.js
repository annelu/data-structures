var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storeValue = this._storage.get(i);
  if (!storeValue) {
    var firstV = [[k, v]];
    this._storage.set(i, firstV);
  } else {
    storeValue.push([k, v]);
    this._storage.set(i, storeValue);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var indexArray = this._storage.get(i);
  for (var j = 0; j < indexArray.length; j++) {
    if (indexArray[j][0] === k) {
      return indexArray[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var indexArray = this._storage.get(i);
  for (var j = 0; j < indexArray.length; j++) {
    if (indexArray[j][0] === k) {
      var reducedArray = indexArray;
      reducedArray.splice(j, 1);
      this._storage.set(i, reducedArray);
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
