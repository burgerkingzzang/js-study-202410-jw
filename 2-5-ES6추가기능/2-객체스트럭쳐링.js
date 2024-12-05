

const student = {
  stuName: '뽀로로',
  age: 5,
  birthDay : '2020-01-03'
};

// const name = student.stuName;
// const age = student.age;
// const birthDay = student.birthDay;

const {stuName: name, age, birthDay : birth } = student;  //우측에 객체 좌측에 키값

console.log(`stuName :${name}`);  //stuName :뽀로로
console.log(`age :${age}`);  //age :5
console.log(`birthday:${birth}`);  //birthday:2020-01-03

//=============================================================================================

const divStyle = {
 'font-size': '16px',
 'boder-radius': '50%'
};
console.log(divStyle['font-size']);


const{'font-size':fontSize , "boder-radius":bddr} = divStyle;
console.log(fontSize);
console.log(bddr);

function myPetinfo({name, age}){
  
  console.log(`우리 애완동물 이름은 ${name} 입니다`);
  console.log(`우리 애완동물 나이은 ${age} 입니다`);
}

const dog ={
  name: '초코',
   age: 3,
   kind: '진돗개',
   injection: true,
  };

const cat ={name: '나비', age: 2};


myPetinfo(dog);
myPetinfo(cat);

console.log('===================');

const{kind, injection , ...dogRest}= dog;
console.log(dog);


//스프레드
// cat의 원본은 유지하면서 새 객체에 injection프로퍼티를 추가하고 싶어

const copyCat = {...cat};

copyCat.injection =false;

console.log(copyCat);
console.log(cat);











const person = { name: '홍길동', age: 30 };
const updatedPerson = { ...person, job: '개발자' };

console.log(updatedPerson); // 출력: { name: '홍길동', age: 30, job: '개발자' }
//{ ...person, job: '개발자' }를 통해 person 객체를 복사하고, 추가로 job 프로퍼티를 포함한 새로운 객체를 만듭니다.