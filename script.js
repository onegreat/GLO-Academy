"use strict";

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let serviceOneTitle;
// let serviceTwoTitle;
// let allServicePrices;
// let fullPrice;
// let servicePercentPrice;
// let rollback = 5;

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    serviceOneTitle: '',
    serviceTwoTitle: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 5,
    asking: function () {
        appData.title = prompt("Как называется проект?")
        appData.screens = prompt("Какие типы экранов требуются: Простые, сложные, интерактивные?")

        do {
            appData.screenPrice = prompt("Сколько будет стоить работа?")
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте? Нажмите 'ОК', если ответ положительный")
    }
}


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        let price = 0

        if (i === 0) {
            appData.serviceOneTitle = prompt("Название дополнтельной услуги - 1");
        } else if (i === 1) {
            appData.serviceTwoTitle = prompt("Название дополнтельной услуги - 2");
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
    return appData.screenPrice + appData.allServicePrices
}

function getTitle(title) {
    return appData.title.trim()[0].toUpperCase() + appData.title.slice(1).toLowerCase()
}

function getServicePercentPrices(fullPrice, rollback) {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
}

appData.asking()
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice(appData.screenPrice, appData.allServicePrices);
appData.title = getTitle(appData.title);
appData.servicePercentPrice = getServicePercentPrices(appData.fullPrice, appData.rollback);

console.log('appData.allServicePrices ', appData.allServicePrices)
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);