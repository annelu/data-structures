var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this.qStart = 0;
  this.qEnd = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.qEnd++] = value;
};

Queue.prototype.dequeue = function(){
  if (this.qEnd - this.qStart) {
    var firstIn = this.storage[this.qStart++];
    delete firstIn;
    return firstIn;
  }
};

Queue.prototype.size = function(){
  return this.qEnd - this.qStart;
};
