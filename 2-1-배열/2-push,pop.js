
let petList = ['멍멍이', '야옹이', '짹짹이'];
console.log(petList);

//push(): 배열 맨 끝에 데이터 추가
petList.push('거북이','참새','호랑이'); 
console.log(petList);   //['멍멍이','야옹이','짹짹이','거북이','참새','호랑이'] 출력
console.log(petList.length);  //6출력

//pop(): 배열 맨 끝 데이터 삭제
petList.pop();
petList.pop();
petList.pop();
let x = petList.pop();
console.log(`x: ${x}`);  //x: 짹짹이 출력
console.log(petList);    //['멍멍이', '야옹이']


// shift(): 배열의 맨 첫데이터 삭제
// unshift(): 배열의 맨 첫데이터 추가
petList.unshift('뻘뻘이','호빵이');
console.log(petList);  //[ '뻘뻘이', '호빵이', '멍멍이', '야옹이' ] 출력
petList.shift();
console.log(petList);  //[ '호빵이', '멍멍이', '야옹이' ] 출력