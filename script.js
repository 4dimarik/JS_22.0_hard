//Задание1
let lang = 'en1'; // 'ru' or 'en'

const ruWeekday = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
const enWeekday = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
//через if
if (lang === 'ru') {
    console.log(ruWeekday);
} else if (lang === 'en') {
    console.log(enWeekday);
} else {
    console.log('Ошибка');
}

//через switch-case
switch (lang) {
    case 'ru':
        console.log(ruWeekday);
        break;
    case 'en':
        console.log(enWeekday);
        break;
    default:
        console.log('Ошибка');
        break;
}

//через многомерный массив без ифов и switch
const weekday = {
    'ru': ruWeekday,
    'en': enWeekday
};
console.log(weekday?.[lang]);

//Задание2
let namePerson = 'aSD';

console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент');