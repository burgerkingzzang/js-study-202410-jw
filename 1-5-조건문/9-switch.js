// ========= switch문 구조 =========//
switch (표현식) {
  case 값1:
    // 값1에 해당하는 코드
    break;
  case 값2:
    // 값2에 해당하는 코드
    break;
  ...
  default:
    // 어떤 값에도 해당하지 않을 때 실행되는 코드
}
//=============================================================
let day = 'Monday'

switch (day){ 
  case 'Monday': //Monday가 해당되는 case가 없어서 월요일case로 이동
  case '월요일':
    console.log('새로운 한주가 시작되었습니다');
    break;
  case '화요일':
    console.log('화이팅 오늘도 좋은 하루 보내세요');
    break;
  case '수요일':
    console.log('주중의 절반을 넘었어요!');
    break;
  case '목요일':
    console.log('거의 주말이 다가옵니다');
    break;
  case '금요일':
    console.log('마지막 하루 잘 마무리 하세요!');
    break;
  default :
  console.log('즐거운 주말 보내세요!');
}  // 새로운 한주가 시작되었습니다. 출력 


let day = '월요일';

switch (day) {
  case '월요일':
    console.log('새로운 한 주가 시작되었습니다!');
    break;
  case '수요일':
    console.log('벌써 주중이네요!');
    break;
  case '금요일':
    console.log('주말이 다가오고 있어요!');
    break;
  default:
    console.log('즐거운 하루 보내세요!');
}