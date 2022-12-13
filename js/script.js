'use strict'

const title = document.querySelector('h1')
const btnHandler = document.getElementsByClassName('handler_btn')
const btnScreen = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.percent')
const otherItemsNumber = document.querySelectorAll('.number')
const inputRollback = document.querySelector('.rollback > .main-controls__range > input')
const spanRollback = document.querySelector('.rollback > .main-controls__range > span')
let totalInput = document.getElementsByClassName('total-input')
let result = document.getElementsByClassName('total-input')
// for (let i = 0; i < totalInput.length; i++) {
//   result += totalInput[i];
//   console.log(result)
// }

console.dir(title)
console.dir(btnHandler)
console.dir(btnScreen)
console.dir(otherItemsPercent)
console.dir(otherItemsNumber)
console.dir(inputRollback)
console.dir(spanRollback)
console.dir(totalInput.length)
console.log(result)


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrice: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking()
    appData.addPrices()
    appData.getFullPrice()
    appData.getServicePercentPrice()
    appData.getTitle()

    appData.logger()
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  asking: function () {
    appData.title = prompt("Как называется проект?", "Калькулятор верстки")

    for (let i = 0; i < 2; i++) {
      let name = prompt("какие типы экранов нужно разработать?")
      let price = 0

      do {
        price = prompt("Сколько будет стоить данная работа?")
      } while (!appData.isNumber(price))

      appData.screens.push({ id: i, name: name, price: price })
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуг нужен?")
      let price = 0

      do {
        price = prompt("Сколько это будет стоить?")
      } while (!appData.isNumber(price))

      appData.services[name] = +price
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?")
  },

  addPrices: function () {

    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
      appData.allServicePrice += appData.services[key]
    }
  },

  getAllServicePrices: function () {


  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrice
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },

  getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase
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

console.log(typeof appData.title);

