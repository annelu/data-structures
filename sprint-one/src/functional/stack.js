var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){
    length++
    storage[length] = value;
  };

  instance.pop = function(){
    if (length) {
      var lastIn = storage[length];
      delete storage[length];
      length--
      return lastIn;
    }
  };

  instance.size = function(){
    return length;
  };

  return instance;
};