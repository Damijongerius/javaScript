const leerling = {
  age: 15,
  name: 'dami',
  birthYear: '06-09-2006',
  job: 'none',
  place: 'swifterbant',
}

const docent = {
    age: 'idk',
    name: 'rick',
    birthYear: 'idk',
    job: 'teacher',
    place: 'hilversum',
}

function age(){
    console.log(docent.age, leerling.age);
}

function ageV(){
    if(docent.age >= leerling.age){
        console.log(docent.age)
    }else{
        console.log(leerling.age);
    }
}

function living(){
}