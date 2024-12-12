
//돈이 3000원이상 있으면 김밥을 먹을 수 있다.
//돈이 3000원미만이면 굶어야한다.

// let money = 2000;
// let food = (money >= 3000) ? '김밥' : '굶어!';

// let food;
// if(money >=5000){
//   food = '떡라면';
// } else if (money >=3000){
//   food = '김밥';
// }
//   else{
//     food = '굶어!';
//   }


let money = 2000; // money가 5000이상이면 떡라면, 3000이상이면 김밥 그 아래면 굶어
let food = (money >=5000) ? '떡라면' : (money >= 3000) ? '김밥' : '굶어!';  //참일때 첫번째''거짓일때 두번째''
console.log(`선택된 음식 ${food}`); // 출력: 굶어

//=========================================================

let age = 20; // age가 18 이상이면 status에 "성인"이 할당, 그렇지 않으면 "미성년자"가 할당
let status = (age >= 18) ? '성인' : '미성년자';
console.log(status); // 출력: 성인

//=========================================================

let score = 95; // score가 90 이상이면 A, 80 이상이면 B, 그 외에는 C가 할당
let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : 'C';
console.log(grade); // 출력: A


//시험 합격 여부
let score = 70;
let isPass = (score >= 60);

console.log(`합격여부 : ${isPass}`);
