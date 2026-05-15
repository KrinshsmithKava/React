// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const element = <h1>Hello World</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element);

// Let vs Var vs Const

// function sayHello() {
    //     for (let i = 0; i < 5; i++) {
        //         console.log(i);
        //     }
        //     console.log(i);
    // }

// sayHello();

// var -> function
// let -> block
// // const -> block

// const x = 1;
// x = 2;

// Objects

// const person = {
//     name: 'Krinshsmith',
//     walk() {},
//     talk() {}
// };

// person.talk();
// person.name = '';

// const targetMember = 'name';
// person[targetMember.value] = 'Krinsh';

// The this Keyword

// const person = {
//     name: "Krinshsmith",
//     walk() {
//         console.log(this);
//     }
// };

// person.walk();

// const walk = person.walk;
// walk();

// Binding this

// const person = {
//     name: "Krinshsmith",
//     walk() {
//         console.log(this);
//     }
// }

// person.walk();

// const walk = person.walk.bind(person);
// walk();

// Arrow Function

// const square = function(number) {
//     return number * number;
// }

// const square = number => number * number;
// console.log(square(5));

// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
//];

// const activejobs = jobs.filter(function(job) { return job.isActive;});

// const activejobs = jobs.filter(job => job.isActive);

// Arrow Function and this

// const person = {
//     talk() {
//         var self = this;
//         setTimeout(() =>{
//             console.log('this', this);
//         }, 1000);
//     }
// };
// person.talk();

// Array.map Method

// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);

// Object Destructuring

// const address = {
//     street: '',
//     city: '',
//     country: '',
// };

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const { street: st } = address;

// Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // const combined = [...first, 'a', ...second, 'b'];

// const clone = [...first];
// console.log(first);
// console.log(clone);

// const first = { name: 'Krinshsmith' };
// const second = { job: 'Instructor' };

// // const combined = {...first, ...second, location: 'Australia'};
// // console.log(combined)

// const clone = {...first};

// Classes

// class Person {
//     constructor() {
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// const person = new Person("Krinshsmith")

// Inheritance

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// class Teacher extends Person {
//     constructor(name, degree) {
//         super(name);
//         this.degree = degree;
//     }

//     teach() {
//         console.log("teach");
//     }
// }

// const teacher = new Teacher("Krinshsmith", "MSc");

// Modules

// import { Teacher } from "./teacher";

// const teacher = new Teacher("Krinshsmith", "MSc");
// teacher.teach();

// Named and Default Exports

import Teacher, { promote } from "./teacher";
import React, { Component } from 'react';

// Default -> import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher("Krinshsmith", "MSc");
teacher.teach();