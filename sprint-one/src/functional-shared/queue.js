var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.qStart = 0;
  instance.qEnd = 0;

  instance.size = queueMethods.size;
  return instance;
};

var queueMethods = {
  /*enqueue: function(value){
    storage[qEnd] = value;
    qEnd++;
  },

  dequeue: function(){
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
