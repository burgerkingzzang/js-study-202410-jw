
// 두 수를 전달받아 해당 수의 합을 리턴
function add(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

let r1 = add(5, 4);
let r2 = add3(1, 2, 3);

// n개의 정수를 전달하면 그 합을 반환
function addAll(numbers) {
  let total = 0; 
  for (let n of numbers) {
    total += n;
  }
  return total;
}  //여러개의 데이터를 처리할때는 배열이나 객체로 받아서 처리한다.

let r3 = addAll([10, 20, 30]); //배열로 만들어서 전달
console.log(`r3: ${r3}`); //60

console.log('=================');









// JS ES6+ 스프레드
function addAllES6(...numbers) {  //[]로 묶지 않아도 ...을 붙이면 n개의 파라미터를 처리할수있다.
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

let r4 = addAllES6(5, 8, 3, 10, 20, 30);  //굳이 배열로 묶지 않아도 파라미터 여러개가 처리
console.log(`r4: ${r4}`);  //76

// let arr = [10, 20, 30];
// arr.splice(2, 1, '', '', '');

// function splice(start, deleteCount, ...items) {

// }