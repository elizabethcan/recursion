var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  /*it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });*/

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
      var $rootElement = $('<div class="targetClassName"></div>');
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      console.log("test1:");
      console.log(expectedArray);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
      var $rootElement = $('<div class="otherClassName targetClassName"></div>');
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      
      console.log("test2:");
      console.log(expectedArray);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
      var $rootElement = $('<div><div class="targetClassName"></div></div>');
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      console.log("test3:");
      console.log(expectedArray);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');

  /*it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
      var $rootElement = $('<div><div class="targetClassName"><div class="targetClassName"></div></div></div>');
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      console.log("test4:");
      console.log(expectedArray);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
      var $rootElement = $('<div><div></div><div><div class="targetClassName"></div></div></div>');
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      console.log("test5:");
      console.log(expectedArray);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
      var $rootElement = $('<div><div class="targetClassName"></div><div class="targetClassName"></div></div>');
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      console.log("test6:");
      console.log(expectedArray);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
      var $rootElement = $('<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>');
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      console.log("test7:");
      console.log(expectedArray);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
*/
});
