function school (age, opleiding){
  if(age >= 10 && opleiding != basisschool){
    return true;
  }else{
    return false;
  }
}

const appel = school(15, mbo);