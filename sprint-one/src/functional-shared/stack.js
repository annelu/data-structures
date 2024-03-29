var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.length = 0; 

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value){
    this.length++
    this.storage[this.length] = value;
  },

  pop: function(){
    if (this.length) {
      var lastIn = this.storage[this.length];
      delete this.storage[this.length];
      this.length--;
      return lastIn;
    }
  },

  size:  function(){
    return this.length;
  }
};
