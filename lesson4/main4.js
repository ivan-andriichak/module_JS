// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcAreaRectangle(a, b) {
    let area = a * b;
    return area;
}

let a = 3;
let b = 5;
let rectangleArea = calcAreaRectangle(a, b);
console.log(`Area of rectangle = ${rectangleArea}`);
console.log(`---------------------------------------`);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calcAreaCircle(r) {
    const piApproximation = 3.14159;
    let area = 2 * piApproximation * (r ** 2);
    return area;
}

let r = 3;
let circkleArea = calcAreaCircle(r);
console.log(`Area of circle = ${circkleArea}`);
console.log(`---------------------------------------`);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcAreaCelinder(r1, h) {
    const piApproximation = 3.14159;
    let lateralArea = 2 * piApproximation * r1 * h;

    let baseArea = 2 * piApproximation * (r1 ** 2);

    let totalArea = lateralArea + baseArea;

    return totalArea;
}

const r1 = 3;
const h = 10;
let celinderArea = calcAreaCelinder(r, h);
console.log(`Area of celinder = ${celinderArea}`);
console.log(`---------------------------------------`);


// - створити функцію яка приймає масив та виводить кожен його елемент
function getArrElements(array) {
    for (let item of array) {
        console.log(item);
    }
}

let randomArr = [1, 2, 3, 8, 1];
getArrElements(randomArr);
console.log(`---------------------------------------`);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}

let myText = `Paragraph text`;
createParagraph(myText);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    let ul = document.createElement('ul');
    ul.insertAdjacentHTML('beforeend', `<li>${text}</li><li>${text}</li><li>${text}</li>`);
    document.body.appendChild(ul);
}

let listContent = `List text`;
createList(listContent);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListCount(text, count) {
    let ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        ul.insertAdjacentHTML('beforeend', `<li>${text}</li>`);
    }

    document.body.appendChild(ul);
}

let listItemText = `List text`;
let itemCount = 3;
createListCount(listItemText, itemCount);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListFromPrimitives(...array) {
    const ul = document.createElement('ul');

    for (let item of array) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }

    return ul;
}

const primitiveArray = [3, 'string', true, 23, false];
const listElement = createListFromPrimitives(...primitiveArray);

document.body.appendChild(listElement);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayObjects(array) {
    for (let obj of array) {
        const div = document.createElement('div');
        div.innerHTML = `<p>id: ${obj.id}</p><p>name: ${obj.name}</p><p>age: ${obj.age}</p>`;
        document.body.appendChild(div);
    }
}

const objectsArray = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Alice', age: 22 }
];

displayObjects(objectsArray);


// - створити функцію яка повертає найменьше число з масиву
function findSmallestElement(numbers) {
    let smallest = numbers [0];
    for (let number of numbers) {
        if (number < smallest) {
            smallest = numbers;
        }
    }

    return smallest;
}

let arrSmallest = [1, 23, 2, 5, 33, 12];
let smallestElement = findSmallestElement(arrSmallest);
console.log(smallestElement);
console.log(`---------------------------------------`);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
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
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

const initialArray = [11, 22, 33, 44];
const swappedArray = swap(initialArray, 0, 1);
console.log(swappedArray);
console.log(`---------------------------------------`);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
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

    const exchangedAmount =  (sumUAH / exchangeRate).toFixed(2);

    return exchangedAmount;
}

const currencyValues = [
    { currency: 'USD', value: 41 },
    { currency: 'EUR', value: 42 },
    // add other currencies
    { currency: 'GBP', value: 48 }
];

const exchangedAmount = exchange(10000, currencyValues, 'USD');
console.log(exchangedAmount);



