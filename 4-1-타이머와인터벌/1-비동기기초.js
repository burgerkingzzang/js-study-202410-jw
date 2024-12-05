


// 동기 : 코드가 순차적으로 실행된다.
// 비동기 : 코드가 순서없이 실행된다.

//setTimeout : 비동기타이머 - 코드를 비동기로 동시에 실행시킴
console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');  //first -> third -> second 출력 비순차적


setTimeout(() => {
  console.log('오늘 할 일은 뭘까요!');
}, 3000);  //지연시간 (3000ms)
console.log('오늘은 월급루팡을 할게요!');


// setTimeout(() => {
  
//   for(let i = 0; i <3 ; i ++){  //for문 세바퀴 실행
//     console.log(`hello${i}`);
//   }
// }, 100);  //지연시간 (100ms)
 
// setTimeout(() =>{
// for(let i = 0; i < 4; i++){  //for문 네바퀴 실행
//   console.log(`bye${i}`);
//   }
// },0);  //대기시간 없이 실행