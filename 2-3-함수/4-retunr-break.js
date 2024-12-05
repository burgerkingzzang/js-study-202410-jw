// return은 함수를 강제종료하는 구문

function foo() {
  let a = 10;
  let b = 20;
  return a + b;  // return은 함수를 강제종료(=break)하는 기능이 있어서 밑에 코드를 작성해도 동작안함
}

function callYourName(name) {
  var prohibits = ["바보", "멍충이", "메롱"]; //prohibits에 3가지 배열 지정
  if (prohibits.includes(name)) {
    // prohibits 배열에 있는 이름에 name이름과 같은 배열이 포함되어 있으면
    console.log("그런 이름은 불러줄 수가 없단다 얘야"); // 그런 이름은 불러줄 수가 없단다 얘야를 출력
    return; // break와 같이 return으로 강제종료를 해준다.
  }
  console.log(`${name}님 안녕하세요`);
}
callYourName("뽀로로");
callYourName("멍충이");

console.log("============================");




//======================리턴의 강제종료기능====================================
function loop(n) {
  while (true) {
    if (n === 0) {
      console.log("break!");
      break;   //break는 반복문만 종료
    } else if (n === 1) {
      console.log("return!!!");
      return;   //return은 함수 자체를 종료시킴
    }
  }
  console.log("end!!!");  //end while
} // n이 0 이면 break 함수이기 때문에 while문이 종료되는 것이므로 end 로그가 찍히지만 n이 1일때는 end가 실행되지 않음
loop(0); //break함수이기 때문에 while문이 종료돼서 - break! end!!! 출력
loop(1); //return에 걸리면 함수전체를 종료시킴 - return!!! 만 출력




//리턴은 언제나 하나의 값만 반환 가능! ex) f(x) = 2a + 3b

// 숫자 2개를 전달하면 해당 숫자의 덧셈,뺄셈,곱셈,나눗셈 결과를 반환
function operate(n1, n2) {  //리턴은 하나의 값만 변환 가능하므로 리턴안에 
  let addResult = n1 + n2;
  let subResult = n1 - n2;
  let multiResult = n1 * n2;
  let divResult = n1 / n2;
  let resultList = { //함수안에 배열 만들어서 해결
    addResult,  //key
    subResult,
    multiResult,
    divResult,
  };
  return resultList;  //리턴은 언제나 하나의 값만 반환 가능! ex) f(x) = 2a + 3b
}
let result = operate(10, 5);  //result가 배열에서 산출됨
console.log(`덧셈: ${result.addResult}`);
console.log(`뺄셈: ${result.subResult}`);
console.log(`곱셈: ${result.multiResult}`);
console.log(`나눗셈: ${result.divResult}`);
