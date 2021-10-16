//41
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];

//42
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); //.push добавляет запись в конец массива

//43
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();  //.pop удаляет последний элемент массива

//44
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();  // .shift удаляет первый элемент массива

//45
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);  // .unshift работает также как .push, но добавляет элемент в начало массива

//46
var myList = [];
myList.push(["Chocolate Bar", 15]);
myList.push(["Apple", 20]);
myList.unshift(["Tomato", 4]);
myList.unshift(["Milk", 2]);
myList.push(["Bread", 1]);

//47
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

//48
function functionWithArgs(a, b) {
    let c = a + b;
    console.log(c);
}

functionWithArgs(4, 2);

//49
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//50
function myLocalScope() {
    var myVar = '1';
    console.log('inside myLocalScope', myVar);
}

myLocalScope();

console.log('outside myLocalScope', myVar);

//51
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

myOutfit();


//52
function timesFive(num) {
    return num * 5;
}

//53
var sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

//54
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

//55
function nextInLine(arr, item) {
    // Only change code below this line

    arr.push(item);
    var deletedItem = arr[0];
    arr.shift();
    return deletedItem;
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


//56
function welcomeToBooleans() {

    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}

//57
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
if (wasThatTrue) {
    return "Yes"
}
return "No"
    // Only change code above this line
}








