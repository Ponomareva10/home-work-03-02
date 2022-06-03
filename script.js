const a = 10;
if (a === 10) {
    console.log('Верно');
}   else {
    console.log('Неверно');
}

let aa = 1;
aa = 0;
aa = -3;
if (aa >= 0) {
    console.log('Верно');
}   else {
    console.log('Неверно');
}

const test = true;
if (test == true) {
    console.log('Верно');
}   else {
    console.log('Неверно');
}
const testt = false;
testt == true ? console.log('Верно') : console.log('Неверно'); 

const ai = 3;
const bi = 4;
if (2 < ai < 11 || 14 > bi >= 6) {
    console.log('Верно');
}   else {
    console.log('Неверно');
}

let num = 2;
let result = '';
switch (num) {
    case 1 :
        result = 'Зима';
        break;
    case 2 :
        result = 'Весна';
        break;
    case 3 :
        result = 'Лето';
        break;
    case 4 :
        result = 'Осень';
        break;
}
console.log(result);

let x = 10;
let y = 7;
x > y ? console.log('x больше, чем y') : console.log('x не больше, чем y');

let month = 9;
switch (month) {
    case 1 :
        month = 'Зима';
        break;
    case 2 :
        month = 'Зима';
        break; 
    case 3 :
        month = 'Весна';
        break;
    case 4 :
        month = 'Весна';
        break;
    case 5 :
        month = 'Весна';
        break;    
    case 6 :
        month = 'Лето';
        break;
    case 7 :
        month = 'Лето';
    case 8 :
        month = 'Лето';
        break;
    case 9 :
        month = 'Осень';
        break;
    case 10 :
        month = 'Осень';
        break;
    case 11 :
        month = 'Осень';
        break;
    case 12 :
        month = 'Зима';
        break;
}
console.log(month);

let red = false;
let yellow = false;
if (red == false && yellow == false) {
    console.log('Переход разрешен');
}  else {
    console.log('Переход запрещен');
}