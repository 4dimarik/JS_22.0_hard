'use strict';
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

//Вывести на экран все дни недели
let weekday = new Date().getDay();
week.forEach((day, index) => {
  if (index === weekday) {
    console.log('%c%s', 'font-weight:bold;', day);
  } else if (index > 4) {
    console.log('%c%s', 'font-style:italic;', day);
  } else {
    console.log(day);
  }
});
