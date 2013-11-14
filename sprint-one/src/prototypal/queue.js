var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.qStart = 0;
  instance.qEnd = 0;

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