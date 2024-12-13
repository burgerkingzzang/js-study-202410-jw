
/*
console.log('김철수님 안녕하세요!');
console.log('오늘도 즐거운 하루 되세요');

*/

//함수 : 코드의 모듈화와 재사용성을 높이기 위해 일반화(정규화) 하는 것

// 함수 정의 (define) - function 키워드로 시작 
function sayHello(x){    //함수 이름은 동사형으로 지정해서 행동표현을 암시
  console.log(`${x}님 hello`);        
  console.log('오늘도 즐거운 하루 되세요!');
}
function makeLine(){
  console.log('===============================');
}
//함수는 정의만 해서는 실행되지 않고, 정의한 것을 호출(call)할 때 실행된다!!
sayHello('길동이');   //호출할 때는 함수이름만 입력 괄호안에 변수값 입력
makeLine();           // ======================= 출력
sayHello('짹짹이')
makeLine();