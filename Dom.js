// task1
/* Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)? */

// ОТВЕТ:

// let div1 = document.getElementsByTagName("div")[0];
// let div2 = document.body.firstElementChild;
// let div3 = document.documentElement.childNodes[2].childNodes[1];
// let div4 = document.body.children[0];

// let ul1 = document.body.children[0];
// let ul2 = document.getElementsByTagName("ul")[0];
// let ul3 = document.body.children[1];
// let ul4 = document.documentElement.childNodes[2].childNodes[2].nextSibling;

// let li1 = document.body.children[1].lastElementChild;
// let li2 = document.getElementsByTagName("li")[1];
// let li3 = document.getElementsByTagName("ul")[0].lastElementChild;
// console.log(ul1);

// task2
/* Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null?
Правда, что elem.children[0].previousSibling всегда равен null ? */

// ОТВЕТ:

// elem.lastChild.nextSibling  - верно? т.к. lastChild выводит последний узел, соттветственно после него ничего нет.
// elem.children[0].previousSibling - не верно, т.к. у элементов есть узлы по краям.

// task3
/* Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red'; */

// ОТВЕТ:

// let tb1 = Array.from(document.getElementById("tb1").rows);
// for (let i = 0; i < tb1.length; i++) {
//   tb1[i].cells[i].style.backgroundColor = "red";
// }

// console.log(tb1);

// task4
/* Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика. */

// ОТВЕТ:

// let table = document.getElementById("age-table");
// let labels = document.getElementById("age-list").children;
// let firstTd = document.getElementById("age-list").previousElementSibling;
// let form = document.getElementsByName("search")[0];
// let input1 = document.getElementsByName("search")[1];
// let input2 = document.getElementsByName("search")[0].lastElementChild;

// task5
/* У нас есть пустой DOM-элемент elem и строка text.

Какие из этих 3-х команд работают одинаково?

// ОТВЕТ:

elem.append(document.createTextNode(text))  // любой текст - это текст, теги не учитываются
elem.innerHTML = text            //учитывает теги,вставляет как HTML
elem.textContent = text */ //любой текст - это текст, теги не учитываются

// task6
/* Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>

<script>
  function clear(elem) {  ваш код  }

  clear(elem); // очищает список
</script> */

// ОТВЕТ:

function clear(elem) {
  elem.innerHTML = "";
}
// clear(elem);

// task7
/* Запустите этот пример. Почему вызов remove не удалил текст "aaa"?

<table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

// ОТВЕТ:

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"??  // ааа - это текстовый узел,который отобразится рядом с элементом, метод remove его не удаляет,он удаляет элементы.
</script> */

// task8
/* Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст. */

// ОТВЕТ:

function createElem() {
  let butt = document.getElementById("createElem");
  let newList = "";
  let tagName = prompt(
    "Введите имя тега, который хотите создать: <ul></ul>,<li></li> "
  );
  if (tagName == "ul" || tagName == "<ul></ul>" || tagName == "<ul>") {
    if (document.body.children.length == 2) {
      newList = document.createElement("ul");
      newList.id = "list";
      newList.innerHTML = "Неупорядоченный список";
      butt.after(newList);
    } else return alert("Список уже существует!");
  } else if (null || "") return;
  if (tagName == "li" || tagName == "<li></li>" || tagName == "<li>") {
    newList = document.getElementById("list");
    if (newList) {
      let newListPart = document.createElement("li");
      newListPart.className = "listP";
      newListPart.innerHTML = "часть листа";
      newList.append(newListPart);
    } else return alert("Нет списка!");
  } else if (null || "") return;
}

// task9
/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
Результат (дерево):


Выберите один из двух способов решения этой задачи:

Создать строку, а затем присвоить через container.innerHTML.
Создавать узлы через методы DOM.
Если получится – сделайте оба.

P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне. */

// ОТВЕТ:

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

let container = document.getElementById("container");

function createTree_0() {
  let list_1 = document.createElement("ul");
  container.append(list_1);
  for (let [key, value] of Object.entries(data)) {
    let li_1 = document.createElement("li");
    li_1.innerHTML = key;
    list_1.append(li_1);

    let list_2 = document.createElement("ul");
    let li_2 = document.createElement("li");
    li_2.innerHTML = Object.keys(value)[0];
    list_2.append(li_2);
    li_1.append(list_2);

    let li_3 = document.createElement("li");
    li_3.innerHTML = Object.keys(value)[1];
    list_2.append(li_3);
    li_1.append(list_2);

    for (let key in Object.entries(value)[0][1]) {
      let list_3 = document.createElement("ul");
      let li_4 = document.createElement("li");
      li_4.innerHTML = key;
      list_3.append(li_4);
      li_2.append(list_3);
    }
    for (let key in Object.entries(value)[1][1]) {
      let list_4 = document.createElement("ul");
      let li_5 = document.createElement("li");
      li_5.innerHTML = key;
      list_4.append(li_5);
      li_3.append(list_4);
    }
  }
}
// createTree();

