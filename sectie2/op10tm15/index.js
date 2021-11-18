//opdracht 10

const sofie = [9.4 , 3.8 , 2.7 , 6.7 ,8.9];
const sarah = [7.7 , 7.6 , 7.3 , 5.8 , 6.9];

let length = 5;
let gemiddelde = 0;


for(let i = 0; i < length; i++){
   gemiddelde += sofie[i];
}

console.log("sofie haar gemiddelde voor de reken toets is "+ gemiddelde/5)

//opdracht 11
console.log("sofie haar gemiddelde voor de reken toets is "+ (gemiddelde+8.9)/6);

//opdracht 12

let Gemiddelde = 0;

for(let i = 0; i < length; i++){
   Gemiddelde += sarah[i];
}

console.log("sarah haar gemiddelde voor de reken toets is "+ Gemiddelde/5)

//opdracht 13
let Hoogste = 0;
let Naam = "appel"

for(let t = 0; t < 100; t++){
   if(sofie[t] >= sarah[t]){
       if(sofie[t] >= Hoogste){
           Hoogste = sofie[t];
           Naam = "sofie"
       }
   }else if(sarah[t] >= Hoogste){
       Hoogste = sarah[t]
   }
}

console.log(Hoogste+ " " + Naam);

// opdracht 14



