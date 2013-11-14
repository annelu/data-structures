var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.qStart = 0;
  instance.qEnd = 0;

  instance.size = queueMethods.size;
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.qEnd] = value;
    this.qEnd++;
  },

  dequeue: function(){
    if (this.qEnd - this.qStart) {
      var firstIn = this.storage[this.qStart];
      delete this.storage[this.qStart];
      this.qStart++
      return firstIn;
    }
  },

  size: function(){
    return this.qEnd - this.qStart;
  }
};
