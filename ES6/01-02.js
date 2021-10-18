//01
let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();

//02
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//03
function printManyTimes(str) {

    // Only change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }

    // Only change code above this line

}
printManyTimes("freeCodeCamp");

//04
const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // Only change code above this line
}
editInPlace();

//05
//Object.freeze - делает запрет на изменение объекта.
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//06
const magic = () => new Date();

//07
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//08
const increment = (number, value = 1) => number + value;  // value = 1 - мы говорим, что если арумент value не объявлен он будет равен 1.

//09
//...args - используя параметр rest (...), С помощью параметра rest мы можем создавать функции, которые принимают переменное количество аргументов.
//Эти аргументы хранятся в массиве, к которому позже можно будет получить доступ изнутри функции.
const sum = (...args) => args.reduce((a, b) => a + b, 0);