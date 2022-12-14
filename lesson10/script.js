const ul = document.querySelectorAll('ul')
const list = document.querySelectorAll('li')
const block = document.querySelector('body');
const link = document.querySelectorAll('h2 > a')[4]
const advertisement = document.querySelector('.adv')

// const list = document.querySelectorAll()

function changeBgImg() {
    block.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
}

ul[0].prepend(list[10])
ul[0].prepend(list[2])
ul[0].prepend(list[9])
ul[0].prepend(list[7])
ul[0].prepend(list[5])
ul[0].prepend(list[4])
ul[0].prepend(list[8])
ul[0].prepend(list[6])
ul[0].prepend(list[3])
ul[0].prepend(list[1])
ul[0].prepend(list[0])

link.textContent = "Книга 3. this и Прототипы Объектов"

advertisement.remove()

ul[5].prepend(list[56])
ul[5].prepend(list[54])
ul[5].prepend(list[51])
ul[5].prepend(list[53])
ul[5].prepend(list[52])
ul[5].prepend(list[48])
ul[5].prepend(list[47])
ul[5].prepend(list[50])
ul[5].prepend(list[49])
ul[5].prepend(list[55])


changeBgImg();
console.log(advertisement)
console.log(link)
console.log(ul)
console.log(list)