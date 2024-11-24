// document.write('HELLO');
// alert('hello');
// console.log({ name: 'Aditya' });

/**
 * MULTI-LINE COMMENT
 *
 *
 */

// + , - , *, /, %
// +=, -=, *=, /=, %=
// ++, --

// let x = 2;
// x=x+1;
// x += 1;

// Implicit Type Convertion
// let x = '1';
// let y = 2;

// console.log(x + y);

// Template Literals

// const domain = 'google';
// const url = `https://${domain}.com`;
// console.log(url);

// let x = 2.34555;
// console.log(x);

// Data Types
// Primitive -> String, Number, Boolean, Null, Undefined, Symbol
// Object -> Arrays, Functions, Objects

// const x = [1, 2, 3, 4, 5];

// x.push(6);
// console.log(x);

// x.pop();
// console.log(x);

// Functions

// function func(x, y, z) {
//   console.log(x + y + z);
// }

// func(1, 2, 4);

// Argument -> Value of the parameter

// const func = (x, y, z) => {
//   //   console.log(x + y + z);
//   let sum = x + y + z;
//   return sum;
// };

// let s = func(1, 2, 3);
// console.log(s);

// Objects -> key value pairs

// const obj1 = {
//   firstName: 'Aditya',
//   age: 23,
//   hobbies: ['painting', 'aafag', 'alsjga'],
//   'home address': 'akjnfkjagn',
//   func1: () => {
//     // console.log('Hello');
//     return 1;
//   },
//   address: {
//     city: 'Jaipur',
//   },
// };

// console.log(obj1.address.city);

// obj1['last name'] = 'Agrawal';

// console.log(obj1);

// obj1.func1 = 'ljnfang';

// console.log(obj1);

// if - else

// Falsy Values -> 0, NaN, undefined, Null, ""

// if (3 > 2) {
//   // Set of statements
// } else {
//   //Set of statements
// }

// if (cond1) {

// } else if (cond2){

// }... else {

// }

// const x = 1 > 2 ? 'TRUE' : 'FALSE';
// console.log(x);

//  > , <, >=, <= , !=, !==, ==, ===

// const x = 1;
// const y = true;

// let typeX = typeof x;
// console.log(typeX);

// console.log(typeof x);
// console.log(x == y);

// for, while, do-while

// for(let i=0; i<4; i++) {

// }

// while(cond.) {

// }

// do {

// } while(cond.)

// String Properties

// let str = 'HelljabfSSSSloo ljanf KSGVSAllad. kjdag        dkjagn ';
// console.log(str);
// console.log(str.length);
// console.log(str.trim());
// console.log(str.substring(0, 4));
// console.log(str.search('ll'));
// console.log(str.toLowerCase());

// let arr = [1, 2, 3, 4, 5];

// forEach, filter, find, map

// arr.forEach((num) => {
//   console.log(num);
// });

// const numExists = arr.slice(2, 3).find((num) => {
//   return num % 5 == 0;
// });

// console.log(numExists);

// const arr2 = arr.filter((num) => {
//   return num % 2;
// });

// console.log(arr2);

// Transformation to each and every element of array -> MAP

// const arr = [1, 2, 3];

// const transformedArr = arr.map((num) => {
//   return num + 1;
// });

// console.log(transformedArr);

// Callback functions -> Function passed as an argument to another function

// Math

// const PI = Math.PI;
// console.log(PI);

// console.log(Math.sin(Math.PI));

// console.log(Math.floor(2.3333342525));
// console.log(Math.ceil(2.3333342525));

// let x = 1,
//   y = 2;

// console.log('MIN', Math.min(2, 4, 5));
// console.log(Math.max(2, 3, 5, 6, 6, 2, 1));

// console.log(Math.sqrt(13333334));
document.write(Math.sqrt(13333334));

// Date Object

// MM_DD_YYYY
const date = new Date();
console.log(date.getUTCSeconds());
console.log(date.getDate());
console.log(date.getDay());

// Epoch -> Number of milliseconds from 1st Jan 1970
