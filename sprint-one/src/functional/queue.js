var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var qStart = 0;
  var qEnd = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[qEnd] = value;
    qEnd++;
  };

  instance.dequeue = function(){
  };

  instance.size = function(){
    return qEnd - qStart;
  };

  return instance;
};
