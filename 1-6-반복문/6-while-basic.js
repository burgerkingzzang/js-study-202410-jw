let i = 1;
while(i<=5){
  console.log(`${i}번 학생 안녕하세요`);
  i++
}

console.log('============================');



// 10안에 있는 2의 배수를 가로로 출력하기
let result = '';
let j = 2;
while(j <= 10) {
  result += `${j} `;
  j += 2;
}
console.log(result);

// 1~50 사이 6의 배수 출력하기
console.log('==================');

let z = 1;
while (z <= 50) { // i는 1부터 50까지 1씩 증가하면서 반복
  if (z % 6 === 0) { // 반복하면서 6의 배수인지 확인한다
    console.log(`${z}`);  // 6의 배수라면 출력한다
  }
  z++;
}

// 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
console.log('==================');
let x = 1;
while ( x <= 100) {
  if (x % 7 === 0 && x % 14 !== 0) {
    console.log(x);
  } x++
}

// 1~7777 안에 있는 3의 배수 개수 알아내기
console.log('==================');

let count = 0;
let y = 1;
while (y <= 7777) {
  if (y % 3 === 0) {
    // 3의 배수일 경우 실행될 코드
    count++;
  }y++;
}
console.log(`3의 배수의 총 개수: ${count}개`);



//while 문 구조 
while (조건) {
  // 반복할 코드
}
// 조건: true인 동안 반복을 계속합니다. 조건이 false가 되면 반복을 종료



let count = 0;    // 초기 변수세팅

while (count < 5) {       // 조건식
  console.log('반복 횟수:', count);
  count++;        // 증감식
}




//======================= 무한 반복 방지 =========================
//while 문은 조건이 항상 true일 경우 무한 반복에 빠질 수 있습니다. 
//조건이 false가 될 수 있도록 반복문 안에서 조건을 변경하는 코드가 필요합니다.

let i = 0;

while (true) {
  console.log(i);
  if (i >= 3) break; // 조건이 만족되면 반복 종료
  i++;
}