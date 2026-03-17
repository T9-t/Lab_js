
///// 1

let promise = new Promise(function(resolve, reject) { 
    resolve(1);
    setTimeout(() => resolve(2), 1000);
  });

promise.then(console.log);

// На экран выведится 1
// после первого resolve() Promise переходит в состояние выполнено и второй resolve() игнорируется


///// 2

function readConfig (name) { 
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('(1) config from ' + name + ' loaded')
      resolve()
    }, Math.floor(Math.random() * 1000))
  })
}
 
function doQuery (statement) {
  return new Promise((resolve) => { 
    setTimeout(() => { 
      console.log('(2) SQL query executed: ' + statement) 
      resolve() 
    }, Math.floor(Math.random() * 1000)) 
  })
} 
 
function httpGet (url) { 
  return new Promise((resolve) => {
    setTimeout(() => { 
      console.log('(3) Page retrieved: ' + url) 
      resolve()
    }, Math.floor(Math.random() * 1000)) 
  })
} 
 
function readFile (path) { 
   return new Promise((resolve) => {
    setTimeout(() => { 
      console.log('(4) Readme file from ' + path + ' loaded') 
      resolve() 
    }, Math.floor(Math.random() * 1000)) 
  })
} 


console.log('start');

readConfig('myConfig')
  .then(() => {doQuery('select * from cities')})
    .then(() => {httpGet('http://google.com')})
     .then(() => {readFile('README.md')});
      
console.log('end')



///// 3

let functions = [

  (x) => { return -1 * x}, //f1
  () => { return 5}, //f2
  (x) => { return x ** 2}, //f3
  (x) => { return x ** 3}, //f4
  () => { return -10}, //f5
  (x) => { return 4 * x} //f6
];

let finalSum = 0;
let x = 2;

calculateFunction(2);

function calculateFunction(n) {
  
  let promises = Promise.resolve();
  
  for (let i = 0; i < n; i++) {
    
    promises = promises.then(() => 
        new Promise((resolve) => showCalculete(i, resolve))
      );
  }
  promises.then(() => {
    console.log("Таким образом, ответ для F(x):" + finalSum);
  });
}

function showCalculete(i, callback) { 
  setTimeout(() => {
    
    let funcValue = functions[i](x);
    finalSum += funcValue;

    console.log("f" + (i + 1) + " дает значение " 
                + funcValue + ", промежуточный результат " + finalSum);
  
    callback();
  }, Math.floor(Math.random() * 1000))
}



///// 4

function sum(a, b) {
  return new Promise((resolve, reject) => {

    if (a === undefined || b === undefined ||
        typeof a !== 'number' || typeof b !== 'number') 
    {
      reject('Один из аргументов не определён или имеет не number тип');
      return;
    }

    let i = 1;

    function show(a, b) { 
      setTimeout(() => {
      
        if (i <= 5) {
          console.log("Итерация №" + (i) + " дает сумму " + (a + b));
          
          i++;
          show(a + b, b);

        } else {
          resolve("Итерации окончены");
        }
      }, 2000)
    }
    show(a, b);
  });
}

sum(5, 4)
  .then(result => {console.log(result)})
  .catch(error => {console.log(error)});

sum(5, "hf")
  .then(result => {console.log(result)})
  .catch(error => {console.log(error)});



///// 5

//2
 
console.log('start');
showInfo();
console.log('end');

async function showInfo() {
  await readConfig('myConfig');
  await doQuery('select * from cities');
  await httpGet('http://google.com');
  await readFile('README.md');
}


//3


finalSum = 0;
x = 2;

calculateFunction(2);

async function calculateFunction(n) {
  
  for (let i = 0; i < n; i++) {

    await new Promise((resolve) => showCalculete(i, resolve));
  }
  console.log("Таким образом, ответ для F(x):" + finalSum);
}

function showCalculete(i, callback) { 
  setTimeout(() => {
    
    let funcValue = functions[i](x);
    finalSum += funcValue;

    console.log("f" + (i + 1) + " дает значение " 
                + funcValue + ", промежуточный результат " + finalSum);
  
    callback();
  }, Math.floor(Math.random() * 1000))
}


//4

function sum4(a, b) {
  return new Promise((resolve, reject) => {

    if (a === undefined || b === undefined ||
        typeof a !== 'number' || typeof b !== 'number') 
    {
      reject(new Error('Один из аргументов не определён или имеет не number тип'));
      return;
    }

    let i = 1;

    function show4(a, b) { 
      setTimeout(() => {
      
        if (i <= 5) {
          console.log("Итерация №" + (i) + " дает сумму " + (a + b));
          
          i++;
          show4(a + b, b);

        } else {
          resolve("Итерации окончены");
        }
      }, 2000)
    }
    show4(a, b);
  });
}

async function start() {
  await sum4(5, 4);

	try {
		await sum4(5, "hf");
	}
	catch (err) {
		console.log(err.message);
	}
}

start();


///// 6

async function wait() { 
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  return 10; 
}
function f() {
  wait().then(result => {console.log(result)});
}

f();

///// 7

let contendersList = [['Ivan', 5, 2, 7, 2], ['John', 3, 4, 5, 1], ['Sophia', 4, 2, 5, 1]];

interview(contendersList);

async function interview(contenders) {
  
  for (let contender of contenders) {
    taskСompleter(contender);
  }
}

async function taskСompleter(contender) {
  
  await task(contender[0], contender[1], contender[2], 1);

  console.log(contender[0] + " is resting.");
  await waiting("", 5000); 

  await task(contender[0], contender[3], contender[4], 2);
}

async function task(contenderName, timeMove, timeCompleted, i) {

  console.log(contenderName + " started the " + i + " task.");
  await waiting(contenderName + " moved on to the defense of the " + i + " task.", timeMove * 1000);
  await waiting(contenderName + " completed the " + i + " task.", timeCompleted * 1000);
}

async function waiting(message, time) {
  await new Promise(resolve => {
    
    setTimeout(() => {
      
      if (message) {
        console.log(message);
      }
      resolve();

    }, time);
  });
}
