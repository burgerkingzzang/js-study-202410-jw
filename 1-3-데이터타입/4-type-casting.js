
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









//예제 1: 숫자 (Number)
let integerNum = 10; 
let floatNum = 3.14;
let negativeNum = -20;

console.log('정수:', integerNum);
console.log('실수:', floatNum);
console.log('음수', negativeNum);

let sum = integerNum + floatNum;
console.log('합계:', sum);




//예제 2: 문자열 (String)
// 문자열 선언 방법
let singleQuoteStr = '안녕하세요';
let doubleQuoteStr = "자바스크립트";
let backtickStr = `템플릿 리터럴`;

console.log(singleQuoteStr); // 출력: 안녕하세요
console.log(doubleQuoteStr); // 출력: 자바스크립트
console.log(backtickStr);    // 출력: 템플릿 리터럴

// 문자열 연결
let greeting = '안녕하세요, ' + '홍길동님!';
console.log(greeting);       // 출력: 안녕하세요, 홍길동님!

// 문자열 길이 확인
let message = 'Hello, World!';
console.log('메시지 길이:', message.length); // 출력: 메시지 길이: 13




//예제 3: 불리언 (Boolean)
// 불리언 값
let isTrue = true;
let isFalse = false;

console.log('isTrue:', isTrue);    // 출력: isTrue: true
console.log('isFalse:', isFalse);  // 출력: isFalse: false

// 비교 연산 결과
let num1 = 5;
let num2 = 10;
let isGreater = num1 > num2;
console.log('num1이 num2보다 큰가요?', isGreater); // 출력: num1이 num2보다 큰가요? false




//예제 4: null과 undefined
// undefined 예제
let undefinedVar;
console.log('초기화되지 않은 변수:', undefinedVar); // 출력: 초기화되지 않은 변수: undefined

// null 예제
let nullVar = null;
console.log('null 값 변수:', nullVar); // 출력: null 값 변수: null

// 변수에 값 할당하기
undefinedVar = 100;
nullVar = '데이터';
console.log('undefinedVar:', undefinedVar); // 출력: undefinedVar: 100
console.log('nullVar:', nullVar);           // 출력: nullVar: 데이터



//예제 5: typeof 연산자 사용하기
console.log(typeof 123);          // 출력: number
console.log(typeof 'hello');      // 출력: string
console.log(typeof true);         // 출력: boolean
console.log(typeof undefined);    // 출력: undefined
console.log(typeof null);         // 출력: object
console.log(typeof { name: '홍길동' }); // 출력: object




//예제 6: 데이터 타입 변환
// 명시적 타입 변환
let strNum = '123';
let num = Number(strNum);
console.log(typeof num, num);       // 출력: number 123

let numToStr = String(456);
console.log(typeof numToStr, numToStr); // 출력: string 456

let zero = 0;
let isZero = Boolean(zero);
console.log(typeof isZero, isZero); // 출력: boolean false

// 암시적 타입 변환
let result1 = '5' + 2;
console.log(result1);  // 출력: 52

let result2 = '5' * 2;
console.log(result2);  // 출력: 10

let result3 = '8' - '3';
console.log(result3);  // 출력: 5
