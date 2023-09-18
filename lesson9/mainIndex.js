
// Task1

// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('myForm');
//     const submitBtn = document.getElementById('submitBtn');
//     const resultBlock = document.getElementById('resultBlock');
//
//     submitBtn.addEventListener('click', function () {
//         const name = document.getElementById('name').value;
//         const surname = document.getElementById('surname').value;
//         const age = document.getElementById('age').value;
//
//         const user = {
//             name: name,
//             surname: surname,
//             age: age,
//
//         };
//
//         resultBlock.innerHTML = `
//         <h2> Ваші дані:</h2>
//         <p>Ім'я: ${user.name}</p>
//         <p>Прізвище: ${user.surname}</p>
//         <p>Вік: ${user.age}</p>
//         `;
//     });
//
// });

// ==========================

// Task2

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// const currentNumber = localStorage.getItem('blockNumber');
// const numberDisplay = document.getElementById('numberDisplay');
//
// if (currentNumber) {
//     numberDisplay.textContent = currentNumber;
// } else {
//     numberDisplay.textContent = '0';
// }
//
// const updatedNumber = parseInt(numberDisplay.textContent) + 1;
// numberDisplay.textContent = updatedNumber.toString(); // Оновлення текстового вмісту в елементі
//
// localStorage.setItem('blockNumber', updatedNumber.toString()); // Збереження оновленого значення в localStorage

// ==========================

// Task 3

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію.

// Функція для отримання поточної дати та часу у вигляді рядка
// function getCurrentDateTimeAsString() {
//     return new Date().toLocaleString();
// }
//
// // Функція для збереження даних сесії в локальному сховищі
// function saveSessionData() {
//     const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//     sessions.push(getCurrentDateTimeAsString());
//     localStorage.setItem('sessions', JSON.stringify(sessions));
// }
//
// saveSessionData();

// =========================

// Task4

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
// const data = [
//         {
//             "title": "м. Київ",
//             "type": "city"
//         },
//         {
//             "title": "Житомирська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Харківська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Вінницька область",
//             "type": "oblast"
//         },
//         {
//             "title": "Чернігівська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Дніпропетровська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Черкаська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Волинська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Київська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Миколаївська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Рівненська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Сумська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Тернопільська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Краматорський район",
//             "type": "raion"
//         },
//         {
//             "title": "Кіровоградська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Хмельницька область",
//             "type": "oblast"
//         },
//         {
//             "title": "Запорізька область",
//             "type": "oblast"
//         },
//         {
//             "title": "Одеська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Полтавська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Львівська область",
//             "type": "oblast"
//         },
//         {
//             "title": "м. Кривий Ріг",
//             "type": "city"
//         },
//         {
//             "title": "Криворізька територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Івано-Франківська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Чернівецька область",
//             "type": "oblast"
//         },
//         {
//             "title": "Ізюмський район",
//             "type": "raion"
//         },
//         {
//             "title": "Бахмутська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Васильків",
//             "type": "city"
//         },
//         {
//             "title": "Васильківська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Білоцерківська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Біла Церква",
//             "type": "city"
//         },
//         {
//             "title": "Донецька область",
//             "type": "oblast"
//         },
//         {
//             "title": "Покровський район",
//             "type": "raion"
//         },
//         {
//             "title": "Уманська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Бахмутський район",
//             "type": "raion"
//         },
//         {
//             "title": "Закарпатська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Лубенська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Лубни",
//             "type": "city"
//         },
//         {
//             "title": "Полтавська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Полтава",
//             "type": "city"
//         },
//         {
//             "title": "м. Старокостянтинів",
//             "type": "city"
//         },
//         {
//             "title": "Старокостянтинівська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Миколаїв",
//             "type": "city"
//         },
//         {
//             "title": "Миколаївська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Торецька територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Кропивницький район",
//             "type": "raion"
//         },
//         {
//             "title": "Першотравенська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Нікопольська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Нікополь",
//             "type": "city"
//         },
//         {
//             "title": "м. Першотравенськ",
//             "type": "city"
//         },
//         {
//             "title": "Одеський район",
//             "type": "raion"
//         },
//         {
//             "title": "м. Черкаси",
//             "type": "city"
//         },
//         {
//             "title": "Черкаська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Добропільська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Херсонська область",
//             "type": "oblast"
//         },
//         {
//             "title": "Сумська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Суми",
//             "type": "city"
//         },
//         {
//             "title": "Первомайська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Краматорська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Макарівська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Краматорськ",
//             "type": "city"
//         },
//         {
//             "title": "Миргородська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Бориспіль",
//             "type": "city"
//         },
//         {
//             "title": "Броварська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Миргород",
//             "type": "city"
//         },
//         {
//             "title": "Бориспільська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Бровари",
//             "type": "city"
//         },
//         {
//             "title": "м. Вознесенськ",
//             "type": "city"
//         },
//         {
//             "title": "Коростенський район",
//             "type": "raion"
//         },
//         {
//             "title": "м. Первомайськ",
//             "type": "city"
//         },
//         {
//             "title": "Миронівська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Вознесенський район",
//             "type": "raion"
//         },
//         {
//             "title": "Синельниківський район",
//             "type": "raion"
//         },
//         {
//             "title": "Фастівська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Вознесенська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Житомирський район",
//             "type": "raion"
//         },
//         {
//             "title": "Дружківська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Фастів",
//             "type": "city"
//         },
//         {
//             "title": "Слов'янська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Запорізький район",
//             "type": "raion"
//         },
//         {
//             "title": "м. Слов'янськ",
//             "type": "city"
//         },
//         {
//             "title": "м. Кременчук",
//             "type": "city"
//         },
//         {
//             "title": "Ніжинський район",
//             "type": "raion"
//         },
//         {
//             "title": "м. Ватутіне",
//             "type": "city"
//         },
//         {
//             "title": "Ватутінська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Кременчуцька територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Пологівський район",
//             "type": "raion"
//         },
//         {
//             "title": "Дніпровська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Дніпро",
//             "type": "city"
//         },
//         {
//             "title": "Лозівський район",
//             "type": "raion"
//         },
//         {
//             "title": "Покровська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Обухів",
//             "type": "city"
//         },
//         {
//             "title": "Узинська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Шепетівський район",
//             "type": "raion"
//         },
//         {
//             "title": "Пирятинська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "Сумський район",
//             "type": "raion"
//         },
//         {
//             "title": "Харківський район",
//             "type": "raion"
//         },
//         {
//             "title": "Жашківська територіальна громада",
//             "type": "hromada"
//         },
//         {
//             "title": "м. Пирятин",
//             "type": "city"
//         },
//         {
//             "title": "Павлоградський район",
//             "type": "raion"
//         },
//         {
//             "title": "Голованівський район",
//             "type": "raion"
//         }
//     ];
//
// let currentPage = 0;
// const itemsPerPage = 10;
//
// function displayObjects() {
//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const objectsToDisplay = data.slice(startIndex, endIndex);
//
//     const objectsContainer = document.getElementById('objectsContainer');
//     objectsContainer.innerHTML = '';
//
//     objectsToDisplay.forEach(object => {
//         const objectDiv = document.createElement('div');
//         objectDiv.textContent = `Title: ${object.title}, Type: ${object.type}`;
//         objectsContainer.appendChild(objectDiv);
//     });
// }
//
// function nextPage() {
//     if (currentPage < Math.ceil(data.length / itemsPerPage) - 1) {
//         currentPage++;
//         displayObjects();
//     }
// }
//
// function prevPage() {
//     if (currentPage > 0) {
//         currentPage--;
//         displayObjects();
//     }
// }
//
// window.onload = displayObjects;

