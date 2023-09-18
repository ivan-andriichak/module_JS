
// function renderSessions() {
//     const sessionsList = document.getElementById('sessionsList');
//     const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//
//     if (sessions.length === 0) {
//         sessionsList.textContent = 'Інформація про сесії відсутня.';
//     } else {
//         const ul = document.createElement('ul');
//         sessions.forEach(session => {
//             const li = document.createElement('li');
//             li.textContent = session;
//             ul.appendChild(li);
//         });
//         sessionsList.appendChild(ul);
//     }
// }
//
// renderSessions();