function createTree_1(container, obj) {
  container.append(createUL(obj));
}
function createUL(obj) {
  let ulList = document.createElement("ul");

  for (let key in obj) {
    if (!key) return;
    else {
      let li = document.createElement("li");
      li.innerHTML = key;

      let childNodes = createUL(obj[key]);
      if (!childNodes) return;
      else {
        li.append(childNodes);
      }

      ulList.append(li);
    }
  }
  return ulList;
}
// createTree_1(container, data);

// task10
/*  Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

Результат: */

// ОТВЕТ:

let li = document.getElementsByTagName("li");
function addCount(li) {
  for (let key of li) {
    let liLen = key.getElementsByTagName("li").length;
    if (liLen == 0) continue;
    else key.firstChild.data += `[${liLen}]`;
  }
}
// addCount(li);

// task11
/* У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ? */

// ОТВЕТ:

let li_6 = document.getElementsByTagName("li");
for (let each of li_6) {
  let eachText = each.firstChild.textContent;
  let numberText = each.getElementsByTagName("li").length;
  // alert((eachText += `[${numberText}]`));
}

// task12
// Что выведет этот код?

{
  /* <html>
  <body>
    <script>alert(document.body.lastChild.nodeType);</script>
  </body>
</html>; */
} // выведет 1, т.к. lastChild окажется <script></script> а не #text, потому что выполнение скрипта начнется ранее прогрузки всей страницы

// task13
/* Что выведет этот код?

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script> */

// ОТВЕТ:

// Выведет - BODY

// task14

// ОТВЕТ:

/* Объектом какого класса является document?   // HTMLDocument

Какое место он занимает в DOM-иерархии? //  HTMLDocument - Document - Node

Наследует ли он от Node или от Element, или может от HTMLElement? */ // Node

// console.dir(document);

// task15
/* Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
  
  </script>
</body>
</html> */

// ОТВЕТ:

let attr = document.querySelector("[data-widget-name]");
// console.log(attr.dataset.widgetName);

// task16
/* Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
Пример:

<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
  // добавление стиля для одной ссылки
  let link = document.querySelector('a');
  link.style.color = 'orange';
</script> */

// ОТВЕТ:

let link = document.querySelectorAll("a");
for (let i = 1; i < link.length; i++) {
  if (
    link[i].attributes[0].textContent.indexOf("://") !== -1 &&
    link[i].attributes[0].textContent.indexOf("http://internal.com") === -1
  ) {
    link[i].style.color = "orange";
  }
}

// task17
/* Напишите функцию createCalendar(elem, year, month).

Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>,
 первым днём недели должен быть понедельник.

Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:


P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно. */

// ОТВЕТ:

//   for (let i = 0; i < date.getDay() - 1; i++) {
//     let td = document.createElement("td");
//     td.innerHTML = "";
//     tr_2.append(td);
//     table.append(tr_2);
//     elem.append(table);
//   }
// }
// createCalendar("elem", 2012, 9);

let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let container_1 = document.getElementById("container");

function createCalendar(year, month) {
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let tr_2 = document.createElement("tr");
  let mon = month - 1;
  let date = new Date(year, mon);

  table.border = 1;
  table.style.borderCollapse = "collapse";

  days.forEach((day) => {
    let th = document.createElement("th");

    th.style.backgroundColor = "grey";

    th.append(day);
    tr.append(th);
    table.append(tr);
    container_1.append(table);
  });
  for (let j = 0; j < date.getDay() - 1; j++) {
    let td = document.createElement("td");

    td.innerHTML = "";

    tr_2.append(td);
    table.append(tr_2);
    container_1.append(table);
  }
  for (let i = date.getDay() - 1; i < days.length; i++) {
    let td_1 = document.createElement("td");

    td_1.innerHTML = date.getDate();
    date.setDate(date.getDate() + 1);

    tr_2.append(td_1);
    table.append(tr_2);
    container_1.append(table);
  }
  while (date.getMonth() == mon) {
    let tr_3 = document.createElement("tr");
    for (let i = 0; i < days.length; i++) {
      let td_1 = document.createElement("td");
      td_1.innerHTML = date.getDate();
      date.setDate(date.getDate() + 1);
      tr_3.append(td_1);
      table.append(tr_3);
      container_1.append(table);
    }
  }
}

