"use strict"

// Остновы JS

// task2
Возьмите решение предыдущей задачи Вызвать alert, и измените его. Извлеките содержимое скрипта во внешний файл alert.js, лежащий в той же папке.
Откройте страницу, убедитесь, что оповещение работает.

//Ответ

function alert2() {
    alert('Я JavaScript!');
}

// task3
Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

//Ответ

let admin;
let name_0 = 'John';

function alert3() {
    admin = name_0;
    alert(admin);
}

// task4
Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

//Ответ
    
let planetEarth;
let currentUserName;

// task5
Рассмотрим следующий код:

const birthday = '18.04.1982';

const age = someCode(birthday);
У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода, используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).

Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?

const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

const AGE = someCode(BIRTHDAY); // а здесь?

//Ответ

const BIRTHDAY = '20.02.2020'; //possible

const AGE = someCode(BIRTHDAY); // better use const age because of function someCode

// task6
Что выведет этот скрипт?

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?

//Ответ

let name_1 = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name_1}`); // hello Ilya

// task7
Создайте страницу, которая спрашивает имя у пользователя и выводит его.

//Ответ

function askName() {
    let askName = prompt('What is your name?');
    alert(`Your name is ${askName}`);
}

// task8
Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

//Ответ

let a1 = 1, b1 = 1;

let c1 = ++a1; // 2, a1=2
let d1 = b1++; // 1, b1=2

// task9
Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;

let x = 1 + (a *= 2);

//Ответ

let a2 = 2;

let x2 = 1 + (a2 *= 2);
// a2=4, x2=5

// task10
Какой результат будет у выражений ниже?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
Подумайте как следует, запишите ответы и сверьтесь с решением.

//Ответ

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
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12

//Ответ

function sum() {
    let a2 = prompt("Первое число?", 1);
    let b2 = prompt("Второе число?", 2);

    alert(+a2 + +b2);
}

// task12
Каким будет результат этих выражений?

5 > 4
"ананас" > "яблоко"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

//Ответ

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// task13
Выведется ли alert?

if ("0") {
  alert( 'Привет' );

//Ответ

if ("0") { // выведет true т.к. строка не пустая
    alert('Привет');
}

// task13
function jsName() {
    let question = prompt('Какое «официальное» название JavaScript?');

    let answer = question == 'ECMAScript' ? alert('Верно') : alert('Не знаете? ECMAScript!');
}

// task14
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

//Ответ

function findTheNumber() {
    let question = parseInt(prompt('Введите число '));

    let answer = question > 0 ? '1' : question < 0 ? '-1' : question == 0 ? '0' : 'Введите число!';
    alert(answer);
}

// task15
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.

//Ответ

function alotFew() {
    let result = a + b < 4 ? 'Мало' : 'Много';
    alert(result);
}

// task16
Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

//Ответ

function sayHello() {
    let message = login == 'Сотрудник' ? 'Привет'
        : login == 'Директор' ? 'Здравствуйте'
            : login == '' ? 'Нет логина'
                : '';
    alert(message);
}

// task17
Что выведет код ниже?

alert( null || 2 || undefined );

//Ответ

alert(null || 2 || undefined); // 2 - первый true

// task18
Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );

//Ответ

alert(alert(1) || 2 || alert(3)); // alert(1) + 2, так как alert() возвращает undefined, то исполнится первый true оператор, но и первый alert(1)


// task19
Что выведет код ниже?

alert( 1 && null && 2 );

//Ответ

alert(1 && null && 2); // null - первый false

// task20
Что выведет код ниже?

alert( alert(1) && alert(2) );

//Ответ

alert(alert(1) && alert(2)); // alert(1) + undefined - первый false + то что возвращает alert()

// task21
Что выведет код ниже?

alert( null || 2 && 3 || 4 );

//Ответ

alert(null || 2 && 3 || 4); // 3 - первый true в || и последний в &&

// task22
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.

//Ответ

if (age >= 14 && age <= 90) alert(true);

// task23
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

//Ответ

if (age < 14 || age > 90)

    if (age >= 14 && age <= 90) alert(false);

if (!(age >= 14 && age <= 90))

    if ((age != 14 && age < 14) && (age != 90 && age > 90)) alert(true);

// task24
Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

//Ответ

if (-1 || 0) alert('first'); // выполняется,т.к. -1=true, т.к. найдено первое true
if (-1 && 0) alert('second'); // не выполняется,т.к. найдено первое false = 0
if (null || -1 && 1) alert('third'); // выполняется,т.к. найдено первое true  в || из последнего true в &&

// task25
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
Блок-схема:

Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull.

//Ответ

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
Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert( i-- );
}

//Ответ

let i = 3;

while (i) {  // последним выведет 1, 0 = false
    alert(i--);
}

// task27
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выводят alert с одинаковыми значениями или нет?

Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert( i );
Постфиксный вариант i++

let i = 0;
while (i++ < 5) alert( i );

//Ответ

let j = 0;
while (++j < 5) alert(j); // от 1 до 4 т.к. сначала увеличивается j а затем сравнивается, т.е. на сравнении 5<5 все закончится без последующего увеличения j

let k = 0;
while (k++ < 5) alert(k); // от 1 до 5 т.к. k после сравнения увеличивается теряя 0 и получая 5 в конце.

// task28
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выведут alert с одинаковыми значениями или нет?

Постфиксная форма:

for (let i = 0; i < 5; i++) alert( i );
Префиксная форма:

for (let i = 0; i < 5; ++i) alert( i );

//Ответ

for (let g = 0; g < 5; g++) alert(g);// от 0 до 4 т.к. цикл for всегда выполняет начальное условие а условие №3 выполняется как бы отдельно, соответственно не важно форма инкремента


for (let e = 0; e < 5; ++e) alert(e); // тоже самое

// task29
При помощи цикла for выведите чётные числа от 2 до 10.

//Ответ

function evenNums() {
    for (let i = 1; i <= 10; ++i) {
        if (i % 2 != 0) continue;
        alert(i);
    }
}

// task30
Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );

//Ответ

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

// task31
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

//Ответ

function hundredAnd() {
    let num;
    do {
        num = parseInt(prompt('Введите число больше 100: '));
    } while (num <= 100);
}

// task32
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.

//Ответ

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

// task33
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

//Ответ

function browsers() {
    if (browser == 'Edge') {
        alert("You've got the Edge!");
    } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }
}

// task34
Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

//Ответ

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

// task35
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта?

//Ответ

// функции работают одинаково
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

// task36
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||

//Ответ

let age1 = age > 18 ? true : confirm('Родители разрешили?');
let age2 = age > 18 || confirm('Родители разрешили?');

// task37
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//Ответ

function min1(a, b) {
    let res = a < b ? a : b;
    return alert(res);
}

// task38
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

Запустить демо

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

//Ответ

function pow(x, n) {
    let res = x ** n;
    return alert(res);
}

// task39
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

//Ответ

let ask = (question, yes, no) => {
    if (confirm(question)) return yes();
    else return no();
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
