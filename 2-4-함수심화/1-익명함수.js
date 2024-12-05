// 익명함수 (anonymous function) : 다른 함수에 함수를 전달하거나
// 함수가 함수를 리턴할 때 사용

// 함수 선언식 (function declaration): 호출보다 선언이 아래에있어도 작동
multiply(3, 4);  //호출보다 선언이 아래에 있어도 작동
function multiply(n1, n2) {
  console.log('곱셈 함수!');
  return n1 * n2;
}

// 함수 표현식 (function expression) - 익명함수
const add = function (n1, n2) {  //함수의 이름이 없어서 변수에 삽입 가능!!
  console.log('덧셈 함수!');  
  return n1 + n2;
};

const r1 = add(10, 20);  
console.log(`r1: ${r1}`);  //r1: 30  /  변수의 이름으로 함수 호출 가능

console.log('================');

// 함수 선언식과 함수 표현식은 보기엔 유사해 보이지만 
// 함수 선언식은 함수가 호출보다 밑에 있어도 호출 가능
// 프로젝트 할때는 함수 선언식을 사용해서 모두가 함수를 편하게 사용할 수 있게 
// 하는것이 좋고 개인적으로 사용할 함수는 함수 표현식을 사용하는 것이 좋음

const arr = [
  10,
  'hello',
  true,
  [1, 2, 3],
  { age: 3, name: '영희' },
  function () {   // 배열 안에 함수 삽입 가능
    console.log('배열안의 함수!');
  }
];
console.log(arr.length); //6
console.log(arr[3][1]);  //2 (배열안의 3번의 1번은 2)
console.log(arr[4].name);  //영희  (.name or ['name'])
arr[5](); //배열안의 함수! / 함수호출할때는 ()사용해서 호출
const pooh = arr[5]; //arr[5]를 변수pooh에 저장하고 아래에서 호출가능
pooh(); //배열안의 함수!



console.log('=============');

const cat = {
  name: '야옹이',
  age: 5,
  // 메서드: 객체의 기능을 표현
  sleep: function () {
    console.log('쿨쿨쿨zzz');
  }
};
cat.sleep();  //쿨쿨쿨zzz출력 / 객체에 랩핑된 함수를 호출하는 방법 


const foodList = {
  0: '짜장면',
  1: '볶음밥',
  2: '탕수육',
  length: 3,
  indexOf: function (item) { },
  push: function(...items) {}
};

console.log(foodList.length);  //3
console.log(cat['name']);  //야옹이
console.log(foodList[0]);  //짜장면




