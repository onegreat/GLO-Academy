"use strict";

// Изменил все const на let, т.к значения теперь будут меняться.
let title = prompt("Как называется проект?");
let screens = prompt("Какие типы экранов требуются: Простые, сложные, интерактивные?");
let screenPrice = +prompt("Сколько будет стоить работа?");
let rollback = 5;
let adaptive = confirm("Нужен ли адаптив на сайте? Нажмите 'ОК', если ответ положительный");
let serviceOneTitle = prompt("Название дополнтельной услуги - 1");
let serviceOnePrice = +prompt("Стоимость дополнтельной услуги - 1");
let serviceTwoTitle = prompt("Название дополнтельной услуги - 2");
let serviceTwoPrice = +prompt("Стоимость дополнтельной услуги - 2");
let fullPrice = screenPrice + serviceOnePrice + serviceTwoPrice;
let servicePercentPrice = fullPrice - (fullPrice / 100 * rollback);

console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
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