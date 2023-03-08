// let user = {
//     name: 'SEONWOOK KIM',
//     age: 27
// };

// console.log(user);
// console.log(user.age);
// console.log(user.name);

// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.addEventListener('click', function () {
//     console.log('Click!!');
//     boxEl.classList.add('active');
//     console.log(boxEl.classList.contains('active'));
//     boxEl.classList.remove('active');
//     console.log(boxEl.classList.contains('active'));    
// });

// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function (boxEl, index) {
//     boxEl.classList.add(`order-${index + 1}`)
//     console.log(index, boxEl);
// });

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'SEONWOOK KIM';
console.log(boxEl.textContent);