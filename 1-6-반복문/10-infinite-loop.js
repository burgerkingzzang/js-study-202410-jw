
// 무한 루프
// 영원히 끝나지 안는 반복문 - 악성코드
// 정확한 반복횟수를 사전에 파악 불가능하여
// 일단 무한으로 돌려 놓고 탈출조건을 설정

let n = 1;
white (true) {
  if (n > 50) break;  // 항상 코드연산이 끝나는 코드가 있어야함.
  console.log(n);
  n++;
}


let n = prompt('정수:');

while (true){
  if(n ==='그만' )break;
  if(n ==='ㅋㅋㅋ'){
    alert('뭘 웃어')
    continue;
  }
  alert(`당신이 입력한 숫자 ${n}`);
   
}
alert('안녕히 계세요!');