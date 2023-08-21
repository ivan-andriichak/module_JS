// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let authors = ['William Shakespeare', 'Jane Austen', 'Mark Twain', 'George Orwell', 'J.K. Rowling', 'Ernest Hemingway', 'Charles Dickens', 'F. Scott Fitzgerald', 'Agatha Christie', 'Toni Morrison',];
console.log(authors[0]);
console.log(authors[1]);
console.log(authors[2]);
console.log(authors[3]);
console.log(authors[4]);
console.log(authors[5]);
console.log(authors[6]);
console.log(authors[7]);
console.log(authors[8]);
console.log(authors[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let williamShakespeare = {
    title: "Romeo and Juliet",
    pageCount: 256,
    genre: "Tragedy"
};
let janeAusten = {
    title: "Pride and Prejudice",
    pageCount: 432,
    genre: "Romance"
};
let markTwain = {
    title: "The Adventures of Tom Sawyer",
    pageCount: 288,
    genre: "Adventure"
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let english = {
    title: "Romeo and Juliet",
    pageCount: 256,
    genre: "Tragedy",
    authors: [
        { name: "William Shakespeare", age: 52 }
    ]
};
let writer = {
    title: "Pride and Prejudice",
    pageCount: 432,
    genre: "Romance",
    authors: [
        { name: "Jane Austen", age: 41 }
    ]
};
let englishMan = {
    title: "The Adventures of Tom Sawyer",
    pageCount: 288,
    genre: "Adventure",
    authors: [
        { name: "Mark Twain", age: 74 }
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    { name: 'William Shakespeare', username: "johndoe", password: 'abcdef' },
    { name:  'Jane Austen', username: "johndoe", password: '12345' },
    { name:  'Mark Twain', username: "johndoe", password: 'qwert' },
    { name:  'George Orwell', username: "johndoe", password: 'password123' },
    { name:  'J.K. Rowling', username: "johndoe", password: 'letmein' },
    { name:  'Ernest Hemingway', username: "johndoe", password: 'securepass' },
    { name:  'Charles Dickens', username: "johndoe", password: 'ilovecoding' },
    { name:  'F. Scott Fitzgerald', username: "johndoe", password: '12345678' },
    { name:  'Agatha Christie', username: "johndoe", password: '987654321' },
    { name:  'Toni Morrison', username: "johndoe", password: 'hello123' },
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let temp1 = 1;
if (temp1 !== 0) {
    console.log('Значення 1: Вірно');
} else {
    console.log('Значення 1: Невірно');
}

let temp2 = 0;
if (temp2 !== 0) {
    console.log('Значення 0: Вірно');
} else {
    console.log('Значення 0: Невірно');
}

let temp3 = -3;
if (temp3 !== 0) {
    console.log('Значення -3: Вірно');
} else {
    console.log('Значення -3: Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 31;
if (time>0 && time<=15) {
    console.log('Перша чверть!')
} else if (time>15 && time<=30) {
    console.log('Друга чверть!')
} else if (time>30 && time<=45) {
    console.log('Третя чверть!')
} else if (time>45 && time<=59) {
    console.log('Четверта чверть!')
}else {
    console.log('Невірне значення часу!');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30;
if (day>=1 && day<=11) {
    console.log('Перша декада!')
} else if (day>11 && day<=21) {
    console.log('Друга декада!')
} else if (day>21 && day<=31) {
    console.log('Третя декада!')
} else {
    console.log('Невірно визначена декада!');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const week = [
    { day: 'Monday!', schedule: 'Lectures on programming.' },
    { day: 'Tuesday!', schedule: 'Meeting with friends.' },
    { day: 'Wednesday!', schedule: 'Visiting the gym.' },
    { day: 'Thursday!', schedule: 'Working on a project.' },
    { day: 'Friday!', schedule: 'Preparing for the weekend.' },
    { day: 'Saturday!', schedule: 'Rest and entertainment.' },
    { day: 'Sunday!', schedule: 'Family evening.' }
];

let dayNumber = parseInt(prompt('Enter the day of the week (1-7):'));

switch (dayNumber) {
    case 1:
        console.log(`${week[0].day}`);
        console.log(`Schedule for the day: ${week[0].schedule}`);
        break;
    case 2:
        console.log(`${week[1].day}`);
        console.log(`Schedule for the day: ${week[1].schedule}`);
        break;
    case 3:
        console.log(`${week[2].day}`);
        console.log(`Schedule for the day: ${week[2].schedule}`);
        break;
    case 4:
        console.log(`${week[3].day}`);
        console.log(`Schedule for the day: ${week[3].schedule}`);
        break;
    case 5:
        console.log(`${week[4].day}`);
        console.log(`Schedule for the day: ${week[4].schedule}`);
        break;
    case 6:
        console.log(`${week[5].day}`);
        console.log(`Schedule for the day: ${week[5].schedule}`);
        break;
    case 7:
        console.log(`${week[6].day}`);
        console.log(`Schedule for the day: ${week[6].schedule}`);
        break;
    default:
        console.log("Invalid day of the week number.");
        break;
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1 = 10;
let number2 = 20;

if (number1 > number2) {
    console.log (`The maximum number is: ${number1}`);
} else if (number2 > number1) {
    console.log(`The maximum number is: ${number2}`);
} else {
    console.log('The numbers are equal.');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x;
x = x || "default";
console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ' Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ': Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ': Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ': Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ': Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ': Супер');
}
