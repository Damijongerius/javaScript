let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];
let arrayFour = [];
 
for(let i = 0;i < 16; i++){
    arrayOne.push(i);
   arrayTwo.push(i*2);
   if(i%2 == 0){
       arrayThree.push(i);
       console.log(arrayThree[i])
   }else{
       arrayFour.push(i)
   }
   
}