"use strict"

// Остновы JS

// task2
function alert2() {
    alert('Я JavaScript!');
}

// task3
let admin;
let name_0 = 'John';

function alert3() {
    admin = name_0;
    alert(admin);
}

// task4
let planetEarth;
let currentUserName;

// task5
const BIRTHDAY = '20.02.2020'; //possible

const AGE = someCode(BIRTHDAY); // better use const age because of function someCode

// task6
let name_1 = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name_1}`); // hello Ilya

// task7
function askName() {
    let askName = prompt('What is your name?');
    alert(`Your name is ${askName}`);
}

// task8
let a1 = 1, b1 = 1;

let c1 = ++a1; // 2, a1=2
let d1 = b1++; // 1, b1=2

// task9
let a2 = 2;

let x2 = 1 + (a2 *= 2);
// a2=4, x2=5

// task10
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // ' -9 5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// task11
function sum() {
    let a2 = prompt("Первое число?", 1);
    let b2 = prompt("Второе число?", 2);

    alert(+a2 + +b2);
}

// task12
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// task13
if ("0") { // выведет true т.к. строка не пустая
    alert('Привет');
}

// task13
function jsName() {
    let question = prompt('Какое «официальное» название JavaScript?');

    let answer = question == 'ECMAScript' ? alert('Верно') : alert('Не знаете? ECMAScript!');
}

// task14
function findTheNumber() {
    let question = parseInt(prompt('Введите число '));

    let answer = question > 0 ? '1' : question < 0 ? '-1' : question == 0 ? '0' : 'Введите число!';
    alert(answer);
}

// task15
function alotFew() {
    let result = a + b < 4 ? 'Мало' : 'Много';
    alert(result);
}

// task16
function sayHello() {
    let message = login == 'Сотрудник' ? 'Привет'
        : login == 'Директор' ? 'Здравствуйте'
            : login == '' ? 'Нет логина'
                : '';
    alert(message);
}

// task17
alert(null || 2 || undefined); // 2 - первый true

// task18
alert(alert(1) || 2 || alert(3)); // alert(1) + 2, так как alert() возвращает undefined, то исполнится первый true оператор, но и первый alert(1)


// task19
alert(1 && null && 2); // null - первый false

// task20
alert(alert(1) && alert(2)); // alert(1) + undefined - первый false + то что возвращает alert()

// task21
alert(null || 2 && 3 || 4); // 3 - первый true в || и последний в &&

// task22
if (age >= 14 && age <= 90) alert(true);

// task23
if (age < 14 || age > 90)

    if (age >= 14 && age <= 90) alert(false);

if (!(age >= 14 && age <= 90))

    if ((age != 14 && age < 14) && (age != 90 && age > 90)) alert(true);

// task24
if (-1 || 0) alert('first'); // выполняется,т.к. -1=true, т.к. найдено первое true
if (-1 && 0) alert('second'); // не выполняется,т.к. найдено первое false = 0
if (null || -1 && 1) alert('third'); // выполняется,т.к. найдено первое true  в || из последнего true в &&

// task25
function logIn() {
    let askForLogin = prompt('Введите Ваш логин: ');

    if (askForLogin == 'Админ') {
        let pass = prompt('Введите пароль: ');

        let res = pass == 'Я главный' ? 'Здравствуйте!'
            : pass != 'Я главный' ? 'Неверный пароль'
                : pass == '' || null ? 'Отменено'
                    : 'Отменено';
        alert(res);

    } else if (askForLogin == '' || askForLogin == null) {
        alert('Отменено');

    } else {
        alert('Я вас не знаю');
    }

}

// task26
let i = 3;

while (i) {  // последним выведет 1, 0 = false
    alert(i--);
}

// task27
let j = 0;
while (++j < 5) alert(j); // от 1 до 4 т.к. сначала увеличивается j а затем сравнивается, т.е. на сравнении 5<5 все закончится без последующего увеличения j

let k = 0;
while (k++ < 5) alert(k); // от 1 до 5 т.к. k после сравнения увеличивается теряя 0 и получая 5 в конце.

// task28
for (let g = 0; g < 5; g++) alert(g);// от 0 до 4 т.к. цикл for всегда выполняет начальное условие а условие №3 выполняется как бы отдельно, соответственно не важно форма инкремента


for (let e = 0; e < 5; ++e) alert(e); // тоже самое

// task28
function evenNums() {
    for (let i = 1; i <= 10; ++i) {
        if (i % 2 != 0) continue;
        alert(i);
    }
}

// task29
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }
function rewrite() {
    let q = 0;
    while (q < 3) {
        alert(`number ${q}!`)
        q++;
    }
}

// task30
function hundredAnd() {
    let num;
    do {
        num = parseInt(prompt('Введите число больше 100: '));
    } while (num <= 100);
}

// task31
function naturalNums(num) {
    let n = 1;
    again:
    while (n < num) {
        n++;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) continue again;
        }
        alert(n);
    }
}

// task32
function browsers() {
    if (browser == 'Edge') {
        alert("You've got the Edge!");
    } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }
}

// task33
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

// task34      // функции работают одинаково
function checkAge1(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

// task35

let age1 = age > 18 ? true : confirm('Родители разрешили?');
let age2 = age > 18 || confirm('Родители разрешили?');

// task36
function min1(a, b) {
    let res = a < b ? a : b;
    return alert(res);
}

// task37
function pow(x, n) {
    let res = x ** n;
    return alert(res);
}

// task38

let ask = (question, yes, no) => {
    if (confirm(question)) return yes();
    else return no();
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);