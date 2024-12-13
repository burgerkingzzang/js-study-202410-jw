
let i; // 전역 스코프 : 프로그램 전체에서 사용 가능한 변수
       // 블록밖에서 선언했기 때문에 모든곳에서 사용가능하지만 사용하기 좋진않음

// 블록 스코프 : 블록 안에서 let , const로 선언한 변수는 블록 밖에서 사라짐
for(let i = 0; i <3; i++){ 
  console.log(`i: ${i}`);

console.log(`outer i : ${i}`); //위의 for문에서 사용한 i는 밖에서 사용할수없음
}                              //ㅇ


let n = 'hello';
if(true){
  let n = 10;
  if(true){
    let n = 20;
    console.log(`inner n : ${n}`); //inner n : 20, 같은 영역 안의 변수n이 우선적용
    
  }  //end inner if
  console.log(`outer n : ${n}`); //outer n : 10
  
}console.log(n);  //end outer if


//지역 스코프 (local scope) : 함수 내에서 변수가 생성되고 소멸
function foo() {
  let x = '홍길동';
  console.log(`local x : ${x}`);  //local x : 홍길동
  return x;  //*
}
let x = foo();
console.log(`global x :${x}`);  //global x :홍길동

// 최대한 전역 스코프 사용을 자제
// 1. 변수 이름 충돌 문제
// 2. 전역변수는 프로그램 종료시 까지 메모리에 남아있으므로 비효율적
// 3. 스코프체인이 너무 길다.

