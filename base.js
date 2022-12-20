// 1 пепеменные

// var name = "George"; лучше не использовать
// const lastName = "Pashinin";
// // let age = 17;
// // console.log(name);
// const isProgrammer = true;
// const firstName = "George";
// const _private = "privat";
// const $ = "some value";
// const withNum5 = "5";
// const 5withNim = "5 " не может начинаться с цифры

// 2 Мутирование

// alert("person name: " + firstName + ", person age: " + age);
// const lastName = prompt("Введите фамилию");
// alert(firstName + " " + lastName);

//3 Операторы

// let CurrentYear = 2022;
// const birthYear = 2005;
// let c = 32;
// const a = 10;
// const b = 5;
// // c = c + a;
// c += a;
// console.log(a + b);
// console.log(a - b);
// console.log(a / 5);
// console.log(++CurrentYear);
// console.log(--CurrentYear);
// console.log(c);

//4 Типы Данных

// const isProgrammer = true;
// const name = "George";
// const age = 17;
// let x;
// console.log(typeof null);
// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof isProgrammer);

// 5 Приоритет операторов

const fullAge = 17;
const birthYear = 2005;
const CurrentYear = 2022;

const isFullAge = CurrentYear - birthYear >= fullAge;
console.log(isFullAge);

// 6 условные операторы
const courseStatus = "pending"; // ready, fall, pending
if (courseStatus === "ready") {
  console.log("Course is ready");
} else if (courseStatus === "pending") {
  console.log("Is not");
}
// разница между == и === в том что при сравнивании == менее строгая и приводит к одному
const isReady = true;
// isReady ? console.log("Все готово!") : console.log("Все не готово!"); тернарное выражение
// // if (isReady){
//     console.log('Все готово!')
// } else{
//     console.log('Not Ready')
// } ЭТО ОДНО И ТО ЖЕ
// 7 булевая логика
// 8 Функции
// function calculateAge(year) {
//   return 2022 - year;
// }
// const myAge = calculateAge(2005);
// console.log(myAge);

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   if (age > 0) {
//     console.log("Человек по имени" + name + " сейчас имеет возраст " + age);
//   } else {
//     console.log("Future");
//   }
// }
// logInfoAbout(" Zhorik, a", 2023);

// 9 Массивы

// const cars = ["Мазда", "Мерседес", "Форд"];
// // console.log(cars);

// console.log(cars.length);
// cars[0] = "Porshe";
// console.log(cars[0]);

//10 циклы

// const cars = ["Мазда", "Мерседес", "Форд"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(i);
//   const car = cars[i];
//   console.log(car);
// }
// for (let car of cars) {
//   console.log(car);
// }
// 11 objects
// const person = {
//   firstName: "Zhorik",
//   lastName: "Pashinin",
//   year: "2005",
//   languages: ["Ru", "En"],
//   hasBitches: false,
//   greet: function () {
//     console.timeLog("greet");
//   },
// };
// console.log(person.firstName);
// console.log(person["lastName"]);
// const key = "year";
// console.log(person[key]);
// person.greet();
