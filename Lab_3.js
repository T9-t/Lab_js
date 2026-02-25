
console.log("________  1  ________");

let user1 = {};

user1.name = "John";
user1.surname = "Smith";
console.log(user1);

user1.name = "Pete";
console.log(user1);

delete user1.name;
console.log(user1);


console.log("________  2  ________");

let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0"
};

for (key in myBrowser) {
    console.log(myBrowser[key]);
}


console.log("________  3  ________");

console.log(isEmpty({}));
console.log(isEmpty({name: "Me", age: 15}));

function isEmpty(obj) { 

    if (Object.keys(obj).length != 0) { 
        return false;

    } else {
        return true;
    }
}


console.log("________  4  ________");

const user = {
    name: "John"
};

//будет работать так как в const можно менять содержимое объекта
user.name = "Pete";

//не будет работать так как нельзя переназначить переменную const 
//user = 123;

console.log(user);


console.log("________  5  ________");

let numbers = {

    num1: 15,
    num2: 4,
    str: "My name",
    arr: [1, "fsg"]
};

multiplyNumeric(numbers);
console.log(numbers);

function multiplyNumeric(obj) {
    
    for (key in obj) {
        if (typeof obj[key] === "number") { 

            obj[key] *= 2;
        }
    }
}


console.log("________  6  ________");

let calculator = {

    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read(5, 4);
console.log("a = " + calculator.a + ", b = " + calculator.b);
console.log("a + b = " + calculator.sum());
console.log("a * b = " + calculator.mul());


console.log("________  7  ________");
let ladder = {
    step: 0, 
    up() { 
        this.step++;
        return this;
    }, 
    down() { 
        this.step--;
        return this;
    }, 
    showStep: function() {
        console.log(this.step);
        return this; 
    } 
};

ladder.up().up().down().showStep().down().showStep();


console.log("________  8  ________");

function Browser(name, version) {
    this.name = name;
    this.version = version;

    this.aboutBrowser = function() {
        console.log("Browser name -- " + this.name);
        console.log("Browser version -- " + this.version);
    };
}

myBrowser = new Browser("Microsoft Internet Explorer", "9.0");
myBrowser.aboutBrowser();


console.log("________  9  ________");

function Employee(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;

    this.info = function() {
        console.log("Employee name -- " + this.name);
        console.log("Employee department -- " + this.department);
        console.log("Employee phone -- " + this.phone);
        console.log("Employee salary -- " + this.salary);
    };
}

const employee = new Employee("Bob", 15, "+7 905 981-70-62", 35000);
employee.info();


console.log("________  10  ________");

function Calculator() {

    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}


console.log("________  11  ________");

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(a) {
        this.value += a;
    };
}

let accumulator = new Accumulator(1);
accumulator.read(10); 
accumulator.read(5);
console.log(accumulator.value);


console.log("_________________________________");


console.log("________  1  ________");
let animal = { 
    jumps: null 
}; 
let rabbit = { 
    __proto__: animal, 
    jumps: true 
};

console.log(rabbit.jumps);//true

delete rabbit.jumps;

console.log(rabbit.jumps); //null

delete animal.jumps;

console.log(rabbit.jumps); //undefined


console.log("________  2  ________");

animal = { 
    eat() { 
        this.full = true; 
    } 
}; 
rabbit = { 
    __proto__: animal 
}; 

rabbit.eat();

console.log(Object.keys(rabbit));//full
console.log(Object.keys(animal));//eat


console.log("________  3  ________");

let hamster = { 
    stomach: [],

    eat(food) { 
        this.stomach.push(food); 
    } 
}; 

let speedy = { 
    stomach: [],

    __proto__: hamster 
};

let lazy = {
    stomach: [],

    __proto__: hamster 
}; 

speedy.eat("apple"); 
console.log(speedy.stomach);

console.log(lazy.stomach);


console.log("________  4  ________");

String.prototype.color = "black"; 
String.prototype.size = 14;

String.prototype.write = stringWrite;
function stringWrite(){ 
    console.log("Цвет текста: " + this.color);
    console.log("Размер шрифта: " + this.size);
    console.log("Текст: " + this.toString());
} 

