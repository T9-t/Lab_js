
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

console.log('start');
showInfo();
console.log('end');


async function showInfo() {

  await new Promise((resolve) => { readConfig('myConfig', resolve); });
  await new Promise((resolve) => { doQuery('select * from cities', resolve); });
  await new Promise((resolve) => { httpGet('http://google.com', resolve); });
  await new Promise((resolve) => { readFile('README.md', resolve); });
}




////// 3

// f1(x) = -x, f2(x)= 5, f3(x)= x^2, f4(x)= x^3, f5(x)= -10, f6(x)= 4x 
let functions = [

  async function f1(x) { return -1 * x},
  async function f2() { return 5},
  async function f3(x) { return x ** 2},
  async function f4(x) { return x ** 3},
  async function f5() { return -10},
  async function f6(x) { return 4 * x}
];

calculateFunction(2, 6, functions);

async function calculateFunction(x, n, functionsList) {
  
  let finalSum = 0;

  for (let i = 0; i < n; i++) {

    let func = await functionsList[i](x);
    finalSum += func;

    console.log("f" + (i + 1) + " дает значение " + func + ", промежуточный результат " + finalSum);
  }
  console.log("Таким образом, ответ для F(x):" + finalSum);
}