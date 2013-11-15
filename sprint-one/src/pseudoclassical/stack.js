var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push =  function(value){
  this.storage[++this.length] = value;
};

Stack.prototype.pop = function(){
  if (this.length) {
    var lastIn = this.storage[this.length];
    delete lastIn;
    this.length--;
    return lastIn;
  }
};

Stack.prototype.size = function(){
    return this.length;
};
