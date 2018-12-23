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
  // if it's a boolean use toString and then return the string
  else if (typeof(obj) === 'boolean') {
  	obj = obj.toString();
  	stringifyJSON(obj);
  }
  // if it's an array create a string that starts with a [ then add each element of the array and end with another ] 
  // if it's an object create a string that starts with a { then add each key/value pair from the obj and end with another }

};
