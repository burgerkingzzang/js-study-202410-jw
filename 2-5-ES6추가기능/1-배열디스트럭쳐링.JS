
// 디스트럭쳐링 (destructuring) : 구조 분해 할당

const userNames = ['김철수' , '홍길동' , '고구마'];

// 배열에 들어 있는 데이터를 다시 각각의 변수에 저장하고 싶을때 index로 사용할때는 구분이 잘 안됨 
// const kim = userNames[0];
// const hong = userNames[1];
// const go = userNames[2];

//디스트럭쳐링 사용 예시
const[kim,hong,go] = userNames;  //왼쪽 대괄호에 변수들 나열, 오른쪽에 배열의 이름 - 해체
console.log(`kim: ${kim}, hong: ${hong}, go: ${go}`);  // kim: 김철수, hong: 홍길동, go: 고구마

//나는 0번인덱스와 2번만 추출하고 싶어 1번은 안할래
const [kk, , gg]= userNames;
console.log(`kk: ${kk} , gg:${gg}`);  //kk: 김철수 , gg:고구마

const exArr =[[10, 20],() =>{}];  //0번인덱스에 배열이 있고 1번인덱스에 함수가 있는 경우 
const[numbers,foo] = exArr;  //exArr을 해체 
numbers[1];
foo();

let first = 10 , second = 20;
console.log(`first: ${first} second : ${second}`);  //first: 10 second : 20


//맨 앞 2개의 숫자만 각각의 변수에 저장하고 나머지는 다시한번 배열로 묶어서 보관하고 싶다.
const nums = [1,3,5,7,9,11];

// const numsCopy = nums.slice();
// const one = nums.shift();
// const three =nums.shift();

// console.log(`one :${one}`);
// console.log(`three:${three}`);
// console.log(`others:`,numsCopy);

const[one, three , ...numsCopy]  =nums
console.log(nums);


console.log('====================');








// 스프레드를 통한 배열 합치기
const foods = ['햄버거' , '콜라' , '감자튀김'];
const fruits = ['오렌지' , '자몽' , '레몬'];
const newFoods = [...foods, ...fruits];

console.log(newFoods);  //[ '햄버거', '콜라', '감자튀김', '오렌지', '자몽', '레몬' ]

//배열 복사
const newFruits = [...fruits];
console.log(newFruits);  //[ '오렌지', '자몽', '레몬' ]

//배열에 내용 추가
const myFavoriteFoods = ['족발', ...foods, '닭강정' ,'피자'];
console.log(myFavoriteFoods);  //[ '족발', '햄버거', '콜라', '감자튀김', '닭강정', '피자' ]




const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // 출력: [1, 2, 3, 4, 5]
//[...numbers, 4, 5]를 통해 numbers 배열을 복사하면서 새로운 요소 4와 5를 추가








//객체 디스트럭처링
const person = { name: '홍길동', age: 30 };
const { name, age } = person;

console.log(name); // 출력: '홍길동'
console.log(age);  // 출력: 30
//객체 person의 name과 age 프로퍼티가 각각 name과 age 변수에 할당





const fruits = ['사과', '바나나', '오렌지'];
const [first, second] = fruits;

console.log(first);  // 출력: '사과'
console.log(second); // 출력: '바나나'
//first 변수에는 배열의 첫 번째 요소가, second 변수에는 두 번째 요소가 할당