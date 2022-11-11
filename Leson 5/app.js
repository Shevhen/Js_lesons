// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function AreaRectangle (a, b) {
    c= a * b
   return c
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function AreaCircle (r) {
    const P = 3.14
    //c= P*Math.pow(r,2)
    c=P*(r * r)
   return c
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function AreaСylinder (r, h) {
    const P = 3.14
    c= 2*P*r*(r + h)
    return c
}
// - створити функцію яка приймає масив та виводить кожен його елемент
function ShowArr(arr){
    for (let i=0; i<arr.length; i++){
        document.write(`<h1>${arr[i]}</h1>`)
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function CreateParagraf(){
        document.write(`<p>${arguments[0]}</p>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function CreateUl(){
    document.write(`<ul>
    <li>${arguments[0]}</li>
    <li>${arguments[0]}</li>
    <li>${arguments[0]}</li>
    </ul>`)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function CreateUlfor(){
    document.write(`<ul>`)
    for (let i = 0; i < arguments[1]; i++) {
        document.write(`<li>${arguments[0]}</li>`)
    }
    document.write(`</ul>`)
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let  someArr = ['food',78899,true]
// function ShowArrlist(arr){
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// ShowArrlist(someArr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//     {name: 'oleg', age: 28, id: 7},
//     {name: 'andrey', age: 29, id: 8},
//     {name: 'masha', age: 30, id: 9},
//     {name: 'olya', age: 31, id: 10},
//     {name: 'max', age: 31, id: 11}
// ];
// function ShowArrNext(arr){
//     document.write(`<div>`)
//     for (let arrElement of arr) {
//         document.write(`<div>${arrElement.name}</div>`)
//         document.write(`<div>${arrElement.age}</div>`)
//         document.write(`<div>${arrElement.id}</div>`)
//     }
//     document.write(`</div>`)
// }
// ShowArrNext(users)
// - створити функцію яка повертає найменьше число з масиву
// let f = [100 ,2,10,-22,5, 4,8,-7]
// function MinofArr(arr){
//     return Math.min.apply(null, arr);
// }
// console.log(MinofArr(f))

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function Sum(arr){
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(Sum(f))