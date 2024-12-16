
// 일급 함수 (c언어나 자바는 일급함수 지원안함)
// 함수를 하나의 값처럼 사용하여 변수에 저장하거나 다른 함수에 전달하거나 리턴할 수 있음

function substract(n1 , n2){
  return n1 - n2 ;}

let orange = substract;  //함수를 호출한게 아니라 함수 자체를 변수 orange에 저장한것임
console.log(`orange: ${typeof orange}`);  //typeof orange : function  → 변수 orange는 이제 함수로써 기능

const grape = orange(30, 12)  //orange를 함수처럼 사용가능하게 됨
console.log(`grape: ${grape}`);  //grape : 18

//===============================================================================================

function printSubstract(x){  //매개변수: x
  console.log(typeof x);  //function
  const result = x(10,4)
  console.log(`result : ${result}`);  //result : 6
}

printSubstract(substract);  //printSubstract에 substract함수를 저장
printSubstract(function (n1, n2) {  //무기명함수를 substract에 전달 가능
  return n1 * n2;  //새로운 함수를 substract에 전달
});
printSubstract ((n1 , n2) => n1 * n2);  //result : 40
printSubstract ((n1 , n2) => n1 ** n2);  //result : 10000
// 원래 함수의 기능을 내 맘대로 바꾸는게 가능해짐 - 콜백!!




// 함수가 함수를 리턴
function bar(n1 , n2){  //bar는 function()을 리턴
  return function (){ 
    return n1 + n2
  };
} 
const bar(n1 , n2) => () => n1 + n2;  //위의 함수를 화살표 함수로 변화 가능

const foo = bar(5, 8);  //bar가 5,8을 전달받고, foo는 위의 n1+n2기능이 있는 함수를 전달받음
console.log(typeof foo);  //foo : function

const goo = foo();  //지역변수의 수명을 늘리는 것
console.log(`goo : ${goo}`);  //goo : 13

