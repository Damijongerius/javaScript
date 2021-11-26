const nameCheck = (name) => {
  switch(name){
    case'jorn':
    return 'great';
    default:
      return 'okish'
  }
}
const money = money => money *2;

const sentence = (name,salary) => {
  const wordOne = nameCheck(name);
  const wordTwo = money(salary);
  console.log(`The name is ${name} and i 'am ${wordOne} and my salary is ${wordTwo} and it just got duibled`); 
}

sentence('frits', 3000);