'use strict';
// УСЛОЖНЕННОЕ ЗАДАНИЕ
// Загадывание случайного числа от 1 до 100

const isNumber = num => !isNaN(parseFloat(num)) && isFinite(num) && !num.includes(' ');
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function guessTheNumber(attemptQuantity) {
    return function attempt(attemptCount = attemptQuantity, number = random(1, 100)) {
        console.log(number); //Подсказка

        let answer = prompt('Угадай число от 1 до 100');

        if (answer === null) {
            alert('Игра окончена!');
            return;
        } else if (isNumber(answer) && +answer < 0 || +answer > 100) {
            alert('Введи число от 1 до 100!');
            attempt(attemptCount, number);
        } else if (isNumber(answer) && +answer > number) {
            attemptCount--;
            if (attemptCount !== 0) {
                alert(`Загаданное число меньше, осталось попыток ${attemptCount}`);
                attempt(attemptCount, number);
            } else {
                if (confirm('Загаданное число меньше.\nПопытки закончились, хотите сыграть еще?')) {
                    attempt(attemptQuantity, number); //если число не угадано, то оно остается прежним
                } else return;
            }
        } else if (isNumber(answer) && +answer < number) {
            attemptCount--;
            if (attemptCount !== 0) {
                alert(`Загаданное число больше, осталось попыток ${attemptCount}`);
                attempt(attemptCount, number);
            } else {
                if (confirm('Загаданное число меньше.\nПопытки закончились, хотите сыграть еще?')) {
                    attempt(attemptQuantity, number); //если число не угадано, то оно остается прежним
                } else return;
            }

        } else if (isNumber(answer) && +answer === number) {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                attempt(attemptQuantity);
            } else return;
        } else {
            alert('Введи число!');
            attempt(attemptCount, number);
        }
    }



}

guessTheNumber(3)();