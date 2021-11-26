const num = 266219;
const multiNum = [...String(num)].reduce((multi, item) => +multi * +item);

console.log(multiNum);

const multiNumPow3 = multiNum ** 3;

console.log(String(multiNumPow3).substr(0, 2));