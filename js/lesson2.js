// Задание 1
var a = 1, b = 1, c, d;
c = ++a;
console.log(c); // 2
d = b++;
console.log(d); // 1
c = (2 + ++a);
console.log(c); // 5
d = (2 + b++);
console.log(d); // 4
console.log(a); // 3
console.log(b); // 3

/*
c=2, так как префиксная форма сначала увеличивает a до 2, а потом возвращает
d=1, так как постфиксная форма увеличивает, но возвращает старое значение
с=5, сначала увеличили a до 3, потом использовали в арифметике ( 2 + 1 + 2), так как а уже равно 2
d=4 ( 2 + 2), так как увеличили b до 3, но в этом выражении оставили старое значение. b уже равно 2
послк этого а и b каждую переменную увеличили по 2 раза
 */

// Задание 2
var a1 = 2;
var x = 1 + (a1 *= 2); //5
console.log(x);
//x = 1 + 4 = 5

//Задание 3
var number1 = prompt("Введите первое число");
var number2 = prompt("Введите второе число");

if ((number1 > 0) && (number2 > 0)) {
    alert(number1 - number2);
} else if ((number1 < 0) && (number2 < 0)) {
    alert(number1 * number2);
} else if ((number1 < 0) && (number2 > 0)) {
    alert(number1 + number2);
} else if ((number1 > 0) && (number2 < 0)) {
    alert(number1 + number2);
}

//Задание 4
a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
    default:
        console.log('Oooops!');
}

//Задание 5
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b == 0) {
        console.log("Делить на ноль нельзя")
        ж
    } else {
        return a / b;
    }
}

//Задание 6

function mathOperation(agr1, arg2, operation) {
    switch (operation) {
        case 'plus':
            return plus(agr1, arg2);

        case 'minus':
            return minus(agr1, arg2);

        case 'multiplication':
            return multiplication(agr1, arg2);

        case 'division':
            return division(agr1, arg2);

        default:
            return false;
    }
}

//Задание 7
console.log(null > 0); // false, т.к. null преобразовано к 0
console.log(null == 0); // false
console.log(null >= 0); // true, т.к. null преобразовано к 0
console.log(null === 0); // false, в стандарте явно указано, что null равен лишь undefined

//Задание 8
function power(val, pow) {
    if (pow !== 1) { // пока степень не равна 1, вычислять power(val,pow - 1) вместо power(val,pow)
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

console.log('Функция power: ' + power(5, 2));