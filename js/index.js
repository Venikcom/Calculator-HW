$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calc__display');
    var calcKeys = calc.find('.calc__key');
    var calcButton = calc.find('.calc__button');
    var calcClear = calc.find('.calc__clear');
    var calcEqual = calc.find('.calc__key--equal');
    var calcPower = calc.find('.calc__power');
    var calcSpace = calc.find('.calc__backspace');

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () { // http://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});