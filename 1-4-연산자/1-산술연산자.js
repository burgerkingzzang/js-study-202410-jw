
// js는 나눗셈을 수행할 대 실수 나눗셈을 수행(소수점이 도출됨) 다른언어는 정수로 출력
console.log(27/5); //5.4 출력

//나눗셈의 몫만 구하기
console.log(Math.floor(27/5)); //5출력

// 나머지 연산
console.log(27 % 5); //2출력

// 뒤에 숫자가 더 크면 앞의 숫자가 그대로 나머지 몫음 0

console.log(8%10);  //8출력
console.log(10%0);  //NaN - 못나눔

//제곱 연산(ES6+)
console.log(2 ** 4);  //16출력

console.log('===============');

//증감 연산자
let x = 3;
x++;  //숫자 1 증가
++x;  //위와 같은 의미
x--;  //숫자 1 감소
--x;
console.log(`x: ${x}`); // x=3 (+1 2번, -1 2번)

// 전위 연산, 후위 연산
let n1 = 10;
let n2 = n1++; 
console.log(`n1: ${n1}, n2: ${n2}`); // n1=11, n2=10
// ++이 뒤에 있을 경우 =을 먼저 연산후 ++해서 n2=10로 출력

let n3 = 10;
let n4 = ++n3;
console.log(`n3: ${n3}, n4: ${n4}`); // n3: 11, n4: 11
// ++이 앞에 있을경우 ++을 먼저 연산해서 n2=11 로 출력

let myNum = 5;
myNum += 3;  // myNum = myNum + 3; //8
myNum -= 6;  // myNum = myNum -6  //2
myNum *= 5;  //10
myNum %= 4;  //2 
myNum **=  3;  //8
console.log(`mynum: ${myNum}`);