// createCalendar(2012, 9);

// task18
/* Создайте цветные часы как в примере ниже:

Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах. */

// ОТВЕТ:

let container_2 = document.getElementById("container");

let date_1 = new Date();
let hours;
let minutes;
let seconds;
let startButton = document.getElementsByClassName("start");

function createTime() {
  let cont_3 = document.createElement("div");

  container_2.append(cont_3);

  cont_3.insertAdjacentHTML(
    "afterbegin",
    '<span class="hour"></span>:<span class="min"></span>:<span class="sec"></span>'
  );

  let spanHours = document.getElementsByClassName("hour")[0];
  let spanMinutes = document.getElementsByClassName("min")[0];
  let spanSeconds = document.getElementsByClassName("sec")[0];

  hours = setInterval(() => {
    spanHours.innerHTML = new Date(
      date_1.setHours(date_1.getHours())
    ).getHours();
    if (spanHours.innerHTML < 10)
      spanHours.innerHTML = "0" + spanHours.innerHTML;
  }, 1000);

  minutes = setInterval(() => {
    spanMinutes.innerHTML = new Date(
      date_1.setHours(date_1.getHours(), date_1.getMinutes())
    ).getMinutes();
    if (spanMinutes.innerHTML < 10)
      spanMinutes.innerHTML = "0" + spanMinutes.innerHTML;
  }, 1000);

  seconds = setInterval(() => {
    spanSeconds.innerHTML = new Date(
      date_1.setHours(
        date_1.getHours(),
        date_1.getMinutes(),
        date_1.getSeconds() + 1
      )
    ).getSeconds();
    if (spanSeconds.innerHTML < 10)
      spanSeconds.innerHTML = "0" + spanSeconds.innerHTML;
  }, 1000);
}

function startClock() {
  createTime();
  setTimeout(() => {
    if (startButton[0].innerHTML == "Старт") startButton[0].innerHTML = "Стоп";
  }, 1000);
  startButton[0].removeAttribute("onclick");
  startButton[0].setAttribute("onclick", "stopClock()");
}
function stopClock() {
  clearInterval(hours);
  clearInterval(minutes);
  clearInterval(seconds);
  container_2.firstChild.remove();
  if (startButton[0].innerHTML == "Стоп") startButton[0].innerHTML = "Старт";
  startButton[0].removeAttribute("onclick");
  startButton[0].setAttribute("onclick", "startClock()");
}

// task19
/*  Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>;
 */

// ОТВЕТ:

let ul5 = document.getElementById("ul");
// 1 способ
/* let li2 = document.createElement("li");
let li3 = document.createElement("li");

li2.innerHTML = "2";
li3.innerHTML = "3";

ul5.firstElementChild.append(li2, li3); */
// 2 способ
let li1 = document.getElementById("one");

// li1.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

// task20
/* Таблица:

Имя	Фамилия	Возраст
John	Smith	10
Pete	Brown	15
Ann	Lee	5
...	...	...
Может быть больше строк.

Напишите код для сортировки по столбцу "name". */

// ОТВЕТ:

// // let table1 = document.getElementById("table");
// let allRows = Array.from(table1.getElementsByTagName("tr"))
//   .slice(-3)
//   .sort((a, b) =>
//     a.children[0].textContent > b.children[0].textContent ? 1 : -1
//   );

// console.log(table1.tBodies[0].append(...allRows));

// task21
/* Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

Пример объекта options:

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});
Демо в новом окне

Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили. */

// ОТВЕТ:

function showNotification(options = {}) {
  let notifDiv = document.createElement("div");

  notifDiv.className = "notification";
  notifDiv.classList.add(options.className);
  notifDiv.style.cssText = `margin-top:${options.top}px;
  margin-right:${options.right}px;`;
  notifDiv.innerHTML = options.html;

  document.body.append(notifDiv);

  setInterval(() => {
    notifDiv.remove();
  }, 1000);
}
// setInterval(() => {
//   showNotification({
//     top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//     right: 10, // 10px от правого края окна (по умолчанию 0px)
//     html: "Hello!", // HTML-уведомление
//     className: "welcome", // дополнительный класс для div (необязательно)
//   });
// }, 2000);

