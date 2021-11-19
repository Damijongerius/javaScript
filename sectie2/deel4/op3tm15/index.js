//opdracht3
const car = "Audi";

if(car == "Audi"){
    console.log("great!");
}else if(car == "Mercedes"){
    console.log("Bit great!");
}else if(car == "BMW"){
    console.log("hmmm.....");
}else if(car == "Opel"){
    console.log("OK?");
}else{
    console.log("Not so great!");
}

//opdracht4

if(car == "Audi" || "Porche"){
    console.log("great!");
}else if(car == "Mercedes"){
    console.log("Bit great!");
}else if(car == "BMW"){
    console.log("hmmm.....");
}else if(car == "Opel"){
    console.log("OK?");
}else{
    console.log("Not so great!");
}

//opdracht5

if(car == "Audi" || "Porche"){
    console.log("great!");
}else if(car == "Mercedes"){
    console.log("Bit great!");
}else if(car == "BMW"){
    console.log("hmmm.....");
}else if(car == "Opel"){
    console.log("OK?");
    console.log("Not so great!");
}else{
    console.log("Not so great!");
}

//opdracht6

const job = "Teacher";

switch(job){
    case("Developer"):
    console.log("LIKE!");
    break;
    case("Teacher"):
    console.log("Nice...");
    break;
    default:
    console.log("I don't know...");
}

//opdracht 7

switch(job){
    case("Developer"):
    case("Retired"):
    console.log("LIKE!");
    break;
    case("Teacher"):
    case("COnsultant"):
    console.log("Nice...");
    break;
    default:
    console.log("I don't know...");
}

//opdracht 8 
// met een if else statement omdat het is wel of niet

//opdracht9
const cart = 'audi';
if(cart === 'audi'){
    console.log("great!");
}else{
    console.log("meh")
}

//opdracht10

let sentence;

if(5 > 12){
    sentence = 'whieee';
}else{
    sentence = 'whaaa';
}
console.log(sentence);

//opdracht11

if(sentence = false){
    sentence = 'whieee';
}else{
    sentence = 'whaaa';
}
console.log(sentence);

//opdracht12

if(sentence = false){
    sentence = 'whieee';
}else{
    sentence = 'whaaa'
}
console.log(`Hello i shout out the sentence ${sentence} and i am ${sentence.length > 5 ? 'happy' : 'not so happy'}`)

//opdracht13

let city = 'Amsterdam';

city = ('Amsterdam') ? 'koetjekoe' : `Deze prachtige stad is het niet: ${city}`;


//opdracht14

city = ('Amsterdam') ? 'koetjekoe' : 'koetjekoe';

//opdracht 15

city = ('Amsterdam' && true) ? 'koetjekoe' : 'koetjeboeboe';