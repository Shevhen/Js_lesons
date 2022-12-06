// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//

// for (let i = 0; i < simpsons.length; i++) {
//   let div = document.createElement('div')
//     div.classList.add('member')
//     document.body.appendChild(div)
//     let h1 = document.createElement('h1')
//     h1.innerHTML = `${simpsons[i].name} ${simpsons[i].surname} ${simpsons[i].age} years old`
//     div.appendChild(h1)
//     let img = document.createElement('img')
//     img.setAttribute(`src`,`${simpsons[i].photo}`)
//     div.appendChild(img)
//     let h3 = document.createElement('h3')
//     div.appendChild(h3)
//     h3.innerHTML = simpsons[i].info
// }


//
//
//
// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// for (const coursesArrayElement of coursesArray) {
//     let div1 = document.createElement('div')
//     document.body.appendChild(div1)
//     let h1 = document.createElement('h1')
//     h1.innerHTML = coursesArrayElement.title
//     div1.appendChild(h1)
//
//     let div = document.createElement('div')
//     document.body.appendChild(div)
//     div.style.display = 'flex'
//     div.style.flexWrap = 'wrap'
//     let div2 = document.createElement('div')
//     div.appendChild(div2)
//     let h2 = document.createElement('h2')
//     h2.innerHTML = `${coursesArrayElement.monthDuration} - month`
//     div2.appendChild(h2)
//     div2.style.marginRight = '10px'
//     let div3 = document.createElement('div')
//     div.appendChild(div3)
//     let h3 = document.createElement('h2')
//     h3.innerHTML = `${coursesArrayElement.hourDuration} - hour`
//     div3.appendChild(h3)
//
//     let div4 = document.createElement('div')
//     document.body.appendChild(div4)
//     let ul = document.createElement('ul')
//     div4.appendChild(ul)
//
//     for (let i = 0; i < coursesArrayElement.modules.length; i++) {
//        let li = document.createElement('li')
//         ul.appendChild(li)
//         li.innerHTML = coursesArrayElement.modules[i]
//     }
// }

// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.

//

// let block = document.createElement('div')
// block.classList.add('wrap', 'collapse', 'alpha', 'beta')
// block.style.border = 'solid black 2px'
// block.style.height = '200px'
// block.style.width = '200px'
// block.style.backgroundColor = 'green'
//
// document.body.appendChild(block)
// // - клонувати його повністю, та додати клон в body.
// let blockClone = block.cloneNode()
// document.body.appendChild(blockClone)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// const menu = document.querySelector('.menu')
// const arr = ['Main','Products','About us','Contacts']
// for (let i = 0; i < arr.length; i++) {
//     let li = document.createElement('li')
//     menu.appendChild(li)
//     li.innerHTML = arr[i]
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `<h2> cours <u>${coursesAndDurationArrayElement.title}</u> duration <b>${coursesAndDurationArrayElement.monthDuration}</b> month</h2>`
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.classList.add('item')
//     document.body.appendChild(div)
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     div.appendChild(h1)
//     h1.innerHTML = coursesAndDurationArrayElement.title
//     let p = document.createElement('p')
//     p.classList.add('description')
//     div.appendChild(p)
//     p.innerHTML = coursesAndDurationArrayElement.monthDuration
// }
//
//






// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
function style(element,width,height,backgroundColor){
    element.style.width = width + 'px'
    element.style.height = height + 'px'
    element.style.border = 'solid black 2px'
    element.style.backgroundColor = backgroundColor
    element.style.margin = '2px'
    element.style.borderRadius = '20%'
    document.body.appendChild(element)
}
//
// let someElement = document.createElement('div')
// someElement.setAttribute('id', 'text')
// style(someElement,'200','200','green')
//
// let button = document.createElement('button')
// style(button,'200','50','gray')
// button.innerHTML = `<h3>Click me!!</h3>`
//
// button.addEventListener("click", ()=> someElement.remove())

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.createElement('input')
// style(input, 50,30)
//
// let button = document.createElement('button')
// style(button, 120,60)
// button.innerHTML = `<h3>Confirm age!!</h3>`
//
// button.addEventListener("click", ()=> {
//     let age = input.value
//     function message(msg,element){
//         element.innerHTML = `<h1>Ваш вік ${age} i це ${msg} за 18 років</h1>`
//         document.body.style.backgroundColor = 'gray'
//         document.body.style.display = 'flex'
//         document.body.style.justifyContent = 'center'
//         element.style.display = 'flex'
//         element.style.justifyContent = 'center'
//         element.style.alignItems = 'center'
//         input.remove()
//         button.remove()
//     }
//     if(+age>18){
//         let div = document.createElement('div')
//         style(div,600,400,'green')
//         message('більше',div)
//     }
//     if(+age<18){
//         let div = document.createElement('div')
//         style(div,600,400,'red')
//         message('менше',div)
//     }
// })


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputTr = document.createElement('input')
// style(inputTr, 50,30)
//
// let inputTd = document.createElement('input')
// style(inputTd, 50,30)
//
// let inputInside = document.createElement('input')
// style(inputInside, 50,30)
//
// let button = document.createElement('button')
// style(button, 150,60)
// button.innerHTML = `<h3>Build your table</h3>`
//
//
// button.addEventListener("click", ()=>{
//     let countTr = inputTr.value
//     let countTd = inputTd.value
//     let textInside = inputInside.value
//     let table = document.createElement('table')
//     document.body.appendChild(table)
//     table.setAttribute('border','1')
//     table.style.width = '100%'
//     for (let i = 0; i < +countTr; i++) {
//         let tr = document.createElement('tr')
//         table.appendChild(tr)
//         for (let j = 0; j < +countTd; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td)
//             td.innerHTML = `<h2>${textInside}</h2>`
//         }
//     }
// })
