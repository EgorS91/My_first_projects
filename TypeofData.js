"use strict";
//task1
/* Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
Как вы думаете, это сработает? Что выведется на экран? */

// ошибка, т.к. свойство исчезнет вместе с объектом-оберткой.

//task2
/* Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

Запустить демо

P.S. Есть «подводный камень» при работе с типами. */

function sum_2(num1, num2) {
  return alert(num1 + num2);
}
// sum_2 (parseInt(prompt('Число 1: ')),parseInt(prompt('Число 2: ')));

//task3
/* Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3
Как правильно округлить 6.35? */

// число 6.35 округлено до меньшего 6.33, т.к. при разложении числа до 6.34999999999999964473 видно что оно менее 6.35, за счет чего округляется в меньшую сторону
// alert( 6.35.toFixed(1) );

// чтобы правильно округлить число, необходимо его умножить до целого и затем округлить используя с другой функцией Math.round, отбрасывая степень и только потом разделить на 10, поделя целое на целое и степень
// alert(Math.round(6.35*10)/10); // 6.4

//task4
/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function enterNum(word = "Введите любое числовое значение: ") {
  let num = prompt(word);
  if (num == null || num == "") alert("Отменено");
  else if (!Number(num))
    enterNum("Только числовое значение или нажать Отмена!");
  else return alert(`Спасибо, ваше число ${num}`);
}
// enterNum();

//task5
/* Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
} */

// бесконечный, потому что из-за неточные вычисления 64-битного числого формата, получаемое число минимально перешагнет целочисленное 10.

//task5
/* Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */

function random(min, max) {
  let random = Math.random() * (max - min) + min;

  alert(random);
}

//  random(1, 5);
//  random(1, 5);
//  random(1, 5);

//task6
/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5 */

function random(min, max) {
  let random = Math.random() * (max - min + 1) + min;

  alert(Math.floor(random));
}

// random(1, 5);

//task7
/*  Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася"; */

function ucFirst(str) {
  if (str == "" || str == null) return alert("пустая строка");
  else return alert(str[0].toUpperCase() + str.slice(1));
}

// ucFirst('вася');

//task8
/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(str) {
  let checkStr = str.toLowerCase();
  console.log(checkStr);
  if (checkStr.includes("viagra") || checkStr.includes("xxx"))
    return alert("true");
  else return alert("false");
}
// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");

//task9
/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!" */

function truncate(str, maxlength) {
  let length = str.length;
  if (length > maxlength) return console.log(str.slice(0, 20) + "...");
  else return console.log(str);
}
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
// truncate("Всем привет!", 20);

//task10
/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true */

function extractCurrencyValue(str) {
  if (str.startsWith("$")) return str.slice(1);
  else if (str.endsWith("$")) return str.substring(str.length - 1, 0);
  else return str;
}
// alert(extractCurrencyValue('120$'));
// alert(extractCurrencyValue('$120'));

//task11
/* Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ? */ // выведет изменненную длинну массива,т.к. массивы явдяются объектами. Ответ 3+1 = 4

//task12
/* Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл */

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.ceil(styles.length / 2 - 1)] = "Классика";
// alert(styles.shift());
styles.unshift("Рэп", "Регги");

//task13
/* Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ? */ //Выводится массив, т.к. массив это объект, соответственно область действия this - сам массив arr;

//task14
/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

function sumInput() {
  let arr = [];
  let num1 = prompt("Введите число №1: ");

  if (num1 == null) return alert("Отмена");
  else if (num1 == "") return alert("Ничего не ввели!");
  else if (!Number(num1)) return alert("Суммируем только числа!");
  else {
    let num2 = prompt("Введите число №2: ");
    arr.push(num1, num2);
  }
  let sum = 0;
  for (let prop of arr) {
    sum += Number(prop);
  }
  return alert(sum);
}
// sumInput();

//task15
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMaxSubSum(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    console.log(sum);
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }

  return alert(max);
}

// getMaxSubSum([1, 2, 3]);

// Первый цикл передает второму циклу индекс 0, второй цикл перемножает все от 0го индекса и до конца(получаем 6), вычисляем что больше 0 или 6 и записываем большее в переменную хранящую
// максимальное число после сложения. Затем первый цикл передает второму индекс 1, а второй перемножает от него и до конца массива (получаем 5), сравниваем 5 и 6, оставляем 6
// Далее передается 2 идекс от первого цикла второму, после чего число 3 сравнивается с 6 и оставляется число 6(получаем 6). На этом итерация заканчивается. число 6 - ответ.

//task16
/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

function split(str) {
  return (str = str.split("-"));
}

function clearBlanks(str) {
  for (let item of str) {
    if (item == "") str.splice(item, 1);
    return str;
  }
}

function camelize(str) {
  return str.map((prop, index) => {
    if (index == 0) return prop;
    if (index != 0) return prop[0].toUpperCase() + prop.slice(1);
  });
}

function makeStrFromArr(str) {
  return str.join("");
}

