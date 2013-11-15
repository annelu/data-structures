var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0; 

  return instance;
};

var stackMethods = {

  push:  function(value){
    this.length++
    this.storage[this.length] = value;
  },

  pop: function(){
    if (this.length) {
      var lastIn = this.storage[this.length];
      delete lastIn;
      this.length--;
      return lastIn;
    }
  },

  size:  function(){
    return this.length;
  }
};

