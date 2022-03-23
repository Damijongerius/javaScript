let input = ""
let selution;
New()

document.getElementsByClassName("check")[0].onclick  = function()
{
 input = document.getElementsByClassName('input_text')[0].value
if(input==="" || input==="there wassnt a valid answer"){
    document.getElementsByClassName('input_text')[0].value = input + "there wassnt a valid answer"
    document.getElementsByClassName('input_text')[0].style.color = "red"
}else if(input == selution){
    console.log("lmao");
}else{
    console.log("loser");
}
}

//setInterval(() => {
//    document.getElementsByClassName('input_text')[0].value = input + ""
//    document.getElementsByClassName('input_text')[0].style.color = "white"
//}, 3000);   

function New()
{
  let number1 = (Math.ceil(Math.random(1, 100)*100))
  let number2 = (Math.ceil(Math.random(1, number1)*100))
  let operator = (Math.ceil(Math.random(1, 4)*10))
  console.log
  switch(operator)
  {
   case 1:
    case 2:
       operator = "+";
       selution = number1 + number2
       break;
    case 3:
    case 4:
        operator = "-";       
        selution = number1 - number2
        break;
    case 5:
    case 6:
    case 7:
        operator = "/";
        selution = number1 / number2
        break;
    default:
        operator = "*";
        selution = number1 * number2
  }
   document.getElementsByClassName('operator')[0].innerHTML = operator;
   document.getElementsByClassName('number1')[0].innerHTML = number1;
   document.getElementsByClassName('number2')[0].innerHTML = number2;
   
   console.log(selution)
}

