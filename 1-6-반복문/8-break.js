
for (let i = 1; i<=10; i ++){
  if(i ===5){    //i가 5가 되었을때 반복문 종료!
    break;
  }
  console.log(i);
}
console.log(`반복문 종료!`);

//중첩 반복문의 break

console.log('======================');

for(let i = 0; i < 3; i++){
  for(let j = 0; j < 2; j++){
  if(i === 1){
    break ;
  }
    console.log(`${i}, ${j}`);
    
  }
}





for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}