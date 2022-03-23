let rolls=3;
let numbers= [0,0,0,0,0];
let reroll=[false,false,false,false,false];


function roll()
{
  if(rolls > 0)
  {
    console.log("lol1")
    rolls--;

    for(let i =0; i < 5; i++)
    {
      console.log("lol2");
      if(reroll[i] == false)
      {
        console.log("lol3");
      
        document.getElementsByClassName('dobbel')[i].innerHTML = `<img src="img/${amount}.png" alt="L">`
        numbers[i] = amount; 
      }
    }
    
  }
}