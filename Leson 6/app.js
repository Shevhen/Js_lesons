// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
// let upperCase1 = str1.toUpperCase()
// let upperCase2 = str2.toUpperCase()
// let upperCase3 = str3.toUpperCase()


//- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD'
// let str2 = 'LOREM IPSUM'
// let str3 = 'JAVASCRIPT IS COOL'
// let lowerCase1 = str1.toLowerCase()
// let lowerCase2 = str2.toLowerCase()
// let lowerCase3 = str3.toLowerCase()


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = '   dirty string       '
//
// ////////////////let trim = str.trim()
//
// let replaceAll = str.replaceAll(' ','')
//                     .replaceAll('ys','y s')


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// function stringToarray(string){
//     let arrSpl = string.split(' ')
//     return arrSpl
// }
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// console.log(arr)


// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let numbers = [10,8,-7,55,987,-1011,0,1050,0]
// let numToStr = numbers.map(i => {
//     return String(i)
// })
// console.log(numToStr)


// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// // або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// function sortNums(s) {
//     let sort = s.sort((a, b)=>{return a-b})
//     return sort
// }
// // sortNums(nums,'descending') // [21,11,3]
// function sortNumsRevers(s) {
//     let sort = s.sort((a, b)=>{return b-a})
//     return sort
// }


// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// console.log(coursesAndDurationArray.sort(function (a, b) {
//     return a.monthDuration - b.monthDuration
// }))
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let sort = coursesAndDurationArray.filter((coursesAndDurationArray)=> coursesAndDurationArray.monthDuration > 5)
// console.log(sort)








// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }