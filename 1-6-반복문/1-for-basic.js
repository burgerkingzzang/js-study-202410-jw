for (초기화; 조건; 증감) {
  반복할 코드
}


for(let n = 1;n <= 50 ; n++){              // for (초기 변수 세팅 ; 조건식; 변수증감식){
  console.log(`${n}번 학생 안녕하세요!`);     // 반복할코드  }     
}
//============================================================================================
for (let i = 0; i < 10 ; i++) {     //i를 0으로 초기화하고, i < 5 조건이 true인 동안 반복합니다
 console.log('안녕');               //반복이 실행될 때마다 i가 1씩 증가
 console.log('잘가');               //i 값이 5가 되면 조건이 false가 되어 반복이 종료
}
// 구구단 2단 출력
let level = 99;
for(let line = 1 ; line <= 9; line ++){

  console.log(`${level} x ${line} = ${level * line}`);
}
console.log('반복문 종료');

console.log('====================');

// 1 ~ 10까지의 누적합 == 55

let total = 0;

for(let n = 1; n  <= 10 ; n++)
  total += n

console.log(`1~10까지의 총합: ${total}`);


console.log('===============================');
// 5부터 0까지 카운트다운 
for (let i = 5 ; i > 0; i--){
  console.log(`${i}!!`); 
}               // 5!! 4!! 3!! 2!! 1!! 0!! 출력
