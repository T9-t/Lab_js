
console.log("////////  1  /////////");

let number = 10;
let string = "hello world";
let boolean = true;
let arr = [1, 2, 3];
let undefined;

console.log( typeof(number) );
console.log( typeof(string) );
console.log( typeof(boolean) );
console.log( typeof(arr) );
console.log( typeof(undefined) );


console.log("////////  2  /////////");

let num1 = 14;
let num2 = 10;

console.log(num1 == num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 > num2);


console.log("////////  3  /////////");

let a = false;
let b = null;
let c = undefined;

console.log(a);
console.log(b);
console.log(c);


console.log("////////  4  /////////");

console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

console.log("1" - 2);
console.log("1" +- 2);

console.log("1" + "1" - "1");
console.log("foo" +- "bar");

console.log(0 == "0");
console.log(0.5 + 0.1 == 0.6);
console.log(0.1 + 0.2 == 0.3);

console.log(true + true + true == 3);
console.log(true == 1);
console.log(true === 1);

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

console.log(9007199254740991 + 1 == 9007199254740991 + 2);
console.log( Math.sqrt(-1) == Math.sqrt(-1) );


console.log("////////  5  /////////");

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1 + str2 + str3; 

console.log(concatenation);


console.log("////////  6  /////////");

let str = "20";
a = 5;

console.log(str + a);
console.log(str - a);
console.log(str * "2");
console.log(str / 2);


console.log("////////  7  /////////");

a = "12";
b = "7.15";

let aNumber = Number(a);
let bNumber = Number(b);

console.log( Math.round(aNumber % bNumber) );


console.log("////////  8  /////////");

let x = 1;
let x2 = x * x;

let up = x2 - (7 * x) + 10;
let down = x2 - (8 * x) + 12;

console.log(up / down);


console.log("////////  9  /////////");

let email = "str..mail.ru";

if (!email.includes("@")) {
    console.log("Адрес электронной почты не содержит символ @");
}


console.log("//////////////////////////////////////////");


console.log("////////  1  /////////");

let age = 18;

if (18 <= age && age <= 30) {
    console.log("Для молодежи");

} else {
    console.log("Для всех возрастов");
}

if (1 <= age && age <= 17) {
    console.log("Для детей");
}
        

console.log("////////  2  /////////");

a = 15;
b = 25;

let max = (a > b) ? a : b;
console.log(max);
        

console.log("////////  3  /////////");

let crows = 3;
let crowsMassege = "На ветке сидит " + crows;

switch (crows) {
    case 1:
        crowsMassege += " ворона";
        break;
    case 2:
    case 3:
    case 4:
        crowsMassege += " вороны";
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        crowsMassege += " ворон";
        break;
}
console.log(crowsMassege);

console.log("////////  4  /////////");

let i = 1;

while (i < 50) {

    console.log(i);
    i += 2;
}

for (let j = 1; j < 50; j += 2) {
    console.log(j);
}


console.log("////////  5  /////////");

let sum = 0;

for (let j = 1; j <= 15; j++) {
    if (j != 5 && j != 7) {
        
        sum += j;
    }
}
console.log(sum);


console.log("////////  6  /////////");

x = 5;
let y = 2;
let squared = 1;
let count = 0;

while (count < y) {
    
    squared *= x;
    count++;
}
console.log(squared);