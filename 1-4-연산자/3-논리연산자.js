
// 피연산자 (operand ) - 연산의 대상이 되는 데이터
// 산술연산 - 피 연산자가 숫자여야 함
console.log(3 + 4);
console.log('김철수' * true); // NaN

// 비교연산 - 피연산자가 숫자 또는 문자
// 논리연산 - 피연산자가 논리여야 함 (true or false)
let t = true;
let f = false;


// && : 양쪽 항이 모두 true인경우만 true로 도출
// 로그인로직 : 아이디 일치 + 패스워드 일치 = 성공(true)
console.log('========================');

console.log(t && t); // true
console.log(t && f); // false
console.log(f && t); // false
console.log(f && f); // false

console.log('========================');

let height = 145; 
let age = 6; 
console.log(height >= 140 && age >= 6); // true

console.log('========================');

console.log(t || t); // true
console.log(t || f); // true
console.log(f || t); // true
console.log(f || f); // false

console.log('========================');

//논리 반전
console.log(!t); // false
console.log(!f); // true



