"use strict";

const title = prompt("Как называется проект?");
const screens = prompt("Какие типы экранов требуются: Простые, сложные, интерактивные?");
const screenPrice = +prompt("Сколько будет стоить работа?");
const rollback = 5;
const adaptive = confirm("Нужен ли адаптив на сайте? Нажмите 'ОК', если ответ положительный");
const serviceOneTitle = prompt("Название дополнтельной услуги - 1");
const serviceOnePrice = +prompt("Стоимость дополнтельной услуги - 1");
const serviceTwoTitle = prompt("Название дополнтельной услуги - 2");
const serviceTwoPrice = +prompt("Стоимость дополнтельной услуги - 2");
const fullPrice = screenPrice + serviceOnePrice + serviceTwoPrice;
const servicePercentPrice = fullPrice - (fullPrice / 100 * rollback);

console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log("Ваша скидка 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так!");
}



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