

let foodList = ['닭꼬치', '볶음밥', '족발', '파스타'];

//indexOf(): 배열의 특정 요소가 몇 번 인덱스에 있는지 알려줌, 요소가 없으면 -1 반환
let idx = foodList.indexOf('볶음밥');
console.log(idx);       // 1 출력

//음식중에 족발을 찾아서 보쌈으로 수정
foodList[foodList.indexOf('족발')] = '보쌈';
console.log(foodList);      //['닭꼬치', '볶음밥', '보쌈', '파스타'] 출력


// includes() : 배열에 특정 요소가 있는지 확인, true 또는 false로 반환
let flag = foodList.includes('파스타');
console.log(flag);      // true 출력

if (foodList.includes('파스타')){
}   // 음식 목록에 파스타가 있으면 
if (!foodList.includes('파스타')){
}   // 음식 목록에 파스타가 없으면

//======================================================================================

//slice() : 배열의 일부를 추출하여 새로운 배열을 반환, 원본 배열은 변경되지 않는다.
let numbers = [0 , 1 , 2 , 3 , 4 , 5 , 6];

let slicedNumbers = numbers.slice(1, 3);    //1번idx부터 3번idx 미만까지 타겟팅 
console.log('slicedNumbers', slicedNumbers);    //slicedNumbers [1, 2 ] 출력

let copy1 = numbers.slice(3) //end index 생략시 끝까지 분할
console.log(copy1); // [ 3, 4, 5, 6 ] 출력

let copy2 = numbers.slice(); //둘다 생략시 처음부터 끝까지 복제
console.log(copy2);  //[0, 1, 2, 3, 4, 5, 6] 출력
 

//splice() : 배열의 요소를 추가 or 삭제 (중간에서 작업 가능)
//===== splice(삭제시작idx, 삭제할idx갯수) =====

// 배열 원본이 손상됨  - 안전한 작업을 위해서는 복사후 작업(slice -> splice)
console.log(foodList);  //[ '닭꼬치', '볶음밥', '보쌈', '파스타' ]
foodList.splice(1,2)  // 1idx 부터 2idx까지 삭제
console.log(foodList);  //[ '닭꼬치', '파스타' ] 출력

foodList.splice(1,1, '마라탕')  // 1idx 지우고, 1idx자리에 '마라탕' 추가
console.log(foodList);  //[ '닭꼬치', '마라탕' ] 출력 (파스타->마라탕)

//중간 삽입 기능
foodList.splice(1, 0 ,'짜장면')  //1idx 부터 시작해서 0개삭제하고 '짜장면' 추가
console.log(foodList);  //[ '닭꼬치', '짜장면', '마라탕' ] 출력
