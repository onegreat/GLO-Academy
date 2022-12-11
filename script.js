"use strict";

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
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    start: function () {
        asking: {
            appData.title = prompt("Как называется проект?")
            appData.screens = prompt("Какие типы экранов требуются: Простые, сложные, интерактивные?")

            do {
                appData.screenPrice = +prompt("Сколько будет стоить работа?")
            } while (!appData.isNumber(appData.screenPrice));

            appData.adaptive = confirm("Нужен ли адаптив на сайте? Нажмите 'ОК', если ответ положительный")
        }
    },
    getAllServicePrices: function () {
        let sum = 0

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.serviceOneTitle = +prompt("Название дополнтельной услуги - 1");
            } else if (i === 1) {
                appData.serviceTwoTitle = +prompt("Название дополнтельной услуги - 2");
            }

            sum += +prompt("Стоимость дополнтельной услуги?");
        }
        return sum
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Ваша скидка 10%"
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5 %"
        } else if (price < 15000 && price > 0) {
            return "Скидка не предусмотрена"
        } else if (price < 0) {
            return "Что-то пошло не так!"
        }
    },
    getFullPrice: function (screenPrice, allServicePrices) {
        return appData.screenPrice + appData.allServicePrices
    },
    getTitle: function (title) {
        return appData.title.trim()[0].toUpperCase() + appData.title.slice(1).toLowerCase()
    },
    getServicePercentPrices: function (fullPrice, rollback) {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    }

}


appData.start()
appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
appData.title = appData.getTitle(appData.title);
appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);

console.log('appData.allServicePrices ', appData.allServicePrices)
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
