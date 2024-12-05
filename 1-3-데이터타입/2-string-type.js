


let myName = "김철수"; // 텍스트를 저장할때는 "" 사용할것
console.log(typeof myName); // 숫자를 ""로 감싸는경우엔 string으로 인식

myName ='박영희' // ''사용하는것이 더 좋음 (다른언어들이 ''주로사용)
console.log(typeof myName); // string으로 인식

myName = `둘리`; // ES6+ 문법 ``(백틱) 사용가능ㅇ하게됨
console.log(typeof myName); // string으로 인식

let htmlTag = `   
  <ul>
    <li>사과</li>
    <li>바나나</li>
  </ul>
`;
console.log(htmlTag);
// ``(백틱) 사용시 엔터나 띄어쓰기 탭을 작성한대로 출력해서 인식됨

// x월 x일은 xxx날입니다.
let month = 1;
let day = 1;
let anniversary = '신정';

let sentence =`${month}월 ${day}일은 ${anniversary}입니다`; 
console.log(sentence);
// 백틱사용하면 ${}안에 변수이름 입력해서 유기적으로 적용해서 출력됨
// 1월 1일은 신정입니다 출력
