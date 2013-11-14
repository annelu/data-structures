var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.length = 0; 

  instance.size = stackMethods.size;
  instance.push = stackMethods.push;
  return instance;
};

var stackMethods = {
  push: function(value){
    this.length++
    this.storage[this.length] = value;
  },

  /*pop = function(){
    if (length) {
      var lastIn = storage[length];
      delete storage[length];
      length--
      return lastIn;
    }
  }; */

  size:  function(){
    return this.length;
  }
};
