"use strict";

// Изменил все const на let, т.к значения теперь будут меняться.
let title;
let screens;
let screenPrice;
let adaptive;
let serviceOneTitle;
let serviceTwoTitle;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let rollback = 5;


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется проект?")
    screens = prompt("Какие типы экранов требуются: Простые, сложные, интерактивные?")

    do {
        screenPrice = prompt("Сколько будет стоить работа?")
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте? Нажмите 'ОК', если ответ положительный")
}
//function expression
const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        let price = 0

        if (i === 0) {
            serviceOneTitle = prompt("Название дополнтельной услуги - 1");
        } else if (i === 1) {
            serviceTwoTitle = prompt("Название дополнтельной услуги - 2");
        }
        do {
            price = prompt("Стоимость дополнтельной услуги?");
        } while (!isNumber(price))

        sum += +price
    }

    return sum
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Ваша скидка 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5 %"
    } else if (price < 15000 && price > 0) {
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

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

console.log("allServicePrices", allServicePrices)
console.log("Общая сумма работы составит: " + getFullPrice(screenPrice, allServicePrices))
console.log("Общая сумма с учетом отката посреднику " + getServicePercentPrices(fullPrice, rollback))
console.log(getRollbackMessage(fullPrice))
console.log('Стоимость верстки экрана: ' + screenPrice + "RUB" + " " + "Стоимость разработки сайта: " + fullPrice + "RUB")

