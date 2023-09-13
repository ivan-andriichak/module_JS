// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id;
//     this.= name;
//     this.me = surname;
//     this. = email;
//     this. = phone;
// }
//
// let user1 = new User(36, 'Ihor', 'Petrovich', 'okten_web@gmail', 0953214852);
// let user2 = new User(28, 'Petro', 'Petrovich', 'okten.school_web@gmail', 0933814883);
// console.log(user1);
// console.log(user2);
// console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id;
//     this.= name;
//     this.me = surname;
//     this. = email;
//     this. = phone;
// }
//
// let users = [
//     new User(36, 'Ihor', 'Petrovich', 'okten_web@gmail.com', '0953214852'),
//     new User(28, 'Petro', 'Snicarenko', 'user1@example.com', '0933814883'),
//     new User(1, 'Ivan', 'Kozub', 'user5@example.net', '0933614443'),
//     new User(23, 'Vasilina', 'Bodnar', 'vas.bodnar@hotmail.com', '0933714883'),
//     new User(1, 'Nadia', 'Ivashko', 'nadia.wilson@outlook.com', '0973814888'),
//     new User(8, 'Oleh', 'Durdinets', 'okten.school1_web@gmail.com', '0933814883'),
//     new User(33, 'Maksim', 'Plusch', 'maks.wilson@outlook.com', '0933814880'),
//     new User(43, 'Olga', 'Grishko', 'olga.grih@hotmail.com', '0933814883'),
//     new User(9, 'Diana', 'Emec', 'diana.emec@hotmail.com', '0933814880'),
//     new User(6, 'Orest', 'Mokin', 'orest.mokin@aol.com', '0953918883'),
//
// ];
//
// console.log(users);
// console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// const evenId = users.filter((evenNumbers) => evenNumbers.id % 2 === 0);
// console.log(evenId);
// console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// const growthId = users.sort((a,b) => a.id - b.id);
// console.log(growthId);
// console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname , email, phone, order = []) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//     }
// }
//
// const user1 = new Client(1, 'John', 'Doe', 'john@example.com', '1234567890',['Product A', 'Product B']);
// console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами Client

// let clients = [
//     new Client(36, 'Ihor', 'Petrovich', 'okten_web@gmail.com', '0953214852', ['Product A']),
//     new Client(28, 'Petro', 'Snicarenko', 'user1@example.com', '0933814883', ['Product A', 'Product B']),
//     new Client(1, 'Ivan', 'Kozub', 'user5@example.net', '0933614443', ['Product A', 'Product B', 'Product C']),
//     new Client(23, 'Vasilina', 'Bodnar', 'vas.bodnar@hotmail.com', '0933714883', ['Product A', 'Product B', 'Product C', 'Product D']),
//     new Client(1, 'Nadia', 'Ivashko', 'nadia.wilson@outlook.com', '0973814888', ['Product A']),
//     new Client(8, 'Oleh', 'Durdinets', 'okten.school1_web@gmail.com', '0933814883', ['Product A', 'Product B']),
//     new Client(33, 'Maksim', 'Plusch', 'maks.wilson@outlook.com', '0933814880', ['Product A', 'Product B', 'Product C']),
//     new Client(43, 'Olga', 'Grishko', 'olga.grih@hotmail.com', '0933814883', ['Product A']),
//     new Client(9, 'Diana', 'Emec', 'diana.emec@hotmail.com', '0933814880', ['Product A', 'Product B']),
//     new Client(6, 'Orest', 'Mokin', 'orest.mokin@aol.com', '0953918883', ['Product A', 'Product B', 'Product C', 'Product D', 'Product E']),
//
// ];
//
// console.log(clients);
// console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// Сортуємо масив клієнтів за кількістю товарів в полі order по зростанню
// clients.sort((client1, client2) => client1.order.length - client2.order.length);
//
// console.log(clients);
// console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, maker, year, maxSpeed, volume) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//
// Car.prototype.drive = function () {
//     console.log(`Our speed is  ${this.maxSpeed} per hour`);
// }
//
// Car.prototype.info = function () {
//     console.log("Information about the car:");
//     for (const key in this) {
//         if (typeof this[key] !== 'function') {
//             console.log(`${key} - ${this[key]}`);
//         }
//     }
// }
//
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed;
//     console.log(`Maximum speed increased to ${this.maxSpeed}`);
// }
//
// Car.prototype.changeYear = function (newValue) {
//     this.year = newValue;
//     console.log(`Year changed to ${this.year}`);
// }
//
// Car.prototype.addDriver = function (driver) {
//     this.driver = driver;
//     console.log(`Driver added:  name: ${driver.name},  license: ${driver.license}`);
// }
// };
//
// const driverInfo = {
//     name: 'John',
//     license: 'B'
// }
//
//
// const car1 = new Car('Autlender', 'Mitsubishi', 2013, 180, 1.8);
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2015);
// car1.addDriver(driverInfo);
// console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, maker, year, maxSpeed, volume) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`Our speed is ${this.maxSpeed} per hour`);
//     }
//
//     info() {
//         console.log("Information about the car:");
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Maximum speed increased to ${this.maxSpeed}`);
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(`Year changed to ${this.year}`);
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(`Driver added:  name: ${driver.name},  license: ${driver.license}`);
//     }
// }
//
// const driverInfo = {
//     name: 'John',
//     license: 'B'
// }
//
// const car1 = new Car('Autlender', 'Mitsubishi', 2013, 180, 1.8);
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2015);
// car1.addDriver(driverInfo);
// // console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Popelushka extends Human {
//     constructor(name, age, shoeSize) {
//         super(name, age);
//         this.shoeSize = shoeSize;
//     }
// }
//
// class Prince extends Human {
//     constructor(name, age, founShoeSize) {
//         super(name, age);
//         this.founShoeSize = founShoeSize;
//     }
//
//     findPrincess1(arr) {
//         for (const popelushka of arr) {
//             if (popelushka.shoeSize === this.founShoeSize) {
//                 return popelushka;
//             }
//         }
//     }
//
//     findPrincess2(arr) {
//         return arr.find(popelushka => popelushka.shoeSize === this.founShoeSize);
//     }
// }
//
// const popelArr = [
//     new Popelushka('Albina', 34, 15),
//     new Popelushka('Tamara', 39, 18),
//     new Popelushka('Anna', 20, 40),
//     new Popelushka('Inna', 32, 35),
//     new Popelushka('Oksana', 16, 36),
//     new Popelushka('Irina', 66, 38),
//     new Popelushka('Tania', 40, 35),
//     new Popelushka('Sergey', 26, 45),
// ];
//
// const prince = new Prince('Sergey', 30, 40);
//
// console.log(prince.findPrincess1(popelArr));
//
// console.log(prince.findPrincess2(popelArr));

