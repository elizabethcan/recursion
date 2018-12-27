// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // output: returns an array-like object of all child elements which have all of the given class names

  // document.body selects the whole body
  // element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
  // node.childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0.

  // starting from outermost layer of document check document.body for elements with desired class name
    // var body = document.body
        // check if body.classList.contains(className), if so, push this element to the array (result.push(body))
    // var elementsArr = body.children
        // if elementsArr.length > 0
            // for each element in the array


  // var body = document.body
  // body.classList will give an array of all the classes associated with the body element
  // elementsArr = body.children will give an array of all the elements in the body
  // elementsArr[i] will give an array of the class names associated with that element
  // check each element of this array for a match with the input class
    // if an element matches, push elementsArr[i] to resultArr

  var result = [];
  var currentElement = currentElement || document.body;
  if (currentElement.classList.contains(className)) {
    result.push(currentElement);
  }
  currentElement = currentElement.children;
  // this is the part i want to repeat for every layer of elements
  Array.prototype.forEach.call(currentElement, function(el) {
    // the line below appears on line 31-32
    if(el.classList.contains(className)) {
      result.push(el);
    }
    if(el.children.length > 0) {
      Array.prototype.forEach.call(el.children, function(item) {
        // the line below appears on line 31-32
        if(item.classList.contains(className)) {
          result.push(item);
        }
      });
    }
  });
  
  console.log("result:");
  console.log(result);
  return result;
};
