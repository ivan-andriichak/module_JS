// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
const str2 = 'lorem ipsum';
const str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// - Привести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let uppercaseStr1 = str1.toUpperCase();
let uppercaseStr2 = str2.toUpperCase();
let uppercaseStr3 = str3.toUpperCase();

console.log(uppercaseStr1);
console.log(uppercaseStr2);
console.log(uppercaseStr3);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// - Привести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const lowerStr1 = 'HELLO WORLD';
const lowerStr2 = 'LOREM IPSUM';
const lowerStr3 = 'JAVASCRIPT IS COOL';

let lowercaseStr1 = lowerStr1.toLowerCase();
let lowercaseStr2 = lowerStr2.toLowerCase();
let lowercaseStr3 = lowerStr3.toLowerCase();

console.log(lowercaseStr1);
console.log(lowercaseStr2);
console.log(lowercaseStr3);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   ';
let strClear = strDirty.trim(' ', '');
console.log(strClear);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {
    let arrWords = str.split(' ');
     return arrWords;
}

let str = 'Ревуть воли як ясла повні';
let arr= stringToarray(str);
console.log(arr);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const numbersToString = numbers.map(function (num) {
    return num.toString();
});
console.log(numbersToString);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(nums, direction) {
    if (direction === 'asc') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'desc') {
        return nums.sort((a, b) => b - a);
    }
    return nums;
}

let nums = [11, 21, 3];

console.log(sortNums(nums, 'asc')); // [3, 11, 21] (сортування від меншого до більшого)
console.log(sortNums(nums, 'desc')); // [21, 11, 3] (сортування від більшого до меншого)
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortedMonthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedMonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sorteMonthDuration = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(sorteMonthDuration);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const transformedCourses = coursesAndDurationArray.map((course, index) => {
    return {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    };
});

console.log(transformedCourses);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const deckOfCards = [
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
];

// - знайти піковий туз
const pikAce = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');

console.log(pikAce);

// - всі шістки
const sixes = deckOfCards.filter(card => card.value === '6');
console.log(sixes);

// - всі червоні карти
const redCards = deckOfCards.filter(card => card.color === 'red');
console.log(redCards);
// - всі буби
const diamond = deckOfCards.filter(card => card.cardSuit === 'diamond');
console.log(diamond);

// - всі трефи від 9 та більшеc
const clubses = deckOfCards.filter(card => card.cardSuit === 'clubs' && card.value >= 9 );
console.log(clubses);
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const classifySuit = deckOfCards.reduce((result, card) => {
    const cardSuit = card.cardSuit;

    if (result[cardSuit]) {
        result[cardSuit].push(card);
    } else {
        result[cardSuit] = [card];
    }

    return result;
} , {});

console.log(classifySuit);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js'
        ]
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css', 'js',
            'mysql',
            'mongodb',
            'git',
            'QA/QC'
        ]
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass'
        ]
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const objectsWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(objectsWithSass);
console.log(`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `);
// --написати пошук всіх об'єктів, в який в modules є docker
const objectsWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(objectsWithDocker);
