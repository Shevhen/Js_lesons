// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = prompt()
// if (+x)
//     console.log('Вірно')
// else
//     console.log('Невірно')

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
//     який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt()
//
// if (0<+time &&+time<15){
//     console.log('Введене число відноситься до першої чверті години')
// }
// else if (15<=+time &&+time<30){
//     console.log('Введене число відноситься до другої чверті години')
// }
// else if (30<=+time &&+time<45){
//     console.log('Введене число відноситься до третьої чверті години')
// }
// else if (45<=+time &&+time<60){
//     console.log('Введене число відноситься до четрвертої чверті години')
// }
// else
//     console.log('Введене число не може відноситься до жодної чверті години оскільки година має лише 60 хв. Спробуйте будь ласак ще раз в діапазоні (0<60)')

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
// половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt()
//
// if (0<+day &&+day<=10){
//     console.log('Введене число відноситься до першої декади')
// }
// else if (10<+day &&+day<=20){
//     console.log('Введене число відноситься до другої декади')
// }
// else if (20<+day &&+day<=31){
//     console.log('Введене число відноситься до третьої декади')
// }
// else
//     console.log('Введене число не може відноситься до жодної декади місяця, оскільки дні місяця можуть існувати в діапазоні від 1 до 31')


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий
//     номер дня тижня і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).
// let dayWeek //= prompt("Введіть будь-ласка порядковий номер дня тижня")
//
// switch (+dayWeek) {
//     case 1:
//         console.log('Понеділок')
//         console.log('Сходити на роботу')
//         break;
//     case 2:
//         console.log('Вівторок')
//         console.log('Сходити на роботу')
//         break;
//     case 3:
//         console.log('Середа')
//         console.log('Сходити на роботу')
//         break;
//     case 4:
//         console.log('Четвер')
//         console.log('Сходити на роботу')
//         break;
//     case 5:
//         console.log('Пятниця')
//         console.log('Сходити на роботу')
//         break;
//     case 6:
//         console.log('Субота')
//         console.log('Відпочінок')
//         break;
//     case 7:
//         console.log('Неділя')
//         console.log('Відпочінок')
//         break;
//     default:
//         console.log('Введене число не відноситься до жодного дня тижня, оскільки тиждень має лише 7 днів. Спробуйте в діапазоні від 1 до 7')
//         break
// }
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = prompt("Введіть будь-ласка перше число" )
// let b = prompt("Введіть будь-ласка друге число" )
//
// if (+a<+b)
//     console.log('число', b,' більше за числу',a)
// else if(+a>+b)
//     console.log('число', a,' більше за числу ',b)
// else
//     console.log('число', a,' дорівнює числу ',b)

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null
//     і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x
//
// console.log(x)
//
// if(x === 0||x === -0||x === ""||x === ''||x === ``||x === undefined ||x=== null ||x===NaN){
//     x = 'default'
// }
// console.log(x)