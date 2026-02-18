
console.log("--------  1  --------");

showDifference(11, 3);
console.log(calculateDifference(15, 14));

function showDifference(x, y) {
   console.log(x - y);
}

function calculateDifference(x, y) {
    return x - y;
}


console.log("--------  2  --------"); 

showAgeMessage(16);

function showAgeMessage(age) {
    if (age >= 18) {
        console.log("Здравствуйте, юноша!");
    } else {
        console.log("Привет, малыш!");
    }
}


console.log("--------  3  --------");

console.log(calculateMaximum(14, 32, 8));

function calculateMaximum(a, b, c) {
    return Math.max(a, b, c);
}


console.log("--------  4  --------");

/*
Переменная variable объявленная внутри функции 
существует только в приделах этой функции и для функции 
является важнее глобальной в том какую из них выводить
*/

let variable = "Глобальная переменная";

function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}

f();
console.log(variable);


console.log("--------  5  --------");

console.log(equation(3, 4, 2));

function equation(x, y, z) {

    return (Math.max(x, y) + Math.max(x + y, z)) / (Math.max(0.5, x + z) ** 2);
}


console.log("--------  6  --------");

const cube = [-2, -2, 2, -2, 2, 2, -2, 2];

calculatePerimeter(cube);

function calculatePerimeter(points) {

    let perimeterSum = 0;
    let pointsX = [];
    let pointsY = [];

    for (let i = 0; i < points.length; i++) {
        if (i % 2 == 0) {
            pointsX.push(points[i]);
        } else {
            pointsY.push(points[i]);
        }
    }
    pointsX.push(points[0]);
    pointsY.push(points[1]);

    for (let i = 0; i < (pointsX.length - 1); i++) {

        sumX = pointsX[i] - pointsX[i + 1];
        sumX *= sumX;

        sumY = pointsY[i] - pointsY[i + 1];
        sumY *= sumY;

        perimeterSum += Math.sqrt(sumX + sumY);
    }
    console.log(perimeterSum);
}


console.log("--------  7  --------");

let N = 2

console.log(recursion(1, 1, N));

function recursion(lastSum, iter, numberIndex) {
    
    let number = Math.sin(lastSum);
    
    if (numberIndex == 1) {
        number = 1;

    } else if ((iter + 1) != numberIndex) {
        
        number = recursion(number + lastSum, iter + 1, numberIndex);
    }
    return number;
}


console.log("---------------------");

console.log("--------  1  --------");

let arr = [1, 2, 3];

console.log(arr[2]);
console.log(arr.length);

arr.splice(1, 1);
arr.forEach(element => {
    console.log(element);
});


console.log("--------  2  --------");

const countries = ["Австра­лия", "Германия", "Япония"];
const population = ["25 500 000", "83 784 000", "126 476 000"];

showFor(countries, population);
showForIn(countries, population);

function showFor(arrayCountries, arrayPopulation) {
    for (let i = 0; i < arrayCountries.length; i++) {
        console.log(arrayCountries[i] + ": " + arrayPopulation[i]);
    }
}

function showForIn(arrayCountries, arrayPopulation) {
    for (let i in arrayCountries) {
        console.log(arrayCountries[i] + ": " + arrayPopulation[i]);
    }
}


console.log("--------  3  --------");

arr = ["January", "February", "March", "April", "May", "June"]; 
let len = arr.pop();
console.log(arr.join(" "));
console.log(len);


console.log("--------  4  --------");

let a = [1, 2, 3, 4, 5, 6, 7]; 
let t = a.slice(0, 3)
console.log(t);


console.log("--------  5  --------");

a = [1, 2, 3, 4, 5, 6, 7];
let d = a.splice(1, 3);
console.log(a);


console.log("--------  6  --------");
let numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers);


console.log("--------  7  --------");

let sortArray = ['c', 5, 2, 'b', 3, 1, 4, 'a'];

sortArray.sort();
console.log(sortArray);


console.log("--------  8  --------");

let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray.join("+"));


console.log("--------  9  --------");

let array1 = [1, 2, 5, 4, 6];
let array2 = [8, 2, 5, 9, 5];

let mergedArray = [...array1, ...array2];
mergedArray.sort();

function median(funcArray) {

    let arrayLength = funcArray.length;
    let n;

    if (arrayLength % 2 == 0) {
        n = arrayLength / 2;
        return (funcArray[n] + funcArray[n - 1]) / 2;

    } else {
        n = (arrayLength - 1) / 2;
        return funcArray[n];
    }
}
console.log(median(mergedArray));


console.log("-------- 10 --------");

let arrMaxMin = [1, 15, 9, 8, 2, 13];

let maxValue = Math.max(...arrMaxMin);
let maxIndex = arrMaxMin.indexOf(maxValue);

let minValue = Math.min(...arrMaxMin);
let minIndex = arrMaxMin.indexOf(minValue);

arrMaxMin[maxIndex] = minValue;
arrMaxMin[minIndex] = maxValue;

console.log(arrMaxMin);


console.log("-------- 11 --------");

let array = [5, 4, 2, 1];
let count = 0;

for (let i = 0; i < (array.length - 1); i++) {

    if (array[i] > array[i + 1]) {
        count++;

    } else {
        console.log(i + 2);
        break;
    }
}
if (count == (array.length - 1)) {
    
    array.reverse();
    console.log(array);
}


console.log("-------- 12 --------");

array = [-5, 13, 2, -8, -1, 4, 6, 8, -10];

for (let i = 0; i < array.length; i++) {

    if (i % 2 == 0 && array[i] < 0) {
        array[i] /= 5;
    
    } else if (i % 2 != 0 && array[i] > 0) {
        array[i] *= 3;
    }
}
console.log(array);


console.log("-------- 13 --------");

array = [
    [-9, 5, 10, 6, -2],
    [0, -4, 4, -1, 13],
    [3, -2, 28, 0, 15],
    [-17, 2, 4, 6, -20],
    [0, -5, 4, 23, 1]
];
const newArray = array.flat().filter(i => i <= 7 && i >= -5);

console.log(newArray);


console.log("-------- 14 --------");

array = [
    [-9, 5, 1, 6, -2],
    [8, -4, 4, -1, 13],
    [3, 2, 28, 1, 15],
];
let maxSum = 0;
let minProduct = 1;

let minArray = Array(array[0].length).fill(Number.MAX_VALUE);

for (let i = 0; i < array.length; i++) {
    
    let max = 0;
    for (let j = 0; j < array[i].length; j++) {

        if (array[i][j] > max) {
            max = array[i][j];
        }
        if (minArray[j] > array[i][j]) {
            minArray[j] = array[i][j];
        }
    }
    maxSum += max;
}
minArray.forEach(element => {
    minProduct *= element;
});

console.log("Sum of the largest values of row elements: " + maxSum);
console.log("Product of smallest elements of columns: " + minProduct);


console.log("-------- 15 --------");

let autorsBuks = {
    "Пушкин": ["Повести Белкина", "Евгений Онегин", "Капитанская дочка"],
    "Есенин": ["Письмо матери", "Сорокоуст"],
    "Данцова": ["Черт из табакерки", "Муха в самолете", "Клетчатая зебра", "Бабочка в гипсе"]
};

for (let key in autorsBuks) {
    console.log(key + ": " + autorsBuks[key]);
}