// console.log(makeStrFromArr(camelize(clearBlanks(split("-webkit-transition")))));
// console.log(makeStrFromArr(camelize(clearBlanks(split("background-color")))));
// console.log(makeStrFromArr(camelize(clearBlanks(split("list-style-image")))));

//task17
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((item) => (item >= a && item <= b ? item : null));
}
let filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);

//task18
/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1] */

let arr_1 = [5, 3, 8, 1];

function filterRange_1(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
  }
}

// filterRange_1(arr_1, 1, 4);

// console.log(arr_1);

//task19
/* Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10 */

let arr_2 = [5, 2, 1, -10, 8];

function sorting(arr) {
  arr.sort((a, b) => a - b);
}
// sorting(arr_2);

// console.log(arr_2);

//task20
/* Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) */

let arr_3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let newArr = arr.slice();
  newArr.sort();
  return newArr;
}

let sorted = copySorted(arr_3);

// alert( sorted );

// alert( arr_3 );

//task21
/* Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок. */

function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let a = Number(str.split(" ").splice(0, 1));
    let b = Number(str.split(" ").splice(2, 1));
    let operator = str.split(" ").splice(1, 1);

    if (!this.method[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.method[operator](a, b);
  };

  this.addMethod = function (operatorName, func) {
    this.method[operatorName] = func;
  };
}

// let calc = new Calculator;
// console.log( calc.calculate("3 + 7"));

// let powerCalc = new Calculator;
// console.log( powerCalc.addMethod("*", (a, b) => a * b));
// console.log( powerCalc.addMethod("/", (a, b) => a / b));
// console.log( powerCalc.addMethod("**", (a, b) => a ** b));

//task22
/* У вас есть массив объектов users, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = [];

let onlyNames = users.map((item) => item.name);
// console.log(onlyNames);

//task23
/* У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = /* ... ваш код ... 

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка. */

let vasya_1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya_1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha_1 = { name: "Маша", surname: "Петрова", id: 3 };

let users_1 = [vasya_1, petya_1, masha_1];

let usersMapped = users_1.map((item) => ({
  fullName: item.name + " " + item.surname,
  id: item.id,
}));

// console.log(usersMapped);

//task24
/* Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя */

let vasya_2 = { name: "Вася", age: 25 };
let petya_2 = { name: "Петя", age: 30 };
let masha_2 = { name: "Маша", age: 28 };

let users_2 = [vasya_2, petya_2, masha_2];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(users_2);

// console.log(users_2);

//task25
/* Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая. */

let arr_4 = [1, 2, 3];

function shuffle(array) {
  let min = array[0];
  let max = array.length;

  let newArr = array.map(
    (item) => Math.floor(Math.random() * (max - min + 1)) + min
  );
  console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[0] === newArr[1] || newArr[0] === newArr[2])
      newArr[0] = Math.floor(Math.random() * (max - min + 1)) + min;

    if (newArr[1] === newArr[0] || newArr[1] === newArr[2])
      newArr[1] = Math.floor(Math.random() * (max - min + 1)) + min;

    if (newArr[2] === newArr[0] || newArr[2] === newArr[1])
      newArr[2] = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (
    newArr[0] != newArr[1] &&
    newArr[0] != newArr[2] &&
    newArr[1] != newArr[0] &&
    newArr[1] != newArr[2]
  )
    return newArr;
}

// console.log(shuffle(arr_4));      // лучшее что пока смог сделать сам, если есть совпадение в массиве, то он возвращает undefined, в остальном - перемешивает. Но функция не расширяемая автоматически.

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr_5 = [1, 2, 3];
// shuffle(arr_5);
// alert(arr_5);

//task26
/* Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */

let vasya_4 = { name: "Вася", age: 25 };
let petya_4 = { name: "Петя", age: 30 };
let masha_4 = { name: "Маша", age: 29 };

let arr_6 = [vasya_4, petya_4, masha_4];

function getAverageAge(users) {
  let averageSum = 0;

  users.map((item) => {
    averageSum += item.age / users.length;
  });

  return console.log(averageSum);
}

// getAverageAge(arr_6);

//task26
/* Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {

}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O */

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique_1(arr) {
  let newArr = [];

  for (let word of arr) {
    if (!newArr.includes(word)) newArr.push(word);
  }
  return console.log(newArr);
}

// unique_1(strings);

//task27
/* Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:

function unique(arr) {
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений. */

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique_2(arr) {
  let set = new Set();

  for (let item of arr) set.add(item);

  let newArr = [];

  for (let oneMean of set) newArr.push(oneMean);

  return console.log(newArr);
}
// unique_2(values); // мой окольный вариант

//Короткий вариант из примера
function unique_3(arr) {
  return Array.from(new Set(arr));
}

//task28
/* 
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

let arr_8 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let lowerWord = word.toLowerCase().split("").sort().join("");
    map.set(lowerWord, word);
  }
  return console.log(Array.from(map.values()));
}

// aclean(arr_8);

//task29
/* Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал? */

let map = new Map();

