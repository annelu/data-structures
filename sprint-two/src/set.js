var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(string){
  this._storage[string] = true;
};

setPrototype.contains = function(string){
  /*if (this._storage[string]){
    return true;
  } else {
    return false;
  }*/
  return !!this._storage[string];
};

setPrototype.remove = function(string){
  if (this._storage[string]) {
    delete this._storage[string];
  }
};