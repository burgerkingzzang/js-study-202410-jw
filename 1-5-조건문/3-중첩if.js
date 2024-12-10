
// let height = 135;
// let age = 8;

let height = +prompt('키가 몇cm입니까?');
//키가 140이상, 나이가 7살 이상인 경우 놀이기구 탑승여부 출력

if (height >= 140){    //키가 안될경우 나이는 따질필요도 없어서
  let age = +prompt('나이가 몇살입니까')
  if (age >=7) {    //키를 먼저 확인한 후 그 뒤 나이 확인
    alert('탑승가능'); }
    else{
    alert('나이때문에 탑승 불가능'); }
}else{  // 키가 모자라면 바로 else로 이동 
  alert('키때문에 탑승 불가능');}




  