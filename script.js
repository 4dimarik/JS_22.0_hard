'use strict';
const versionA = document.querySelector('#versionA');
const versionB = document.querySelector('#versionB');

const numberOfHoursElement = document.querySelector('#checkHour input');
const hoursTextElement = document.querySelector('#hourText');

const numberOfSecElement = document.querySelector('#checkSec input');
const secTextElement = document.querySelector('#secText');

const numeralsWithNouns = (num, nouns) => {
  if (num === 1 || (num > 20 && +String(num)[1] === 1)) {
    return nouns[0];
  } else if ((num > 1 && num < 5) || (num > 21 && +String(num)[1] > 1 && +String(num)[1] < 5)) {
    return nouns[1];
  } else if (num === 0 || (num > 4 && num < 21) || (num > 21 && +String(num)[1] > 4) || +String(num)[1] === 0) {
    return nouns[2];
  }
};

const getTwoDigitNumber = (num) => (String(num).length === 1 ? `0${num}` : num);

const renderDateTime = () => {
  let date = new Date();

  let weekDay = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(date);
  weekDay = weekDay.substring(0, 1).toUpperCase() + weekDay.substring(1).toLowerCase();
  let month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
  month = month.substring(0, 1).toUpperCase() + month.substring(1, month.length - 1).toLowerCase() + 'я';

  versionA.textContent = `
  Сегодня ${weekDay}, 
  ${date.getDate()}
  ${month}
  ${date.getFullYear()} года, 
  ${date.getHours()} ${numeralsWithNouns(date.getHours(), ['час', 'часа', 'часов'])}
  ${date.getUTCMinutes()} ${numeralsWithNouns(date.getUTCMinutes(), ['минута', 'минуты', 'минут'])}
  ${date.getUTCSeconds()} ${numeralsWithNouns(date.getUTCSeconds(), ['секунда', 'секунды', 'секунд'])} `;

  versionB.textContent =
    getTwoDigitNumber(date.getDate()) +
    '.' +
    getTwoDigitNumber(date.getMonth()) +
    '.' +
    date.getFullYear() +
    ' - ' +
    getTwoDigitNumber(date.getHours()) +
    ':' +
    getTwoDigitNumber(date.getUTCMinutes()) +
    ':' +
    getTwoDigitNumber(date.getUTCSeconds());
};
setInterval(renderDateTime, 1000);
//
numberOfHoursElement.addEventListener('input', (e) => {
  hoursTextElement.textContent = numeralsWithNouns(+e.target.value, ['час', 'часа', 'часов']);
});

numberOfSecElement.addEventListener('input', (e) => {
  secTextElement.textContent = numeralsWithNouns(+e.target.value, ['секунда', 'секунды', 'секунд']);
});
