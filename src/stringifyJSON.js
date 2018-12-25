// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // mission: take in an obj and add each character to a string, return entire string
  // base case: no more elements in obj to add to string
  // remove the element you just added to your string from the obj

  // start with str = ''
  // for string, number, boolean, null str += obj (element)
  // for array str += '['
    // if (array.length > 0)
      // for each element in the array 
        // call stringifyJSON
        // str += ','
      // str.slice(0, -1)   
    // str += ']'
  // for object str += '{'
    // if (Object.keys(currentObject).length > 0)
      // for each key in obj
        // str += `"${key}": `
        // call stringifyJSON on the value
        // str += ','
      // str.slice (0, -1)
    // str += '}'

  var str = '';
  if (obj === null) {
    str += 'null';
  } else if (Array.isArray(obj)) {
    str += "[";
    if (obj.length > 0) {
      obj.forEach(function(el){
        str += stringifyJSON(el);
        str += ",";
      });
      str = str.slice(0, -1);
    }
    str += "]";
  } else if (typeof obj === 'object') {
    str += "{";
    if (Object.keys(obj).length > 0) {
      for (var key in obj) {
        str += `"${key}":`;
        str += stringifyJSON(obj[key]);
        str += ",";
      }
      str = str.slice(0, -1);
    }
    str += "}";
  } else if (typeof obj === "string") {
    str += `"${obj}"`;
  } else {
      str += obj;
  }
  return str;
};

/*var stringifyJSON = function(obj) {

}*/
