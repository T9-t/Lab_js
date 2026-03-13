
///// 1
function showSuccess(login){
  console.log(login);
}

function showFailure(login, error){
  console.log(login + ": " + error);
}

function ask_password(login, password, success, failure) {
  
  let lowerLogin = login.toLowerCase();
  let lowerPassword = password.toLowerCase();

  let loginConsonants = [];
  let passwordConsonants = [];

  let vowels = ['a','e', 'i', 'o', 'u', 'y'];
  let vowelsCount = 0;

  let isConsonants;
  let isVowels;

  for (let element of lowerLogin) {
    if (!vowels.includes(element)) {

      loginConsonants.push(element);
    }
  }

  for (let element of lowerPassword) {
    if (vowels.includes(element)) {
      
      vowelsCount++;
    } else {
      passwordConsonants.push(element);
    }
  }

  isConsonants = loginConsonants.length == passwordConsonants.length 
                 && loginConsonants.every((element, index) => element == passwordConsonants[index]);

  isVowels = vowelsCount == 3;

  if (isConsonants && isVowels) {
    success(lowerLogin);
    return "";

  } else {
    let errorMessage;
        
    if (!isVowels && !isConsonants) {
      errorMessage = "Everything is wrong";

    } else if (!isVowels) {
      errorMessage = "Wrong number of vowels";

    } else {
      errorMessage = "Wrong consonants";
    }

    failure(lowerLogin, errorMessage);
    return errorMessage;
  }
}

function main(login, password) {

  let str = ask_password(login, password, showSuccess, showFailure);

  if (str) {
    console.log("Кто-то пытался притвориться пользователем " + login +
                ", но в пароле допустил ошибку: " + str.toUpperCase() + ".");
  } else {
    console.log("Привет, " + login + "!");
  }
}

main("login", "ioilgn");




//// 2
 
function readConfig (name, callback) { 
  setTimeout(() => { 
    console.log('(1) config from ' + name + ' loaded') 
    callback() 
  }, Math.floor(Math.random() * 1000)) 
} 
 
function doQuery (statement, callback) { 
  setTimeout(() => { 
    console.log('(2) SQL query executed: ' + statement) 
    callback() 
  }, Math.floor(Math.random() * 1000)) 
} 
 
function httpGet (url, callback) { 
  setTimeout(() => { 
    console.log('(3) Page retrieved: ' + url) 
    callback() 
  }, Math.floor(Math.random() * 1000)) 
} 
 
function readFile (path, callback) { 
  setTimeout(() => { 
    console.log('(4) Readme file from ' + path + ' loaded') 
    callback() 
  }, Math.floor(Math.random() * 1000)) 
} 
 
function callback () { 
  console.log('It is done!') 
} 


///////////////////////////

console.log('start')

readConfig('myConfig', () => {
  doQuery('select * from cities', () => {
    httpGet('http://google.com', () => {
      readFile('README.md', callback)
    });
  });
});
console.log('end')


///////////////////////////

let i = 0;

console.log('start');
notif();
console.log('end');

function notif() {

  if (i == 0) {
    readConfig('myConfig', notif);
  }
  if (i == 1) {
    doQuery('select * from cities', notif);
  }
  if (i == 2) {
    httpGet('http://google.com', notif);
  }
  if (i == 3) {
    readFile('README.md', callback);
  }
  i++;
}




////// 3

let finalSum = 0;
let j = 0;
let x = 2;
let n = 4;

let functions = [

  (x) => { return -1 * x}, //f1
  () => { return 5}, //f2
  (x) => { return x ** 2}, //f3
  (x) => { return x ** 3}, //f4
  () => { return -10}, //f5
  (x) => { return 4 * x} //f6
];

calculateFunction();

async function calculateFunction() {
  
  if (j < n) {
    showCalculete(functions[j]);
  }
  if (j == n){
    console.log("Таким образом, ответ для F(x):" + finalSum);
  }
}

function showCalculete(func) { 
  setTimeout(() => { 

    let funcValue = func(x);
    finalSum += funcValue;

    console.log("f" + (j + 1) + " дает значение " + funcValue + ", промежуточный результат " + finalSum);

    j++;
    calculateFunction();
  }, Math.floor(Math.random() * 1000))
}