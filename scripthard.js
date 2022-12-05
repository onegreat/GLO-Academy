const num = 266219
let result = 1
for (let i = 1; i != 0; i *= 10) {
    let tmp = Math.trunc(num % (10 * i) / (1 * i))
    tmp === 0 ? i = 0 : result *= tmp
}
console.log(result)
result **= 3
console.log("Первые две цифры полученного числа: " + String(result).slice(0, 2));