// task22
/* Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

Напишите соответствующее выражение для произвольного элемента elem.

P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0. */

// ОТВЕТ:

/* let scrollBottom = elem.scrollHeight - (elem.scrollTop + elem.clientHeight); */

// task23
/* Напишите код, который возвращает ширину стандартной полосы прокрутки.

Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.

P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого. */

// ОТВЕТ:

/* let scrolWidth = elem.style.width - elem.clientWidth; */

// task24
/* Исходный документ выглядит так:


Каковы координаты центра поля?

Вычислите их и используйте, чтобы поместить мяч в центр поля:


Элемент должен позиционироваться за счёт JavaScript, а не CSS.
Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка». */

// ОТВЕТ:

/* let field = document.getElementById("field");
let ball = document.getElementById("ball");

let clWidth = field.clientWidth / 2 - ball.clientWidth / 2;
let clHeight = field.clientHeight / 2 - ball.clientHeight / 2;

ball.style.marginLeft = `${clWidth}px`;
ball.style.marginTop = `${clHeight}px`;
 */

// task25
/* В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

Укажите хотя бы 3 отличия, лучше – больше. */

// ОТВЕТ:

//  getComputedStyle(elem).width  - СSS ширина,не включает полосу прокрутки, есть зависимость от относительной величины, нет возможности взять точную величину из auto величины + кроссбраузерные отличия в величинах
// elem.clientWidth - не имеет вышееречисленных проблем, поэтому более гибок и удобен в поиске величин

// task26
/* В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.


Ваш код должен при помощи DOM получить четыре пары координат:

верхний левый, внешний угол (это просто).
нижний правый, внешний угол (тоже просто).
верхний левый, внутренний угол (чуть сложнее).
нижний правый, внутренний угол (есть несколько способов, выберите один).
Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам. */

// ОТВЕТ:

/* document.onclick = function (e) {
  // показывает координаты точки клика
  coords.innerHTML = e.clientX + ":" + e.clientY;
};

let pole = document.getElementById("field");

function findCoords(elem) {
  let coord = elem.getBoundingClientRect();
  let coord1 = `${coord.left}.${Math.round(coord.top)}`;
  let coord2 = `${coord.left + coord.width}.${
    Math.round(coord.top) + coord.height
  }`;
  let coord3 = `${coord.left + pole.clientLeft}.${Math.round(
    coord.top + pole.clientTop
  )}`;
  let coord4 = `${coord.left + pole.clientWidth + pole.clientLeft * 2}.${
    Math.round(coord.top) + pole.clientHeight + pole.clientTop * 2
  }`;
  console.log(coord1, coord2, coord3, coord4);
} */
// findCoords(pole);

// task27
/* Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor. */

// ОТВЕТ:

/* function positionAt(anchor, position, elem) {
  let coords = anchor.getBoundingClientRect();

  elem.style.cssText = `position:fixed; color: red`;

  switch (position) {
    case "top":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.clientHeight + "px";
      break;
    case "right":
      elem.style.left = coords.left + coords.width + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.bottom + "px";
      break;
  }

  return elem;
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote"); */

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// task28
/* Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

Это предотвратит расхождение элементов при прокрутке страницы.

Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">. */

// ОТВЕТ:

/* function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);

  elem.style.cssText = `position:absolute; color: red`;

  switch (position) {
    case "top":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.clientHeight + "px";
      break;
    case "right":
      elem.style.left = coords.left + anchor.offsetWidth + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top + anchor.offsetHeight + "px";
      break;
  }

  return elem;
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector("blockquote");
 */
// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// task29
/* Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения для аргумента position:

top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
Например:

// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note);
Результат:
 */

// ОТВЕТ:
/* 
function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);

  elem.style.cssText = `position:absolute; color: red`;

  switch (position) {
    case "top":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.clientHeight + "px";
      break;
    case "right":
      elem.style.left = coords.left + anchor.offsetWidth + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top + anchor.offsetHeight + "px";
      break;
    case "top-in":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top + "px";
      break;
    case "right-in":
      elem.style.left =
        coords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = coords.top + "px";
      break;
    case "bottom-in":
      elem.style.left = coords.left + "px";
      elem.style.top =
        coords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }

  return elem;
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector("blockquote"); */

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// showNote(blockquote, "top-in", "note above-in");
// showNote(blockquote, "right-in", "note at the right-in");
// showNote(blockquote, "bottom-in", "note below-in");

