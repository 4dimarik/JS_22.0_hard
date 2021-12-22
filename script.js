'use strict';
const versionA = document.querySelector('#version_a');
const versionB = document.querySelector('#version_b');

const numberOfHoursElement = document.querySelector('#check_hour input');
const hoursTextElement = document.querySelector('#hour_text');

const numberOfSecElement = document.querySelector('#check_sec input');
const secTextElement = document.querySelector('#sec_text');

const numeralsWithNouns = (num, nouns) => {
  if (num === 1 || (num > 20 && +String(num)[1] === 1)) {
    return nouns[0];
  } else if ((num > 1 && num < 5) || (num > 21 && +String(num)[1] > 1 && +String(num)[1] < 5)) {
    return nouns[1];
  } else if (
    num === 0 ||
    (num > 4 && num < 21) ||
    (num > 21 && +String(num)[1] > 4) ||
    +String(num)[1] === 0
  ) {
    return nouns[2];
  }
};

const getDateTimeData = () => {
  let date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    monthLong: (() => {
      let month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
      return (
        month.substring(0, 1).toUpperCase() +
        month.substring(1, month.length - 1).toLowerCase() +
        'я'
      );
    })(),
    weekDay: (() => {
      let weekDay = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(date);
      return weekDay.substring(0, 1).toUpperCase() + weekDay.substring(1).toLowerCase();
    })(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  };
};

const getDateTimeData2 = () => {
  let date1 = Date.now();
  // console.log(date1);
  // console.log(Date.parse('2022-01-01T:00:00:00'));
  let date2 = Date.parse('2022-01-01T00:00:00');
  let date = date2 - date1;
  // console.log(date);
  // console.log(date / 1000);
  // console.log(date / (1000 * 60));
  // console.log(date / (1000 * 60 * 60));
  // console.log(date / (1000 * 60 * 60 * 24));
  const day = Math.trunc(date / (60 * 60 * 24 * 1000));
  const hours = Math.trunc((date - day * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.trunc(
    (date - day * (1000 * 60 * 60 * 24) - hours * (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.trunc(
    (date - day * (1000 * 60 * 60 * 24) - hours * (1000 * 60 * 60) - minutes * (1000 * 60)) / 1000
  );
  return {
    day,
    hours,
    minutes,
    seconds,
  };
};

const getTwoDigitNumber = (num) => (String(num).length === 1 ? `0${num}` : num);

const renderDateTime = () => {
  let { year, month, monthLong, weekDay, day, hours, minutes, seconds } = getDateTimeData();

  versionA.textContent = `
  Сегодня ${weekDay}, 
  ${day}
  ${monthLong}
  ${year} года, 
  ${hours} ${numeralsWithNouns(hours, ['час', 'часа', 'часов'])}
  ${minutes} ${numeralsWithNouns(minutes, ['минута', 'минуты', 'минут'])}
  ${seconds} ${numeralsWithNouns(seconds, ['секунда', 'секунды', 'секунд'])} `;

  versionB.textContent =
    getTwoDigitNumber(day) +
    '.' +
    getTwoDigitNumber(month) +
    '.' +
    year +
    ' - ' +
    getTwoDigitNumber(hours) +
    ':' +
    getTwoDigitNumber(minutes) +
    ':' +
    getTwoDigitNumber(seconds);
};

const renderDateTime2 = () => {
  console.log(getDateTimeData2());
  let { day, hours, minutes, seconds } = getDateTimeData2();

  versionA.textContent = `
  До Нового Года ${numeralsWithNouns(day, ['остался', 'осталось', 'осталось'])}  
  ${day} ${numeralsWithNouns(day, ['день', 'дня', 'дней'])}
  ${hours} ${numeralsWithNouns(hours, ['час', 'часа', 'часов'])}
  ${minutes} ${numeralsWithNouns(minutes, ['минута', 'минуты', 'минут'])}
  ${seconds} ${numeralsWithNouns(seconds, ['секунда', 'секунды', 'секунд'])} `;
};

setInterval(renderDateTime2, 1000);

numberOfHoursElement.addEventListener('input', (e) => {
  hoursTextElement.textContent = numeralsWithNouns(+e.target.value, ['день', 'дня', 'дней']);
});

numberOfSecElement.addEventListener('input', (e) => {
  secTextElement.textContent = numeralsWithNouns(+e.target.value, ['секунда', 'секунды', 'секунд']);
});
