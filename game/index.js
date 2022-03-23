let numbs = [0,0,0,0,0];
let oldNumbs =[false,false,false,false,false];
let score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let score3 = [3,6,9,12,15,18];
let score2 = [2,4,6,8,10,12];
let score4 = [ 4,8,12,16,20,24];
let score5 = [5,10,15,20,25,30];
let count = [0,0,0,0,0,0];
let saveScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let oldScore = [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let rolls = 3;

let numb;
let gt = 0;
let kt = 0;

document.getElementsByClassName("roll")[0].onclick = rolling; 

function rolling(){

    if(rolls > 0){
        rolls--
        score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            gt = 0;
            kt = 0;
        
        for(let i=0;i < 5; i++){
            if(oldNumbs[i] == false || numbs[i] == 0){
            numbs[i]= Math.floor(Math.random() * 6+1);
            switch(numbs[i]){
                case 1:
                    document.getElementsByClassName(`steen${i+1}`)[0].innerHTML = '<div></div><div></div><div></div><div></div><div><div class="dot"></div></div>';
                    break;
                case 2:
                    document.getElementsByClassName(`steen${i+1}`)[0].innerHTML = '<div></div><div></div><div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div>';
                    break;
                case 3:
                    document.getElementsByClassName(`steen${i+1}`)[0].innerHTML = '<div></div><div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div>';
                    break;
                case 4:
                    document.getElementsByClassName(`steen${i+1}`)[0].innerHTML = '<div><div class="dot"></div></div><div></div><div><div class="dot"></div></div><div></div><div></div><div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div>';
                    break;
                case 5:
                    document.getElementsByClassName(`steen${i+1}`)[0].innerHTML = '<div><div class="dot"></div></div><div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div>';
                    break;
                case 6:
                    document.getElementsByClassName(`steen${i+1}`)[0].innerHTML = '<div><div class="dot"></div></div><div></div><div><div class="dot"></div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div><div><div class="dot"></div></div><div></div><div><div class="dot"></div></div>';
                    break;
                } 
                
            
            }
            eentallen(i);
            threeofakind(i);
            carre(i);
            topscore(i);
            straten(i);
            dom(i);
            total(i);
           // console.log(score)
           // console.log(numbs)
           // console.log();
        } 
    }



function straten(i)
{
    for(let i = 0;i <= 6;i++){ 
        count[i] = 0
      } 
      for(let i = 0;i <= 5;i++){
        for(let j = 1;j <= 6;j++){
          if(numbs[i] == j){
            count[j - 1] += 1
          }
        }
      }
      gt = 0;
      kt = 0;
      for(let h = 0;h < 6;h++){
          if(count[h] == 1){
              gt++;
              kt++;
              if(gt == 5 )score[10] = 40;
              if(kt == 4 )score[9] = 30;
          }else
          {
              gt--;
              kt--;
          }
      }
}
}

function carre(i)
{
    for(let k=0; k<6; k++)
    if(score4[k] == score[k]){
        score[7] = 30;
    }
}

function topscore(i)
{
    for(let h=0; h<6; h++)
    if(score5[h] == score[h]){
        score[11] = 50;
    }
}

function threeofakind(i)
{
    for(let j=0; j<6; j++)
    if(score3[j] == score[j]){
        score[6] = score[j];
        console.log('run');

        for(let u=0; u<6; u++){
        if(score2[u] == score[u] && score[u] != 0 ){
            score[8] = 25;
        }
     }    
    }
    
}

function eentallen(i)
{
    if(numbs[i] == 1 ){
        score[0]++
    }
    if(numbs[i] == 2 ){
        score[1] += 2
    }
    if(numbs[i] == 3 ){
        score[2] += 3
    }
    if(numbs[i] == 4 ){
        score[3] += 4
    }
    if(numbs[i] == 5 ){
        score[4] += 5
    }
    if(numbs[i] == 6 ){
        score[5] += 6
    }
}

function total()
{
    score[13] = 0;
    for(let w=0; w<13; w++){
        if(oldScore[w] == true){
            score[13] += saveScore[w];
        }
    }

}

function dom(i) 
{
    document.getElementsByClassName('numb1')[0].innerHTML = score[0] + "||" + saveScore[0];
    document.getElementsByClassName('numb2')[0].innerHTML = score[1] + "||" + saveScore[1];
    document.getElementsByClassName('numb3')[0].innerHTML = score[2] + "||" + saveScore[2];
    document.getElementsByClassName('numb4')[0].innerHTML = score[3] + "||" + saveScore[3];
    document.getElementsByClassName('numb5')[0].innerHTML = score[4] + "||" + saveScore[4];
    document.getElementsByClassName('numb6')[0].innerHTML = score[5] + "||" + saveScore[5];
    document.getElementsByClassName('numb7')[0].innerHTML = score[6] + "||" + saveScore[6];
    document.getElementsByClassName('numb8')[0].innerHTML = score[7] + "||" + saveScore[7];
    document.getElementsByClassName('numb9')[0].innerHTML = score[8] + "||" + saveScore[8];
    document.getElementsByClassName('numb10')[0].innerHTML = score[9] + "||" + saveScore[9];
    document.getElementsByClassName('numb11')[0].innerHTML = score[10] + "||" + saveScore[10];
    document.getElementsByClassName('numb12')[0].innerHTML = score[11] + "||" + saveScore[11];
    document.getElementsByClassName('numb13')[0].innerHTML = score[12] + "||" + saveScore[12];
    document.getElementsByClassName('numb14')[0].innerHTML = score[13] ;
}

document.getElementsByClassName("steen1")[0].onclick = function steenSwitch()
{ if(oldNumbs[0] == false)
    {
        oldNumbs[0] = true;
         document.getElementsByClassName('steen1')[0].style.backgroundColor = "rgba(255,0,0,0.2)";
    }else{
        oldNumbs[0] = false 
        document.getElementsByClassName('steen1')[0].style.backgroundColor = "";
    }
}  

document.getElementsByClassName("steen2")[0].onclick = function steenSwitch()
{ if(oldNumbs[1] == false)
    {
        oldNumbs[1] = true
        document.getElementsByClassName('steen2')[0].style.backgroundColor = "rgba(255,0,0,0.2)";
    }else{
        oldNumbs[1] = false 
        document.getElementsByClassName('steen2')[0].style.backgroundColor = "";
    }
}  
document.getElementsByClassName("steen3")[0].onclick = function steenSwitch()
{ if(oldNumbs[2] == false)
    {
        oldNumbs[2] = true
        document.getElementsByClassName('steen3')[0].style.backgroundColor = "rgba(255,0,0,0.2)";
    }else{
        oldNumbs[2] = false 
        document.getElementsByClassName('steen3')[0].style.backgroundColor = "";
    }
} 

document.getElementsByClassName("steen4")[0].onclick = function steenSwitch()
{ if(oldNumbs[3] == false)
    {
        oldNumbs[3] = true
        document.getElementsByClassName('steen4')[0].style.backgroundColor = "rgba(255,0,0,0.2)";
    }else{
        oldNumbs[3] = false 
        document.getElementsByClassName('steen4')[0].style.backgroundColor = "";
    }
}  
document.getElementsByClassName("steen5")[0].onclick = function steenSwitch()
{ if(oldNumbs[4] == false)
    {
        oldNumbs[4] = true
        document.getElementsByClassName('steen5')[0].style.backgroundColor = "rgba(255,0,0,0.2)";
    }else{
        oldNumbs[4] = false
        document.getElementsByClassName('steen5')[0].style.backgroundColor = ""; 
    }
} 

function chosen()
{
    rolls = 3;
    rolling();
}

document.getElementsByClassName("numb1")[0].onclick = function steenSwitch()
{ if(oldScore[0] == false)
    {
        saveScore[0] = score[0]; 
        oldScore[0] = true;
        chosen()
         document.getElementsByClassName('numb1')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb2")[0].onclick = function steenSwitch()
{ if(oldScore[1] == false)
    {
        saveScore[1] = score[1]; 
        oldScore[1] = true;
        chosen()
         document.getElementsByClassName('numb2')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb3")[0].onclick = function steenSwitch()
{ if(oldScore[2] == false)
    {
        saveScore[2] = score[2]; 
        oldScore[2] = true;
        chosen()
         document.getElementsByClassName('numb3')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb4")[0].onclick = function steenSwitch()
{ if(oldScore[3] == false)
    {
        saveScore[3] = score[3]; 
        oldScore[3] = true;
        chosen()
         document.getElementsByClassName('numb4')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb5")[0].onclick = function steenSwitch()
{ if(oldScore[4] == false)
    {
        saveScore[4] = score[4]; 
        oldScore[4] = true;
        chosen()
         document.getElementsByClassName('numb5')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb6")[0].onclick = function steenSwitch()
{ if(oldScore[5] == false)
    {
        saveScore[5] = score[5]; 
        oldScore[5] = true;
        chosen()
         document.getElementsByClassName('numb6')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb7")[0].onclick = function steenSwitch()
{ if(oldScore[6] == false)
    {
        saveScore[6] = score[6]; 
        oldScore[6] = true;
        chosen()
         document.getElementsByClassName('numb7')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb8")[0].onclick = function steenSwitch()
{ if(oldScore[7] == false)
    {
        saveScore[7] = score[7]; 
        oldScore[7] = true;
        chosen()
         document.getElementsByClassName('numb8')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}

document.getElementsByClassName("numb9")[0].onclick = function steenSwitch()
{ if(oldScore[8] == false)
    {
        saveScore[8] = score[8]; 
        oldScore[8] = true;
        chosen()
         document.getElementsByClassName('numb9')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb10")[0].onclick = function steenSwitch()
{ if(oldScore[9] == false)
    {
        saveScore[9] = score[9]; 
        oldScore[9] = true;
        chosen()
         document.getElementsByClassName('numb10')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb11")[0].onclick = function steenSwitch()
{ if(oldScore[10] == false)
    {
        saveScore[10] = score[10]; 
        oldScore[10] = true;
        chosen()
         document.getElementsByClassName('numb11')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb12")[0].onclick = function steenSwitch()
{ if(oldScore[11] == false)
    {
        saveScore[11] = score[11]; 
        oldScore[11] = true;
        chosen()
         document.getElementsByClassName('numb12')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}
document.getElementsByClassName("numb13")[0].onclick = function steenSwitch()
{ if(oldScore[12] == false)
    {
        saveScore[12] = score[12]; 
        oldScore[12] = true;
        chosen()
         document.getElementsByClassName('numb13')[0].style.backgroundColor = "rgba(0,255,0,0.2)";
    }
}



