// Перове задание
var Tc = prompt("Введите температуру по цельсию");

Tf = (9 / 5) * parseInt(Tc) + 32;
alert("Температуруа по Фаренгейту равна " + Tf);

//Второе задание
var a = 10;
var b = 20;

a = a + b;
b = a - b;
a = a - b;
console.log("Число a =" + a + "Число b=" + b);

console.log("\n");
//Третье задание
var admin;
var name = "Василий";
admin = name;
console.log("Переменная admin=" + admin);
console.log("\n");

//Четвертое задание
var chislo = 1000;
var slovo = "108";
var itog = chislo + slovo; // "1000108"
console.log(itog)

// Пятое задание
/*Атрибут async
Поддерживается всеми браузерами, кроме IE9-. Скрипт выполняется полностью асинхронно. То есть, при обнаружении <script async src="..."> браузер не останавливает обработку страницы, а спокойно работает дальше. Когда скрипт будет загружен – он выполнится.

    Атрибут defer
Поддерживается всеми браузерами, включая самые старые IE. Скрипт также выполняется асинхронно, не заставляет ждать страницу, но есть два отличия от async.

    Первое – браузер гарантирует, что относительный порядок скриптов с defer будет сохранён.

    То есть, в таком коде (с async) первым сработает тот скрипт, который раньше загрузится:

    <script src="1.js" async></script>
<script src="2.js" async></script>
А в таком коде (с defer) первым сработает всегда 1.js, а скрипт 2.js, даже если загрузился раньше, будет его ждать.

<script src="1.js" defer></script>
<script src="2.js" defer></script>
Поэтому атрибут defer используют в тех случаях, когда второй скрипт 2.js зависит от первого 1.js, к примеру – использует что-то, описанное первым скриптом.

    Второе отличие – скрипт с defer сработает, когда весь HTML-документ будет обработан браузером.

    Например, если документ достаточно большой…

<script src="async.js" async></script>
<script src="defer.js" defer></script>

Много много много букв
…То скрипт async.js выполнится, как только загрузится – возможно, до того, как весь документ готов. А defer.js подождёт готовности всего документа.
*/
document.write('<p>'+Tf+'</p>');
document.write('<p>'+"Число a =" + a + " Число b=" + b+'</p>');
document.write('<p>'+"Переменная admin=" + admin+'</p>');
document.write('<p>'+itog+'</p>');
document.write('<p>'+"Ответ на пятое задание смотреть в комментарии"+'</p>');