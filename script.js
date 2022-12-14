'use strict'

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking()
        appData.getAllServicePrices()
        appData.getFullPrice()
        appData.getServicePercentPrice()
        appData.getTitle()
        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function () {
        let tmp
        do {
            tmp = prompt('Как называется ваш проект?', 'Калькулятор верстки')
        } while (appData.isNumber(tmp))
        appData.title = tmp
        for (let i = 0; i < 2; i++) {
            let screenName
            do {
                screenName = prompt('Какие типы экранов нужно разработать?')
            } while (appData.isNumber(screenName))
            do {
                tmp = prompt('Сколько будет стоить данная работа?')
                if (tmp === null) {
                    tmp = 0
                    break
                }
                tmp = tmp.trim()
            } while (!appData.isNumber(tmp))
            appData.screens.push({ id: i, name: screenName, price: +tmp })
        }

        appData.screenPrice = appData.screens.reduce((sum, screen) => {
            return sum + screen.price
        }, 0)

        appData.adaptive = confirm('Нужен ли адаптив на сайте?')

        for (let i = 0; i < 2; i++) {
            let serviceName
            do {
                serviceName = prompt('Какой дополнительный тип услуги нужен?')
            } while (appData.isNumber(serviceName))
            do {
                tmp = prompt('Сколько это будет стоить?')
                if (tmp === null) {
                    tmp = 0
                    break
                }
                tmp = tmp.trim()
            } while (!appData.isNumber(tmp))
            appData.services[`${serviceName}(${i + 1})`] = +tmp
        }
    },
    getAllServicePrices: function () {
        for (const key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },

    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
    },

    getServicePercentPrice: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))
    },


    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку 10%"
        } else if (price >= 15000 && price < 30000) {
            return "даем скидку 5%"
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена"
        } else {
            return "Что-то пошло не так"
        }
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
}

appData.start()

