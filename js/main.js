$(function() {
  
  function setFontSize(input, selector, loopNumber) {
    var charArray = input.split('')
      , letters = 0
      , spaces = 0
      , chars = 0
      , rawSize = 0
      , finalSize = 0;

    $.each(charArray, function(index,character) {
      if (character == ' ') {
        spaces++;
      }
      else {
        letters++;
      }
    });

    chars = letters+(spaces/2);
    rawSize = Math.round(((-0.00103*(Math.pow(chars, 2)))+(0.01765*chars)+48.6));

    if (loopNumber == 1 || loopNumber == 3) {
      finalSize = Math.floor(rawSize * 0.75);
    }
    else {
      finalSize = rawSize;
    }

    $(selector).css({ 'font-size': finalSize + 'px' });
  }

  function setLoopNumber(variantArray, selector) {
    var text = document.getElementsByTagName('h1')[0].innerText
      , loopNumber = variantArray.length + 1;

    $(selector).addClass('loop-' + loopNumber);

    setFontSize(text, 'h1', loopNumber);
  }

  $(document).ready(function() {
    setLoopNumber(variables.variants_shared, 'body');
  });

});