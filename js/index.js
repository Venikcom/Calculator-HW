$(document).ready(function () {

    // VARIABLES
    let calc = $('.calculator');
    let calcDisplay = calc.find('.calc__display');
    let calcKeys = calc.find('.calc__key');
    let calcButton = calc.find('.calc__button');
    let calcClear = calc.find('.calc__clear');
    let calcEqual = calc.find('.calc__key--equal');
    let calcPower = calc.find('.calc__power');
    let calcSpace = calc.find('.calc__backspace');

    // INIT CALC KEYS
    calcKeys.each(function () {
        let current = $(this).attr('value');
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

    // POWER BUTTON (^2)
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 2 ) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});