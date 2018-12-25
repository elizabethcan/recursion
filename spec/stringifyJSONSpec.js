// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });

  it('should stringify numbers', function(){
    var expected = JSON.stringify(9);
    var result = stringifyJSON(9);
    expect(result).to.equal(expected);
  });

  it('should stringify null', function(){
    var expected = JSON.stringify(null);
    var result = stringifyJSON(null);
    expect(result).to.equal(expected);
  });

  it('should stringify boolean', function(){
    var expected = JSON.stringify(true);
    var result = stringifyJSON(true);
    expect(result).to.equal(expected);
  });

  it('should stringify boolean', function(){
    var expected = JSON.stringify(false);
    var result = stringifyJSON(false);
    expect(result).to.equal(expected);
  });

  it('should stringify strings', function(){
    var expected = JSON.stringify('Hello world');
    var result = stringifyJSON('Hello world');
    expect(result).to.equal(expected);
  });

  it('should stringify empty arrays', function(){
    var expected = JSON.stringify([]);
    var result = stringifyJSON([]);
    expect(result).to.equal(expected);
  });

  it('should stringify arrays with numbers', function(){
    var expected = JSON.stringify([8]);
    var result = stringifyJSON([8]);
    expect(result).to.equal(expected);
  });

  it('should stringify arrays with strings', function(){
    var expected = JSON.stringify(['hi']);
    var result = stringifyJSON(['hi']);
    expect(result).to.equal(expected);
  });

  it('should stringify arrays with numbers and strings', function(){
    var expected = JSON.stringify([8, 'hi']);
    var result = stringifyJSON([8, 'hi']);
    expect(result).to.equal(expected);
  });

  it('should stringify arrays of multiple numbers', function(){
    var expected = JSON.stringify([1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]);
    var result = stringifyJSON([1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]);
    expect(result).to.equal(expected);
  });

  it('should stringify arrays of arrays', function(){
    var expected = JSON.stringify([8, [[], 3, 4]]);
    var result = stringifyJSON([8, [[], 3, 4]]);
    expect(result).to.equal(expected);
  });

  it('should stringify arrays nested arrays', function(){
    var expected = JSON.stringify([[[['foo']]]]);
    var result = stringifyJSON([[[['foo']]]]);
    expect(result).to.equal(expected);
  });

  it('should stringify empty objects', function(){
    var expected = JSON.stringify({});
    var result = stringifyJSON({});
    expect(result).to.equal(expected);
  });

  it('should stringify objects', function(){
    var expected = JSON.stringify({'a': 'apple'});
    var result = stringifyJSON({'a': 'apple'});
    expect(result).to.equal(expected);
  });

  it('should stringify objectst with boolean and null values', function(){
    var expected = JSON.stringify({'foo': true, 'bar': false, 'baz': null});
    var result = stringifyJSON({'foo': true, 'bar': false, 'baz': null});
    expect(result).to.equal(expected);
  });

  it('should stringify objects with complex keys', function(){
    var expected = JSON.stringify({'boolean, true': true, 'boolean, false': false, 'null': null });
    var result = stringifyJSON({'boolean, true': true, 'boolean, false': false, 'null': null });
    expect(result).to.equal(expected);
  });

  it('should stringify objects with objects as values', function(){
    var expected = JSON.stringify({'a': {'b': 'c'}});
    var result = stringifyJSON({'a': {'b': 'c'}});
    expect(result).to.equal(expected);
  });

  it('should stringify objects with arrays as values', function(){
    var expected = JSON.stringify({'a': ['b', 'c']});
    var result = stringifyJSON({'a': ['b', 'c']});
    expect(result).to.equal(expected);
  });

  it('should stringify arrays of objects', function(){
    var expected = JSON.stringify([{'a': 'b'}, {'c': 'd'}]);
    var result = stringifyJSON([{'a': 'b'}, {'c': 'd'}]);
    expect(result).to.equal(expected);
  });

  it('should stringify objects with empty arrays and objects as values', function(){
    var expected = JSON.stringify({'a': [], 'c': {}, 'b': true});
    var result = stringifyJSON({'a': [], 'c': {}, 'b': true});
    expect(result).to.equal(expected);
  });
});
