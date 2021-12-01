'use strict';

//УСЛОЖНЕННОЕ ЗАДАНИЕ №2 [1]:

const arr = [1000, 2000, 7000, 5000, 2200, 4000, 4400];

//начинаются с цифры 2
console.log(arr.filter(num => String(num)[0] === '2'));

//начинаются с цифры 4
console.log(arr.filter(num => String(num)[0] === '4'));


//УСЛОЖНЕННОЕ ЗАДАНИЕ №2 [2]:

for (let i = 1; i < 101; i++) {
    if (i === 1) continue;
    let naturalDivisors = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) naturalDivisors++;
    }
    if (naturalDivisors === 2) console.log(`${i} - Делители этого числа: 1 и ${i}`);
}