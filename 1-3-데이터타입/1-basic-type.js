
let age = 20;  // 자바스크립트에서는 20을 20.0으로 판단
console.log(typeof age);  // age의 type이 뭐냐는 뜻 > number 

let taxRate = 0.15;  //일반적인 프로그래밍언어에서는 정수의 실수를 엄격하게 구분하지만 
console.log(typeof taxRate);  //자바스크립트에서는 숫자를 전부 실수로 판단 

console.log(age / 0); // Infinity
console.log(age * '메롱');  //NaN : Not an Number

let integerNum = 42;       // 정수
let floatNum = 3.14;       // 실수
let negativeNum = -10;     // 음수

console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log('hello' / 2);  // NaN
