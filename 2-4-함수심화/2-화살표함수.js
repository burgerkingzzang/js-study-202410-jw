
// 함수 선언문 방식
// function add(n1 , n2 ){
//   return n1+ n2;
// }


//함수 표현식 방식
// const add = function(n1 ,n2){
//   return n1 + n2;
// };

// 화살표 함수 방식(ES6)
const add = (n1 ,n2) =>  n1 + n2;  //중괄호(코드가 단 한줄일때), return 생략가능
 
const r1 = add(50 , 99);
console.log(`r1: ${r1}`); //r1:149 

const sayHello = nickName => console.log(`${nickName}님 안뇽?`);  //매개변수가 단 한개(nickName)면 소괄호 없이 가능
sayHello('김진우');  //김진우님 안뇽? 출력


//화살표함수 표현 전
function pow(n){
  return n ** 2;
}

//화살표함수 표현 후 (상당히 간편해짐)
const pow = n => n ** 2;
console.log(pow(3));
