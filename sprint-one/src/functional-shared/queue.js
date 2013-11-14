var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.qStart = 0;
  instance.qEnd = 0;

  instance.size = queueMethods.size;
  instance.enqueue = queueMethods.enqueue;
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.qEnd] = value;
    this.qEnd++;
  },

  /*dequeue: function(){
    if (qEnd - qStart) {
      var firstIn = storage[qStart];
      delete storage[qStart];
      qStart++
      return firstIn;
    }
  },*/

  size: function(){
    return this.qEnd - this.qStart;
  }
};
