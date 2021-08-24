"use strict"

// Остновы JS


//task1
/* Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//task2
/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

let schedule = {};

function isEmpty(obj) {
    for (let prop in obj) {
        if (prop) return alert('false');
    }
    return alert('true');
}

//task3
/* const user = {
    name: "John"
  };

  // это будет работать?
  user.name = "Pete"; */  // будет работать, т.к. const не позволяет менять тип переменной, но свойства объекта можно менять, как часть данного типа.

//task4
/* У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
John: 100,
Ann: 160,
Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
function sum(obj) {
    let summa = 0;
    for (let key in obj) {
        summa += obj[key];
    }
    return alert(summa);
}

//task5
/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.

Открыть песочницу с тестами для задачи. */

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (Number(obj[key])) obj[key] *= 2;
    }
}

multiplyNumeric(menu);
// console.log(menu);

//task6
// Вложенное клонирование
let user_1 = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone = _.cloneDeep(user_1);
user_1.sizes.width++
// console.log(clone);

//task7
/* Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)()                        // ошибка, т.к. нет ; из-за чего код сливается, если поставить ; то скобки не влияют на код и функция исполняется правильно
P.S. Здесь есть подвох :) */


//task8
/* В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]   // this указывает на объект

(obj.go)();             // (2) [object Object]   // this указывает на объект

(method = obj.go)();    // (3) undefined   // this теряется т.к. выражение присваивания меняет контекст

(obj.go || obj.stop)(); // (4) undefined */   // this теряется т.к. логическое выражение меняет контекст


//task9
/* Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? */      // будет ошибка т.к. this присваивается методам объекта


//task10
/* Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

let calculator = {
    read() {
        this.firstN = parseInt(prompt('Первое значение'));
        this.secondN = parseInt(prompt('Второе значение'));
    },
    sum() {
        return this.firstN + this.secondN;
    },
    mul() {
        return this.firstN * this.secondN;
    }

};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


//task10
/* Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
Такой подход широко используется в библиотеках JavaScript. */

function makeSteps() {
    return {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep() {
            alert(this.step);
            return this;
        }
    }
};

let ladder = makeSteps();

// ladder.up().up().down().showStep();


//task11
/* Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
Если да – приведите пример вашего кода. */

let obj = {};

function A() {
    this.name = "Вася";
    return obj;
}

function B() {
    this.name = "Тося";
    return obj;
}

let a = new A;
let b = new B;
// могут вернуть один и тот же неизмененный объект
// console.log(a, b);
// alert(a == b);


//task12
/* Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Calculator1() {
    this.read = function () {
        this.firstN = parseInt(prompt('Первое значение'));
        this.secondN = parseInt(prompt('Второе значение'));
    };
    this.sum = function () {
        return this.firstN + this.secondN;
    };
    this.mul = function () {
        return this.firstN * this.secondN;
    };
}

// let calculator1 = new Calculator1();
// calculator1.read();

// alert("Sum=" + calculator1.sum());
// alert("Mul=" + calculator.mul());


//task13
/* Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.readV = parseInt(prompt('Значение'));
        this.value += this.readV;
    };
}

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);
