const timeHello = document.getElementById('hello')
const timeDay = document.getElementById('day')
const timerHours = document.getElementById('timeHours')
const timerMinutes = document.getElementById('timeMinutes')
const timerSeconds = document.getElementById('timeSeconds')
const timeNewYear = document.getElementById('new-year')
let idInterval

let date = new Date()

const appData = () => {
    isDay()
    timeDate()
    newYear()
}
const timeDate = () => {

    let isHours = date.getHours()

    if (isHours >= 7 && isHours <= 10) {
        timeHello.textContent = "Доброе утро!"
    } else if (isHours > 11 && isHours <= 17) {
        timeHello.textContent = "Добрый день!"
    } else if (isHours > 18 && isHours <= 22) {
        timeHello.textContent = "Добрый вечер!"
    } else if (isHours > 23 && isHours <= 24) {
        timeHello.textContent = "Доброй ночи!"
    } else if (isHours == 0 && isHours <= 6) {
        timeHello.textContent = "Доброй ночи!"
    }


}

const isDay = () => {

    timeDay.textContent = date.toLocaleString('ru-RU', { weekday: 'long' })

}

const updateClock = setInterval(() => {
    let dateNow = new Date()
    let hour = dateNow.getHours()
    let minutes = dateNow.getMinutes()
    let seconds = dateNow.getSeconds()
    timerHours.textContent = hour
    timerMinutes.textContent = minutes
    timerSeconds.textContent = seconds

    updateTimeSet()

}, 1000);

const updateTimeSet = () => {
    let dateNow = new Date()
    let hour = dateNow.getHours()
    let minutes = dateNow.getMinutes()
    let seconds = dateNow.getSeconds()

    if (hour < 10) {
        timerHours.textContent = '0' + hour
    } else if (minutes < 10) {
        timerMinutes.textContent = '0' + minutes
    } else if (seconds < 10) {
        timerSeconds.textContent = '0' + seconds
    }
}

const newYear = () => {
    today = new Date()
    //Можно установить любую дату
    nextDate = new Date("2023 1, January")
    //Количество миллисекунд в одном дне
    msPerDay = 24 * 60 * 60 * 1000;
    //Высчитываем количество дней
    test = Math.round(nextDate.getTime() - today.getTime())
    daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
    dayname = ""
    ds = "" + daysLeft
    //Вырезаем последнею цифру
    dd = parseInt(ds.substr(ds.length - 1))
    //Склоняем слово ДЕНЬ
    if (daysLeft > 4 && daysLeft < 21) dayname = " дней"
    else
        if (dd == 1) dayname = " день"
        else
            if (dd == 2 || dd == 3 || dd == 4) dayname = " дня"
            else dayname = " дней"
    //Выводим надпись в документ
    if (daysLeft < 0) { document.write("С новым годом!!!") }
    else {
        if (daysLeft == 0) { document.write("Завтра новый год!") } else {
            timeNewYear.textContent = "До нового года осталось " + daysLeft + dayname + "!"
        }
    }
}


appData()