let s = new String("Это строка"); 
s.color = "red";
s.size = 28;
s.write(); 
let s2 = new String("Вторая строка"); 
s2.write(); 


console.log("________  5  ________");

function Rabbit() {} 
Rabbit.prototype = { 
    eats: true 
};

rabbit = new Rabbit(); 

console.log(rabbit.eats);

//Rabbit.prototype = {}; true
//Rabbit.prototype.eats = false; false
//delete rabbit.eats; true
//delete Rabbit.prototype.eats; undefined


console.log("_________________________________");

console.log("________  1  ________");

class Clock {

    hours = 18;
    minutes = 45;
    seconds = 15;

    showTime() {
        console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    };
}

let clock = new Clock();
clock.showTime();


console.log("________  2  ________");

class Animal { 

    constructor(name) { 
        this.name = name; 
    } 
}

class Rabbit2 extends Animal { 
    constructor(name) { 
        super(name);
        this.created = Date.now(); 
    } 
} 

rabbit = new Rabbit2("Белый кролик");
console.log(rabbit.name);


console.log("________  3  ________");

class Clock2 { 
    constructor(template) { 
        this.template = template; 
    } 
 
    render() { 
        let date = new Date(); 
 
        let hours = date.getHours(); 
        if (hours < 10) hours = '0' + hours; 
 
        let mins = date.getMinutes(); 
        if (mins < 10) mins = '0' + mins; 
 
        let secs = date.getSeconds(); 
        if (secs < 10) secs = '0' + secs; 
 
        let output = this.template 
            .replace('h', hours) 
            .replace('m', mins) 
            .replace('s', secs); 
 
        console.log(output); 
    } 
 
    stop() { 
        clearInterval(this.timer); 
    } 
 
    start() { 
        this.render(); 
        this.timer = setInterval(() => this.render(), 1000); 
    } 
}

class ExtendedClock extends Clock2 {

    precision = 1000;

    constructor(template) {
        super(template);
    }

    start() { 
        this.render();
        this.timer = setInterval(() => this.render(), this.precision); 
    } 
}

let extendedClock = new ExtendedClock("h m s"); 
//extendedClock.start();


console.log("________  4  ________");

class Box {
    constructor(w, v, serialNumber) {
        this.w = w;
        this.v = v;
        this.serialNumber = serialNumber;
    }
}

class Stock {
    constructor() {
        this.serialNumberCounter = 0;
        this.boxes = [];
    }
    
    add(w, v) {
        this.boxes.unshift(new Box(w, v, this.serialNumberCounter));
        this.serialNumberCounter++;
    }

    getByW(minW) {

        let min = Number.MAX_VALUE;

        for (let i = 0; i < this.boxes.length; i++) {

            if (this.boxes[i].w == minW) {
                return this.boxes[i].serialNumber;
            }
            else if (this.boxes[i].w > minW && this.boxes[i].w < min) {
                min = this.boxes[i].w;
            }
        }

        if (min == Number.MAX_VALUE) {
            return -1;
        } else {
            return this.boxes.find(box => box.w == min).serialNumber;
        }
    }

    getByV(minV) {

        let min = Number.MAX_VALUE;

        for (let i = 0; i < this.boxes.length; i++) {

            if (this.boxes[i].v == minV) {
                return this.boxes[i].serialNumber;
            }
            else if (this.boxes[i].v > minV && this.boxes[i].v < min) {
                min = this.boxes[i].v;
            }
        }

        if (min == Number.MAX_VALUE) {
            return -1;
        } else {
            return this.boxes.find(box => box.v == min).serialNumber;
        }
    }

    deleteBox(serialNumber) {
        this.boxes = this.boxes.filter(box => (box.serialNumber != serialNumber));
    }
}

let stock = new Stock();

stock.add(15, 6);
stock.add(1, 16);
stock.add(1, 3);
stock.add(2, 6);

console.log(stock.boxes);

console.log(stock.getByW(1));
console.log(stock.getByW(2));

console.log(stock.getByV(6));
console.log(stock.getByV(3));

console.log(stock.getByW(20));
console.log(stock.getByV(20));

stock.deleteBox(0);
console.log(stock.boxes);