function grootste(getal1,getal2){
   if(getal1 >= getal2){
     return getal1;
   }else{
     return getal2;
   }
}

const appel = grootste(Math.random(100)*10,Math.random(100)*10);

console.log(appel)