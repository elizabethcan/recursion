// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentElement, result) {
  var result = result || [];
  var currentElement = currentElement || document.body;
  if (currentElement.classList.contains(className)) {
      result.push(currentElement);
  }
  if (currentElement.children.length > 0) {
    Array.prototype.forEach.call(currentElement.children, function(el) {

      getElementsByClassName(className, el, result);
      
      //this block is what can be cut out with recursion
      /*if(el.classList.contains(className)) {
        result.push(el);
      }
      if(el.children.length > 0) {
        Array.prototype.forEach.call(el.children, function(el) {
          if(el.classList.contains(className)) {
            result.push(el);
          }
          if(el.children.length > 0) {
            Array.prototype.forEach.call(el.children, function(el) {
              if(el.classList.contains(className)) {
                result.push(el);
              }
            });
          }
        });
      }*/


    });
  }
  return result;
};
