'use strict';
let num;

do {
    num = prompt('Введите число');
} while (!(!isNaN(parseFloat(num)) && isFinite(num) && !num.includes(' ')));

num = +num;

console.log(num);