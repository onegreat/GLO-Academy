"use strict";

// Изменил все const на let, т.к значения теперь будут меняться.
let title = prompt("Как называется проект?");
let screens = prompt("Какие типы экранов требуются: Простые, сложные, интерактивные?");
let screenPrice = +prompt("Сколько будет стоить работа?");
let rollback = 5;
let fullPrice = 35000;
let adaptive = confirm("Нужен ли адаптив на сайте? Нажмите 'ОК', если ответ положительный");
let serviceOne;
let serviceTwo;


/*
console.log('hello');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экрана: ' + screenPrice + "RUB" + " " + "Стоимость разработки сайта: " + fullPrice + "RUB")

console.log(screens.toLowerCase(), screens.split(", "));

// alert('Привет мир');

*/