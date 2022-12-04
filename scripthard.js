const num = 266219;
let sum = 123;

sum = String(sum); // Для работы цикла меняем значение на стринг

for (i = 1; i <= sum.length; i++) {       // Перемножаем num на каждое число sum.
    let result;  // Переменная для хранения получвшегося результата при перемножении.
    let bigInt;  // Переменная для хранения данные возведенных в степень.

    result = i * num;
    bigInt = result ** 3;

    console.log("Перемножаем число 266219 на: " + i + " = " + (i * num));
    console.log("Возводим число в степень '3' = " + bigInt)
    console.log("Первые две цифры полученного числа: " + String(bigInt).slice(0, 2));
    console.log()
}



