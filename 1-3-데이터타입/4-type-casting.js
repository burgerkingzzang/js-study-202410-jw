
let num = 20;  // type : num
let address = '서울시';  // type : string
let result = '10';  // type : string

// 숫자와 문자의 덧셈은 숫자를 자동으로 문자로 변경
console.log(num + result);  // 2010 출력
console.log(address + num);  // 서울시20 출력

// 덧셈 제외 산술연산은 문자를 숫자로 변환시도한 후 수행 실패시 NaN 출력
const operating = num * result;  
console.log(typeof operating); // number
console.log(address * num);  // NaN 출력

// 명시적 형 변환 
const n1 = '10'; // type : string
const n2 = 20; // type : num

const n3 = Number(n1) + n2; // 명시적으로 30을 만들고 싶을때 (문자를 숫자로 변환)
console.log(`n3: ${n3}`);  // n3: 30 출력 

// ================
let num1 = 10;
let num2 = 50;

console.log(num1 + String(num2)); // 1050
num2 = String(num2);
console.log(num1 + num2); // 1050이 안나옴


console.log(typeof 123);         // 'number'
console.log(typeof '안녕');       // 'string'
console.log(typeof true);        // 'boolean'
console.log(typeof undefined);   // 'undefined'
console.log(typeof null);        // 'object' (자바스크립트의 설계상 오류)


