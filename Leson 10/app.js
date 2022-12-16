function listUsers(div){
    let listOfUsers = document.createElement('h1')
    div.appendChild(listOfUsers)
    listOfUsers.innerHTML = `List of Users`

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(info=> info.json())
        .then((info) => {
            for (const infoElement of info) {
                let div1 = document.createElement('div')
                div.appendChild(div1)
                let h = document.createElement('h3')
                div1.appendChild(h)
                let a = document.createElement('a')
                a.href = 'user-details.html?id=' + infoElement.id
                a.innerHTML =`ID: ${infoElement.id}| ${infoElement.name}`
                h.appendChild(a)
            }
        })
}

// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(info=> info.json())
//     .then(info => {
//         console.log(info)
//     })


// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(info=> info.json())
//     .then((info) => {
//         for (const infoElement of info) {
//             let div = document.createElement('div')
//             document.body.appendChild(div)
//             div.innerHTML =`${infoElement.id} ${infoElement.name}`
//         }
//     })
// 3 Додати кожному блоку кнопку/посилання ,
// при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(info=> info.json())
//     .then((info) => {
//         for (const infoElement of info) {
//             let div = document.createElement('div')
//             document.body.appendChild(div)
//             let a = document.createElement('a')
//             a.href = 'user-details.html?id=' + infoElement.id
//             a.innerHTML =`${infoElement.id} ${infoElement.name}`
//             div.appendChild(a)
//         }
//     })
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(info=> info.json())
//     .then((info) => {
//         for (const infoElement of info) {
//             let div = document.createElement('div')
//             document.body.appendChild(div)
//             let a = document.createElement('a')
//             a.href = 'user-details.html?id=' + infoElement.id
//             a.innerHTML =`${infoElement.id} ${infoElement.name}`
//             div.appendChild(a)
//         }
//     })

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

// let button = document.createElement('button')
// document.body.appendChild(button)
// button.innerHTML = 'post of current user'
//
// let input = document.createElement('input')
// document.body.appendChild(input)
// let label = document.createElement('label')
// document.body.appendChild(label)
// label.innerHTML = "<< Enter user id there"
// let listDiv = document.createElement('div')
// document.body.appendChild(listDiv)
// listUsers(listDiv)
// button.addEventListener('click',()=>{
//     let userId = input.value
// fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//     .then(info=> info.json())
//     .then((info) => {
//         for (const infoElement of info) {
//             let div = document.createElement('div')
//             document.body.appendChild(div)
//             let title = document.createElement('h3')
//             div.appendChild(title)
//             title.innerHTML=`${infoElement.title}`
//         }
//     })
//     listDiv.remove()
// })

//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .

let button = document.createElement('button')
document.body.appendChild(button)
button.innerHTML = 'post of current user'

let input = document.createElement('input')
document.body.appendChild(input)
let label = document.createElement('label')
document.body.appendChild(label)
label.innerHTML = "<< Enter user id there"

let listDiv = document.createElement('div')
document.body.appendChild(listDiv)
listUsers(listDiv)

button.addEventListener('click',()=>{
    let inputUserId = input.value
    fetch(`https://jsonplaceholder.typicode.com/users/${inputUserId}/posts`)
        .then(info=> info.json())
        .then((info) => {
            for (const infoElement of info) {
                let div = document.createElement('div')
                document.body.appendChild(div)
                let h = document.createElement('h2')
                div.appendChild(h)
                let link = document.createElement('a')
                h.appendChild(link)
                link.innerHTML=`${infoElement.title}`
                link.href= 'post-details.html?id='+ infoElement.userId + JSON.stringify(infoElement.title) + JSON.stringify(infoElement.id)
            }
        })
    listDiv.remove()
})

// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Я додав кнопку в post-details.html
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.


//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
