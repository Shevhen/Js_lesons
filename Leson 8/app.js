// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
// function User(id, nameUser, surname , email, phone){
//     this.id= id
//     this.nameUser = nameUser
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
// let arrUser = []
// for (let i = 0; i < 10; i++) {
//     arrUser[i] = new User(`${Math.floor(Math.random()*100)}`,`user ${i}`)
// }
// console.log(arrUser)
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// let userFilter = arrUser.filter((User)=> User.id %2 ===0)
// console.log(userFilter);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// let sortUserId = arrUser.sort((a,b)=>{return a.id - b.id})
// console.log(sortUserId);
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Clients {
//     constructor(id, nameClient, surname, email, phone, order) {
//         this.id = id;
//         this.nameClient = nameClient;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let arrClients = []
// for (let i = 0; i < 10; i++) {
//     arrClients [i] = new Clients(`${Math.floor(Math.random()*100)}`,`user ${i}`)
//     arrClients[i].order = Math.floor(Math.random()*15)
// }
// console.log(arrClients)
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// let sortClientsOrders = arrClients.sort((a,b)=>{return a.order - b.order})
// console.log(sortClientsOrders);
//
// //
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// // з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
// function CarFunc(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume){
//     this.model = model
//     this.manufacturer = manufacturer
//     this.yearOfManufacture=yearOfManufacture
//     this.maximumSpeed = maximumSpeed
//     this.engineVolume = engineVolume
//     this.drive = function(){console.log(`їдемо зі швидкістю ${maximumSpeed}  км на годину`)}
//     this.info = function (){return this}
//     this.increaseMaxSpeed = function (newSpeed){this.maximumSpeed = this.maximumSpeed + newSpeed}
//     this.changeYear = function (newValue){this.yearOfManufacture=newValue}
//     this.addDriver = function (driver){this.driver = driver}
// }
// let carF = new CarFunc('starlet','Toyota',2000,170,1600)
// carF.increaseMaxSpeed(40)
// carF.drive()
// carF.changeYear(1995)
// carF.addDriver('lena')
// console.log(carF)

//
// //
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
// //
// class CarClass{
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maximumSpeed = maximumSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive (){console.log(`їдемо зі швидкістю ${this.maximumSpeed}  км на годину`)}
//     info (){return this}
//     increaseMaxSpeed (newSpeed){this.maximumSpeed = this.maximumSpeed + newSpeed}
//     changeYear (newValue){this.yearOfManufacture=newValue}
//     addDriver (driver){this.driver = driver}
// }
//
// let car = new CarClass('starlet','Toyota',2000,170,1600)
// car.increaseMaxSpeed(40)
// car.drive()
// car.changeYear(1995)
// car.addDriver('lena')
// console.log(car)
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок. new Cinderella(`Maria ${i}`, 20+i,29+i )
// function Cinderella(nameCinderella,age,footSize){
//     this.nameCinderella = nameCinderella
//     this.age = age
//     this.footSize = footSize
// }
// const arrCinderellas = []
//
// for (let i = 0; i < 10; i++) {
//     arrCinderellas[i] = new Cinderella(`Maria ${i}`, 20+i,29+i )
// }
//
// console.log(arrCinderellas);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince{
//     constructor(namePrince, age, foundShoe) {
//         this.namePrince = namePrince;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }
// let prince = new Prince('fredy',30,36)
// //
// //
//
// // //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let i = 0; i < arrCinderellas.length; i++) {
//     if(arrCinderellas[i].footSize === prince.foundShoe){
//         console.log(arrCinderellas[i].nameCinderella)
//     }
// }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку