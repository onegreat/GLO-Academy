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
let allServicePrices, fullPrice, servicePercentPrice;

//function expression
const getAllServicePrices = function (srvPrice1, srvPrice2) {
    return srvPrice1 + srvPrice2
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Ваша скидка 10%"
    } else if (price >= 15000 && fullPrice < 30000) {
        return "Даем скидку в 5 %"
    } else if (price < 15000 && fullPrice > 0) {
        return "Скидка не предусмотрена"
    } else if (price < 0) {
        return "Что-то пошло не так!"
    }
}

//function declaration
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
}

function getTitle(title) {
    return title.trim()[0].toUpperCase() + title.slice(1).toLowerCase()
}

function getServicePercentPrices(fullPrice, rollback) {
    return fullPrice - rollback
}

allServicePrices = getAllServicePrices(serviceOnePrice, serviceTwoPrice);
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("Стоимость оказанных услуг: " + getAllServicePrices(serviceOnePrice, serviceTwoPrice))
console.log("Общая сумма работы составит: " + getFullPrice(screenPrice, allServicePrices))
console.log("Общая сумма с учетом отката посреднику " + getServicePercentPrices(fullPrice, rollback))
console.log(getRollbackMessage(fullPrice))
console.log('Стоимость верстки экрана: ' + screenPrice + "RUB" + " " + "Стоимость разработки сайта: " + fullPrice + "RUB")

