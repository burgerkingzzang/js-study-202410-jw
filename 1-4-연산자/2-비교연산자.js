
let a = 5;  
let b = '5'; 

// 모든 동등비교는 === <- 3개 사용(js 한정)
console.log(a === b); //false
console.log(a !== b); //true


console.log('==============================');

// == 은 직관적으로 결과 예측이 어려움 (js기준) ===사용시 정확한 값 도출됨
console.log('0' === ''); //false
console.log(0 === ''); //false
console.log('0' === 0); //false
console.log(false === 'false'); //false
console.log(false === 0); //false


console.log('=========================');

//문자 비교
let password = 'abc1234';
console.log(password === 'abc1234'); //true

//문자 대소 비교
          //97     65     <- 아스키 코드표 10진수 크기
console.log('a' > 'A');   //true
          //65    67
console.log('A' >'C');    //true

console.log('가' >'나');    //false

console.log('ace'> 'ade');    //false  
        //알파벳 ascii 코드 대문자 보다 소문자가 더 높음 알파벳 순서대로 올라감  
        //, 한글은 가나다라 순으로 높아짐


