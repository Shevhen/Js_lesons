let first_array = [
    {
        name: 'Martin',
        age: 30
    },
    true,
    77.7,
    'dog',
    'cat',
    20,
    {
        name: 'Maria',
        age: 30
    },
    false,
    [28,29,30],
    'school'
]
for (let i = 0; i<10; i++){
    console.log(first_array[i])
}


let History_Book = {
    title:'The Woman In Blue',
    pageCount: 384,
    genre: 'history'
}
let Fantasy_Book = {
    title:'A Game of Thrones',
    pageCount: 864,
    genre: 'fantasy'
}
let Thriller_Book = {
    title: 'I See You',
    pageCount: 384,
    genre: 'thriller'
}


let authorsArr = [
    {name:'Gary Keller', age:65},
    {name: 'Cormac McCarthy', age:89},
    {name: 'Olly Richards', age:45}
]
let Business_Book = {
    title: 'The One Thing',
    pageCount:240,
    genre: 'business',
    authors: authorsArr[0]
}
let New_Releases_Book = {
    title: 'The Passenger',
    pageCount: 400,
    genre: 'new releases',
    authors: authorsArr[1]
}
let Spanish_Book = {
    title: 'Short Stories in Spanish for Beginners',
    pageCount:240,
    genre: 'spanish',
    authors: authorsArr[2]
}



console.log('---------------------------------')
let users = [
    {
        name: 'Masha',
        username:'BigCat',
        password: 'l253hl'
    },
    {
        name: 'Georg',
        username:'SaloMann',
        password: '09870zxvcx'
    },
    {
        name: 'Nifirtity',
        username:'NifirtityWZ',
        password: '745zxvc'
    },
    {
        name: 'Filip',
        username:'Jazz2',
        password: '098zc'
    },
    {
        name: 'Anton',
        username:'Horiyzont',
        password: '09870zvxc'
    },
    {
        name: 'Olga',
        username:'GirlO',
        password: '0987vsd'
    },
    {
        name: 'Natasha',
        username:'PaniNatalia',
        password: '976geads'
    },
    {
        name: 'Daniel',
        username:'Zebra',
        password: 's987h6876'
    },
    {
        name: 'Luis',
        username:'King_1',
        password: '098769785v'
    },
    {
        name: 'Sveta',
        username:'Light55',
        password: 'l634l'
    }
]
for (let i = 0; i<10; i++ ){
    console.log(users[i].name,' pass: ',users[i].password)
}
