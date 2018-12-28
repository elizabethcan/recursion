// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentElement) {
  var result = [];
  var currentElement = currentElement || document.body;
  if (currentElement.classList.contains(className)) {
      result.push(currentElement);
  }
  if (currentElement.children.length > 0) {
    Array.prototype.forEach.call(currentElement.children, function(el) {
      result = result.concat(getElementsByClassName(className, el));
    });
  }
  return result;
};
