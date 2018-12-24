// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // mission: take in an obj and add each character to a string, return entire string
  // base case: no more elements in obj to add to string
  // remove the element you just added to your string from the obj

  // if it's a string already, return the string (base case?)
  if (typeof(obj) === 'string') {
  	return obj;
  } 
  // if it's a number use toString and then return the string
  else if (typeof(obj) === 'number') {
    obj = obj.toString();
    stringifyJSON(obj);
  }
  // if it's a boolean use toString and then return the string
  else if (typeof(obj) === 'boolean') {
  	obj = obj.toString();
  	stringifyJSON(obj);
  }
  // if it's an array create a string that starts with a [ then add each element of the array and end with another ] 
    // arr = ['foo', true]
    // we want ", " to separate each element in the array
    // string = "["
    // add array[0]
    // add ", "
    // add array[1]
    // add ", "
    // etc.
    // remove last ", "
    // add "]"
    else if (Array.isArray(obj)) {
      var str = '[';
      obj.forEach(function(el){
        if(typeof(el) === 'string') {
          str += `"${el}",`;
        } else {
          str += `${el},`;
        }
      });
      str = str.slice(0, -1);
      str += ']';
      return str;
    }

  // if it's an object create a string that starts with a { then add each key/value pair from the obj and end with another }
    // obj = {'foo': true, 'bar': false, 'baz': null}
    // Object.entries(obj) = [["foo", true], ["bar", false], ["baz", null]]
      // this breaks the obj into an array of key value pair arrays - can then use the step specified for an array?
    // we want ": " to separate each element in the inner array and then ", " to separate in the outer array
    // string = "{"
    // add array[0][0]
    // add ": "
    // add array[0][1]
    // add ", "
    // etc.

    // IMPORTANT: only the outermost layer should be stringified. Anything inside an array or obj should keep the same typeof
    // this means that strings should remain strings and numbers should remain numbers, etc
};
