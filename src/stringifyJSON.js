// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
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
        if (typeof obj[key] !== "function" && obj[key] !== undefined) {
          str += `"${key}":`;
          str += stringifyJSON(obj[key]);
          str += ",";
        }
      }
      if (str[str.length - 1] == ",") {
        str = str.slice(0, -1);
      }
    }
    str += "}";
  } else if (typeof obj === "string") {
    str += `"${obj}"`;
  } else {
      str += obj;
  }
  return str;
};