map.set("name", "John");
let keys = map.keys();
let keys1 = Array.from(keys);
keys1.push("more");

// console.log(keys1);

//task30
/* Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям. */

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessage = new WeakSet();
readMessage.add(messages[0]);
readMessage.add(messages[1]);

// console.log(
//   `Show what message was read: сообщение №1 - ${readMessage.has(
//     messages[0]
//   )}, сообщение №2 - ${readMessage.has(
//     messages[1]
//   )}, сообщение №3 - ${readMessage.has(messages[2])}`
// );

//task31
/* Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее. */

let messages_1 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessage_1 = new WeakMap();
readMessage_1.set(messages_1[0], Date());
readMessage_1.set(messages_1[1], Date());

// console.log(
//   `Show what message was read and when: сообщение №1 - ${readMessage_1.has(
//     messages_1[0]
//   )}, сообщение №2 - ${readMessage_1.has(
//     messages_1[1]
//   )}, сообщение №3 - ${readMessage_1.has(messages_1[2])}`
// );

//task32
/* console.log(some(first, second));

Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650 */

let salaries_1 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let total = 0;
  for (let salary of Object.values(salaries)) total += salary;
  return total;
}

// console.log(sumSalaries(salaries_1));

//task33
/* Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные». */

function count(obj) {
  return Object.keys(obj).length;
}

let user_3 = {
  name: "John",
  age: 30,
};

// alert(count(user_3));

//task33
/* У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false */

let user_7 = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user_7;

// alert(name);
// alert(age);
// alert(isAdmin);

//task34
/* У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

let salaries_2 = {};

function topSalary(salaries) {
  let test = Object.values(salaries).sort((a, b) => a - b);
  for (let [name, value] of Object.entries(salaries)) {
    if (value === test[test.length - 1]) return console.log(name);
  }
  return console.log(null);
}

// topSalary(salaries_2);

//task35
/* Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert. */

let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

//task36
/* Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ" */

let date_1 = new Date(2012, 0, 3);

function getWeekDay(date) {
  let days = ["«ВС»", "«ПН»", "«ВТ»", "«СР»", "«ЧТ»", "«ПТ»", "«СБ»"];
  for (let i = 0; i < days.length; i++)
    i == date.getDay() ? console.log(days[i]) : "";
}
// getWeekDay(date_1);

// короткое из примера

function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return alert(days[date.getDay()]);
}
// getWeekDay(date_1);

//task37
/* В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2 */

let date_2 = new Date(2012, 0, 3);

function getLocalDay(date) {
  return date.getDay();
}

// alert(getLocalDay(date_2));       // автоматически показывает 2

//task38
/* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date. */

let date_3 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let changed = new Date(date);
  changed.setDate(changed.getDate() - days);
  console.log(changed);
}

// getDateAgo(date_3, 1); // 1, (1 Jan 2015)
// getDateAgo(date_3, 2); // 31, (31 Dec 2014)
// getDateAgo(date_3, 365); // 2, (2 Jan 2014)

//task39
/* Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). */

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  date.setDate(date.getDate() - 1);
  console.log(date);
}

// getLastDayOfMonth(2012, 1);

//task40
/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToday() {
  let now = new Date();
  let check = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let miliSec = `${Math.round((now - check) / 1000)} сек`;
  console.log(miliSec);
}
// getSecondsToday();

//task41
/* Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToTomorrow() {
  let now = new Date();
  let check = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours()
  );
  let secToTom = ((24 - now.getHours()) * 60 + now.getMinutes()) * 60;

  console.log(secToTom);
}

// getSecondsToTomorrow();

//task42
/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */

function formatDate(date) {
  let now = new Date() - date;
  if (now < 1000) return console.log("прямо сейчас");
  else if (now < 60000)
    return console.log(`${Math.round(now / 1000)} сек. назад`);
  else if (now < 60 * 60 * 1000)
    return console.log(`${now / 60 / 1000} мин. назад`);
  else if (now > 60 * 60 * 1000)
    return console.log(
      `${("0" + (date.getDate() + 1)).toString().slice(-2)}.${(
        "0" +
        (date.getMonth() + 1)
      )
        .toString()
        .slice(-2)}.${date.getFullYear().toString().slice(2, 4)} ${(
        "0" + date.getHours()
      )
        .toString()
        .slice(-2)}:${("0" + date.getMinutes()).toString().slice(-2)}`
    );

  console.log(now);
}

// formatDate(new Date(new Date() - 1)); // "прямо сейчас"

// formatDate(new Date(new Date() - 30 * 1000)); // "30 сек. назад"

// formatDate(new Date(new Date() - 5 * 60 * 1000)); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// formatDate(new Date(new Date() - 86400 * 1000));

//task43
/* Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
}; */

let user_4 = {
  name: "Василий Иванович",
  age: 35,
};

user_4 = JSON.parse(JSON.stringify(user_4));
// console.log(user_4);

/* В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  /* ваш код */
// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return (value == meetup && key == "occupiedBy") || key == "self"
//       ? undefined
//       : value;
//   })
// );
