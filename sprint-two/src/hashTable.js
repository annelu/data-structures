var HashTable = function(){
  this._limit = 8;
  this.size = 0;
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
  var bucket = this._storage.get(i) || [];

  for (var j = 0; j < bucket.length; j++) {
    var pair = bucket[j]
    if (pair[0] === k) {
      pair[1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  this.size++; 
  this._storage.set(i, bucket);
  if (this.size >= this._limit * .75 ) {
    this.resize(this._limit * 2);
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
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var indexArray = this._storage.get(i);
  for (var j = 0; j < indexArray.length; j++) {
    if (indexArray[j][0] === k) {
      this.size--;
      indexArray.splice(j, 1);
      if (this.size * 0.25 <= this._limit) {
        this.resize(this._limit / 2);
      }
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(newLimit);
  var that = this;
  this._limit = newLimit;
  this.size = 0;

  oldStorage.each(function(element, index){
    if (!element) {
      return;
    }
    for (var i = 0; i < element.length; i++) {
      var key = element[i][0];
      var value = element[i][1];
      that.insert(key, value);
    }
  });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
