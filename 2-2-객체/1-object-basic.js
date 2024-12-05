
// 우리집 강아지가 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

let dog1 = ['초코', 3, 30, 10, 1, false, true];

// 객체
let myDog1 = {  // 객체 
  name: '초코', // 프로퍼티 (속성) - 명사적 기능, 원하는 타입의 값들을 전부 넣을수 있다.
  age: 3,       // number type, boolea type, string type 등 여러가지 타입 및 데이터 입력 가능
  tall: 30,
  weight: 10,
  injection: false,   
  vegiterian: true,
  favorites: ['산책', '간식'] //배열도 사용 가능
};
console.log(typeof myDog1) // object 출력

let myDog2 = {
  name: '해피',
  age: 5,
  tall: 45,
  weight: 12,
  injection: true,
  vegiterian: false
};

let myCat = {
  name: '냐옹',
  age: 4,
  injection: true,
  favorites: ['낮잠', '털뭉치'],
  'my hobby': '시비걸기'  //key 설정할때 ''사용시 띄어쓰기 가능
};

// 객체 프로퍼티 접근하기
console.log(myDog1.name);  // 초코 출력
console.log(myCat.name);   // 냐옹 출력
console.log(myDog2.age);   // 5 출력

console.log(typeof myCat);  // object
console.log(typeof myCat.name);  // string
console.log(typeof myDog1.age);  // number
console.log(typeof myCat.favorites);  // object로 출력되지만 array!!
console.log(typeof myCat.favorites[1]);  // string  (배열안의 요소)


console.log(myDog2.age++);  // 4 + 1 --> 5 출력
console.log(myDog1.favorites.push('공놀이'));  //배열에 공놀이 추가 (2 + 1), 3 출력

myCat.favorites.push(500);
myCat.favorites[2]++; 
console.log(myCat);   //favorites: [ '낮잠', '털뭉치', 501 ], 출력


// 따옴표로 묶여있는 프로퍼티에 접근
console.log(myCat['my hobby']);   //시비걸기 
console.log(myDog1['name']);      //초코




