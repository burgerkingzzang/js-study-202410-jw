
for (let i = 1; i<=10; i ++ ){
  if(i % 2 === 0) continue;{      //continue = skip으로 생각하면 됨
  console.log(i);                 //1부터 10중에 짝수는 제외하고 출력
}
}
console.log('반복문 종료!');