// =========================

// Task5

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// const textElement = document.getElementById('text');
// const hidenButton = document.getElementById('hideButton');
//
// hidenButton.addEventListener('click', function () {
//     if (textElement) {
//       textElement.remove();
//       hidenButton.style.backgroundColor = '#1e8788';
//         hideButton.style.color = 'white';
//     }
//
// });

// =========================

//Task6

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const ageInput = document.getElementById('ageInput');
// const checkAgeButton = document.getElementById('checkAgeButton');
// const resultMessage = document.getElementById('resultMessage');
//
// checkAgeButton.addEventListener('click', function () {
//     const enterAge = parseInt(ageInput.value);
//
//     if (enterAge < 18) {
//         resultMessage.textContent = 'Your age is less than 18 years. Prohibited !!!';
//         resultMessage.style.color = 'red';
//     } else if (enterAge >= 18 && enterAge <= 100) {
//         resultMessage.textContent = 'Your age is acceptable';
//         resultMessage.style.color = 'green';
//     } else {
//         resultMessage.textContent = 'It is impossible!!!';
//         resultMessage.style.color = 'darkred';
//     }
// });

// =========================

//Task7

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// function generateTable() {
//     const rowCount = parseInt(document.getElementById('rowCount').value);
//     const colCount = parseInt(document.getElementById('colCount').value);
//     const cellContent = document.getElementById('cellContent').value;
//     const tableContainer = document.getElementById('tableContainer');
//
//     const table = document.createElement('table');
//     for (let i = 0; i < rowCount; i++) {
//         const row = document.createElement('tr');
//         for (let j = 0; j < colCount; j++) {
//             const cell = document.createElement('td');
//             cell.textContent = cellContent;
//             row.appendChild(cell);
//         }
//         table.appendChild(row);
//     }
//
//     // Очищаємо вміст контейнера для таблиці.
//     tableContainer.innerHTML = '';
//     tableContainer.appendChild(table);
// }

// =========================

//Task8

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
// const currentTime = new Date().getTime();
//
// const lastUpdateTime = parseInt(localStorage.getItem('lastUpdateTime'));
// const storedPrice = localStorage.getItem('price');
//
// if (storedPrice) {
//     const priceBlock = document.getElementById('priceBlock');
//     priceBlock.textContent = storedPrice;
// }
//
// if (!lastUpdateTime || currentTime - lastUpdateTime >= 10000) {
//     const priceBlock = document.getElementById('priceBlock');
//     let currentPrice = parseInt(priceBlock.textContent);
//     currentPrice += 10;
//     priceBlock.textContent = currentPrice + 'грн';
//
//     localStorage.setItem('price', priceBlock.textContent);
//     localStorage.setItem('lastUpdateTime', currentTime);
// }

