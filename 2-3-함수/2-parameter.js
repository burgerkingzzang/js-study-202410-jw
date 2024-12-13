




// 매개 변수(parameter) : 함수가 실행할 때 외부에서 전달받는 값

//언어를 알려주면 그 언어로 인사해주는 함수
function greet(language = '한국어') { //기본값을 한국어로 지정헤사 아무것도 입력하지 않았을때 한국어 출력됨

  console.log(`lang : ${language}`);
  
  switch (language) {
    case "한국어":
      console.log("안녕하세요");
      break;
    case "영어":
      console.log("hello");
      break;
    case "일본어":
      console.log("콘니치와");
      break;
    default:    //아무곳에도 해당되지 않는 경우 default 사용
      console.log("우가우가~!");
  }
}

// 함수에 전달하는 값 : 인수(argument)
greet('한국어');  //인수 : '한국어'  >  안녕하세요 출력 
greet();          //아무것도 전달하지 않았을때 기본값 한국어 출력
greet('힌두어');  //인수 : '힌두어'  >  우가우가 출력

console.log('=========================');

// x ~ y 사이의 랜덤정수를 생성
function makeRandomInteger(x, y){
  let rn = Math.floor(Math.random() * (y -x + 1)) + x
  console.log(`랜덤정수: ${rn}`);
  return rn;  //함수 안의 변수는 함수 안에서만 유효하기 때문에 변수를 밖으로 꺼내올때는 return 사용
}
//호출
makeRandomInteger(1, 1000);  //랜덤정수y에서 x사이의 랜덤정수 출력

let rn = makeRandomInteger(1, 3)  //함수 밖에서 변수 재지정
if (rn === 1) {   //랜덤정수가 1일때 '랜덤정수 1입니다' 출력
  console.log('랜덤정수 1입니다');
}

// 매개변수 없는 함수 항상 일정한값을 도출 ex) f(x) = 2
function infiniteHello() {   //()안에 아무것도 입력 안하고 함수 생성시 호출할때도 입력 안하고 호출
  for(let i = 0; i< 5; i++)
  console.log('hello');
}
for(let i = 0; i< 10; i++){  //infinitehello함수를 5번 반복해서 hello 50번 출력 
infiniteHello();
}