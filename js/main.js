$(function() {
  
  function setFontSize(input, selector) {
    var charArray = input.split('')
      , letters = 0
      , spaces = 0
      , chars = 0
      , size = 0;

    $.each(charArray, function(index,character) {
      if (character == ' ') {
        spaces++;
      }
      else {
        letters++;
      }
    });

    chars = letters+(spaces/2);
    size = Math.round(((-0.00103*(Math.pow(chars, 2)))+(0.01765*chars)+48.6));

    $(selector).css({ 'font-size': size + 'px' });
  }

  $(document).ready(function() {
    var text = document.getElementsByTagName('h1')[0].innerText;

    setFontSize(text, 'h1');
  });

});