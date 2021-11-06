const ourArray = [];
let i = 0;

while (i < 5) {       //пока i < 5
    ourArray.push(i); // на каждом круге цикла запушить в массив ourArray значение i
    i++;              // на каждом круге цикла  увеличить i на 1
}



// Setup
const myArray = [];
let i = 5;
while (i >= 0) {     // пока i больше или равно 0
    myArray.push(i); // на каждом круге цикла довавлять в массив myArray значение i
    i--;             // на каждом круге цикла уменьшать i на 1
}
console.log(myArray)
// Only change code below this line