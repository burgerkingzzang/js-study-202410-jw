
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 120];

// 숫자배열에서 홀수번째 데이터만 필터링해서
// 해당 수에 50을 더해서 매핑
let total = 0;
const mappedArray = nums  //타겟 -> nums
  .filter((n, i) => {  //데이터 필터링
    if (i % 2 === 0) {
      return n;
    }
  })
  .map((n) => n + 50)  //필터린 된 데이터를 매핑
  .forEach(n => total += n)  //매핑한 데이터를 반복
  ;

  
console.log(total);  //360출력


const doubleNum = nums.pop() * 2;

const arr = nums.filter(n => n % 3 === 0).slice(0, 3)[1] * 10;
console.log(arr);


function foo() {
  return [];
}
function bar() {
  return "떡볶이";
}
function goo() {
  return 10;
}

