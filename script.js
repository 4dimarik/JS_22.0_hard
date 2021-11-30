function stringConversion(str) {
    if (typeof str === 'string') {
        str = str.trim();
        if (str.length > 30) {
            return str.substring(0, 30) + '...';
        } else {
            return str;
        }
    } else {
        return 'Переданный аргумент не строка!';
    }
}

console.log(stringConversion(null));

console.log(stringConversion('Бронитранспортер'));

const text = `Anim in velit nisi mollit nisi magna quis veniam. Reprehenderit sunt magna esse ex aliquip 
voluptate fugiat exercitation veniam sit culpa ut pariatur. Sunt ipsum in magna esse incididunt in labore 
deserunt proident ea elit sit. Ea ex quis anim Lorem Lorem aliquip aute non consequat. Quis laborum Lorem 
cillum ullamco voluptate reprehenderit aliqua dolor magna eu aute aute ipsum deserunt.`;
console.log(stringConversion(text));