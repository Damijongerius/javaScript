function doMath(x){
  const numberOne = x *3;
  doMath2(20);
  return numberOne
}

function doMath2(y){
  const numberTwo = y *3;
  return numberTwo;
}

function doMath3(){
  const answer = numberOne + numberTwo;
  doMath3();
  return answer
}
doMath(234)
console.log(answer)