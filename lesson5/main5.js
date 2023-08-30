// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calcRectangleArea(a, b) {
//     return Math.round(a + b);
// }
//
// let a = 3;
// let b = 5;
// let rectangleArea = calcRectangleArea(a, b);
// console.log(rectangleArea);
// console.log(`---------------------------------------`);
// arrow fuunction
const calcRectangleArea = (a, b) => a * b;

let a = 3;
let b = 5;
let rectangleArea = calcRectangleArea(a, b);
console.log(rectangleArea);
console.log(`---------------------------------------`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calcCircleArea(r) {
//     return Math.round(Math.PI * r ** 2);
// }
//
// let r = 5;
// let circkleArea = calcCircleArea(r);
// console.log(circkleArea);

// arrow fuunction
const calcCircleArea = (r) => Math.round(Math.PI * r ** 2);

let r = 5;
let circleArea = calcCircleArea(r);
console.log(circleArea);
console.log(`---------------------------------------`);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calcAreaCelinder(r1, h) {
//     let totalArea = Math.round((2 * Math.PI * r1 * h) + (2 *  Math.PI * (r1 ** 2)));
//     return totalArea;
// }
//
// const r1 = 3;
// const h = 10;
// let celinderArea = calcAreaCelinder(r1, h);
// console.log(celinderArea);

// arrow fuunction
const calcAreaCelinder = (r1, h) => Math.round((2 * Math.PI * r1 * h) + (2 *  Math.PI * (r1 ** 2)));

const r1 = 3;
const h = 10;
let celinderArea = calcAreaCelinder(r1, h);
console.log(celinderArea);
console.log(`---------------------------------------`);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function getArrElements(array) {
//     for (let item of array) {
//         console.log(item);
//     }
// }
//
// let randomArr = [1, 2, 3, 8, 1];
// getArrElements(randomArr);

// arrow fuunction

const getArrElements = (array) => {
    for (let item of array) {
        console.log(item);
    }
}

let randomArr = [1, 2, 3, 8, 5];
getArrElements(randomArr);
console.log(`---------------------------------------`);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createParagraph(text) {
//    document.write(`<p>${text}</p>`);
// }
//
// let myText = `Paragraph text`;
// createParagraph(myText);

// arrow fuunction
const createParagraph = (text) => {
    document.write(`<p>${text}</p>`);
}

let myText = `Paragraph text`;
createParagraph(myText);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listItemText(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`);
// }
//
// let createList = `This text`;
// listItemText(createList);

// arrow fuunction
const createList = (text1) => {
    document.write(`<ul>
        <li>${text1}</li>
        <li>${text1}</li>
        <li>${text1}</li>
    </ul>`);
}

let listItemText = `This text`;
createList(listItemText);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createListCount(text2 , count) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text2}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createListCount(`List text`, 3);

// arrow fuunction
const createListCount = (text2 , count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text2}</li>`);
    }
    document.write(`</ul>`);
}

createListCount(`List text`, 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function createListFromPrimitives(array) {
//     document.write(`<ul>`);
//     for (let item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`<ul>`);
// }
//
// const primitiveArray = [3, 'string', true, 23, false];
// createListFromPrimitives(primitiveArray);

// arrow fuunction
const createListFromPrimitives = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`<ul>`);

}

const primitiveArray = [3, 'string', true, 23, false];
createListFromPrimitives(primitiveArray);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function displayObjects(array) {
//     document.write("<div>");
//     for (let obj of array) {
//         document.write(`
//         <div>
//             <p>id: ${obj.id}</p>
//             <p>name: ${obj.name}</p>
//             <p>age: ${obj.age}</p>
//         </div>
//         `);
//     }
//     document.write("</div>");
// }
//
// const objectsArray = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 30 },
//     { id: 3, name: 'Alice', age: 22 }
// ];
//
// displayObjects(objectsArray);

// arrow fuunction
const displayObjects = (array) => {
    document.write("<div>");
    for (let obj of array) {
        document.write(`
        <div>
            <p>id: ${obj.id}</p>
            <p>name: ${obj.name}</p>
            <p>age: ${obj.age}</p>
        </div>
        `);
    }
    document.write("</div>");
}

const objectsArray = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Alice', age: 22 }
];

displayObjects(objectsArray);


// - створити функцію яка повертає найменьше число з масиву

// function findMinNumber(array) {
//     let min = array[0];
//     for (let num of array) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
//
// let numbersArray = [5, -3, 9, -1, 7];
// let minNumber = findMinNumber(numbersArray);
// console.log(`Smallest number: ${minNumber}`);

// arrow fuunction
const findMinNumber = array => {
    let min = array[0];
    for (let num of array) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

let numbersArray = [5, -4, 9, -1, 7];
let minNumber = findMinNumber(numbersArray);
console.log(`Smallest number: ${minNumber}`);
console.log(`---------------------------------------`);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let result = 0;
//
//     for (const number of arr) {
//         result += number;
//     }
//
//     return result;
// }
//
// const numbers = [2, 4, 4, 6, 46, 7, 6, 8, 8, 45];
// const sm = sum(numbers);
// console.log(sm);

// arrow fuunction
const sum = arr => {
    let result = 0;

    for (const number of arr) {
        result += number;
    }

    return result;
}

const numbers = [2, 4, 4, 6, 46, 7, 6, 8, 8, 45];
const sm = sum(numbers);
console.log(sm);
console.log(`---------------------------------------`);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
// }
//
// const initialArray = [11, 22, 33, 44];
// const swappedArray = swap(initialArray, 0, 1);
// console.log(swappedArray);

// arrow fuunction
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

const initialArray = [11, 22, 33, 44];
const swappedArray = swap(initialArray, 0, 1);
console.log(swappedArray);
console.log(`---------------------------------------`);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// arrow fuunction
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate;

    for (const cv of currencyValues) {
        if (cv.currency === exchangeCurrency) {
            exchangeRate = cv.value;
            break;
        }
    }

    if (exchangeRate === undefined) {
        console.log('Exchange rate is not available.');
        return null;
    }

    const exchangedAmount = (sumUAH / exchangeRate).toFixed(2);

    return parseFloat(exchangedAmount);
}

const currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];

const exchangedAmount = exchange(10000, currencyValues, 'USD');
console.log(exchangedAmount);

