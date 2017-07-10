console.log('App working: open app/index.js to start exploring ES6');

//const num1 = 5;  also can be exported imported
//const num2 = 10;

//import {add, subtract, multiply, divide} from './math';  OR...

import * as math from './math';
const { num1, num2} = math;
const { add } = math;

import $ from 'jquery';

// console.log(`The subtraction total of ${num1} and ${num2} is ${subtract(num1,num2)} `);
//
// console.log(`The addition total of ${num1} and ${num2} is ${add(num1,num2)} `);
//
// console.log(`The total of ${num1} divided by ${num2} is ${divide(num1,num2)} `);
//
// console.log(`The total of ${num1} multiplied by ${num2} is ${multiply(num1,num2)} `);

console.log(`The total of ${num1} multiplied by ${num2} is ${math.multiply(num1,num2)} `);  // math becomes an object

console.log(`The addition total of ${num1}and ${num2} is ${add(num1,num2)} `);

$('#root').append('<h1> I AM APPENDED FROM INDEX .JS </h1>')