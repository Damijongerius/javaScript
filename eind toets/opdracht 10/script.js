let divs = [];

let temp;
let tempo;



document.getElementsByClassName("Create_elements")[0].onclick = Create;

function Create(){
    for(let i = 0; i<49; i++){

    
       let div = document.createElement('div');
       div.innerHTML = number();
       div.style.width = "13.7vw";
       div.style.height = "13.7vw";
       div.className = "divs"; 
       color(div);
       document.getElementsByClassName('element-box')[0].appendChild(div);
       divs[i] = div;
    }

    console.log(divs);
    

}

function color(div)
{
   a = Math.floor((Math.random() * 5) + 1);
    switch(a){
        case 1: div.style.backgroundColor =  'red';
        break;
        case 2: div.style.backgroundColor =  'green';
        break;
        case 3: div.style.backgroundColor =  'yellow';
        break;
        case 4: div.style.backgroundColor =  'purple';
        break;
        case 5: div.style.backgroundColor =  'blue';
        break;
        default:
            div.style.backgroundColor =  'pink';
    }
}

function number()
{
    return Math.floor((Math.random() * 1000) + 100);
}

