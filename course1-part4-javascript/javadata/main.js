const string1 = "Hello";
const string2 = 'Hello';
const string3 = `Hello ${string1} ?!`;
// console.log(string3)

const number = -123.1234;
const pi = 3.14;
// console.log(typeof (number + undefined));
// console.log(typeof pi);

const a = 0.1;
const b = 0.2;
// console.log(Number((a + b).toFixed(1)));

const c = true;
const d = false;
// if (d) {
//     console.log('Hello');
// }

let age = null ;
// console.log(age);
// setTimeout(function () {
//     age = 85;
//     console.log(age);
// }, 1000);

const user = {
    name: 'Seonwook Kim',
    age: 85,
    email: null
};
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);

const fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);

const user2 = new Object();
user2.name = 'Seonwook Kim';
user2.age = 27;
// console.log(people);

function User() {
    this.name = 'Seonwook Kim';
    this.age = 85;
}
const user3 = new User();
// console.log(user3);

const user4 = {
    name: 'Seonwook Kim',
    age: 27
};
const key = 'name';
// console.log(user4.age);
// console.log(user4[key]);

const userA = {
    name: 'HEROPY',
    age: 85
};
const userB = {
    name: 'Neo',
    age: 22,
    parent: userA
}
// console.log(userB.parent.name);

function hello() {
    console.log('Hello!');
}
hello();