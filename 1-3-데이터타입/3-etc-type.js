
//논리 타입 - boolean
let flag = false;  //소문자 true false 만 인식, 따음표도 안됨(string)
console.log(typeof flag);  //boolean 이라고 출력

let num = 3;
let result = num > 5 ;
console.log(result);  // flase로 출력 

// null 타입 - 부존재 (명시적인 없음)
let props = null;   //아무것도 없음을 의미
console.log(typeof props);  // object로 출력 (null type)

// undefined 타입 - 변수가 초기화되지 않는 상태
let yourName ;    // 입력해야하는 상태
console.log(yourName);  // undefined로 출력

