'use strict';
var MathOperations = function () { };

MathOperations.prototype.sum = function (number1, number2) {
    return number1 + number2;
}

MathOperations.prototype.substract = function (number1, number2) {
    return number1 - number2;
}

MathOperations.prototype.multiply = function (number1, number2) {
    return number1 * number2;
}

MathOperations.prototype.divide = function (number1, number2) {
    return number1 / number2;
}

MathOperations.prototype.average = function (number1, number2) {
    return (number1 + number2) / 2;
}

MathOperations.prototype.factorial = function (number) {
    if (number < 0) {
        throw new Error('The negative numbers have no factorials');
    } else if (number === 1 || number === 0) {
        return 1;
    } else {
        return number * this.factorial(number - 1);
    }
}





