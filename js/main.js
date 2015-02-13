$(function() {
  
  function setFontSize(input, selector, loopNumber) {
    var charArray = input.split('')
      , letters = 0
      , spaces = 0
      , chars = 0
      , rawSize = 0
      , finalSize = 0
      , manualAdjustments = {
          'physician_payment_cuts': 1.1,
          'physician_high_numbers': 1.1,
          'physician_investing': 1.1,
          'physician_thank_you_a': 1,
          'physician_thank_you_b': 1,
          'patient_care_availability': 1.15,
          'patient_care_access': 0.9,
          'patient_risk': 0.9,
          'patient_thank_you_a': 1.1,
          'patient_thank_you_b': 1.2
        };

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

    if (variables.variant) {
      finalSize = Math.floor(rawSize * manualAdjustments[variables.variant]);
    }
    else {
      finalSize = rawSize;
    }

    $(selector).css({ 'font-size': finalSize + 'px' }); //
  }

  function setLoopNumber(variantArray, selector) {
    var text = document.getElementsByTagName('h1')[0].innerText
      , loopNumber = variantArray.length + 1;

    $(selector).addClass('loop-' + loopNumber);
    setFontSize(text, '.card-text', loopNumber);
  }

  $(document).ready(function() {
    setLoopNumber(variables.variants_shared, 'body');
  });

});