// task30
/* Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал. */

// ОТВЕТ:

/* let inp1 = document.getElementById("hider");
let text1 = document.getElementById("text");

function remove() {
  text1.style.display = "none";
}

inp1.addEventListener("click", remove); */

// task31
// Создайте кнопку, которая будет скрывать себя по нажатию.

// ОТВЕТ:

/* let inp2 = document.getElementById("hider");

inp2.addEventListener("click", function () {
  inp2.style.display = "none";
}); */

// task32
/* 
В переменной button находится кнопка. Изначально на ней нет обработчиков.

Который из обработчиков запустится? Что будет выведено при клике после выполнения кода? */

// ОТВЕТ:

// button.addEventListener("click", () => alert("1"));  // сработает,т.к. не был удален

// button.removeEventListener("click", () => alert("1")); // сработает т.к. это не таже самая функция,а иная

// button.onclick = () => alert(2); // тоже сработает

// task33
/* Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:

Требования:

Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;
Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике. */

// ОТВЕТ:

/* let ball = document.getElementById("ball");
let field = document.getElementById("field");

field.style.position = "relative";
ball.style.position = "absolute";
ball.style.transition = "1s";

field.addEventListener("click", (event) => {
  let ballLeft =
    event.clientX - field.offsetLeft - field.clientLeft - ball.offsetWidth / 2;
  let ballTop =
    event.clientY - field.offsetTop - field.clientTop - ball.offsetHeight / 2;

  if (ballLeft < field.clientLeft) ballLeft = 0;

  if (ballTop < field.clientTop) ballTop = 0;

  if (ballLeft + ball.clientWidth > field.clientWidth)
    ballLeft = field.clientWidth - ball.clientWidth;

  if (ballTop + ball.clientHeight > field.clientHeight)
    ballTop = field.clientHeight - ball.clientHeight;

  ball.style.marginLeft = `${ballLeft}px`;
  ball.style.marginTop = `${ballTop}px`;
}); */

// task34
/* Создать меню, которое по нажатию открывается либо закрывается:

P.S. HTML/CSS исходного документа можно и нужно менять. */

// ОТВЕТ:

/* let spisok = document.body.children[2];
let secondTap = document.body.children[1];
let firstTap = document.body.children[0];

spisok.style.display = "none";
firstTap.style.cursor = " pointer";
secondTap.style.display = "none";
secondTap.style.cursor = " pointer";

firstTap.addEventListener("click", () => {
  if (spisok.style.display == "none") {
    firstTap.style.display = "none";
    secondTap.style.display = "";
    spisok.style.display = "";
  }
});

secondTap.addEventListener("click", () => {
  if (spisok.style.display != "none") {
    secondTap.style.display = "none";
    firstTap.style.display = "";
    spisok.style.display = "none";
  }
});
 */

// task35
/* Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

Результат должен выглядеть, как показано здесь: */

// ОТВЕТ:

/* let messages1 = document.getElementsByClassName("pane");

for (let mess of messages1) {
  let closeBut = document.createElement("button");
  closeBut.innerHTML = "[x]";
  closeBut.className = "remove-button";
  closeBut.addEventListener("click", () => mess.remove());

  mess.insertAdjacentElement("afterbegin", closeBut);
}
 */

// task36
/* Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения. */

// ОТВЕТ:
/* let picList = document.querySelector("ul");
let divFrame = document.createElement("div");
let arrow = document.getElementsByClassName("arrow");

divFrame.style.cssText = `position:relative;width:400px;height:${picList.children[0].clientHeight}px;background: #ddd;border-radius: 30px;overflow: hidden;`;

document.body.prepend(divFrame);
divFrame.prepend(arrow[0]);
divFrame.append(arrow[1]);
divFrame.append(picList);

picList.style.cssText = `margin-left:${8}px`;
arrow[1].style.cssText = `margin-left:${divFrame.clientWidth - 21}px`;

let position = 8;

arrow[0].addEventListener("click", () => {
  position += Math.round(picList.children[0].clientWidth * 3);
  if (position > 0) position = 8;
  picList.style.marginLeft = `${position}px`;
});
arrow[1].addEventListener("click", () => {
  position -= Math.round(picList.children[0].clientWidth * 3);
  if (position < -1150) position = -902; /// нужно дооптимизировать сдвиг
  picList.style.marginLeft = `${position}px`;
});
 */
