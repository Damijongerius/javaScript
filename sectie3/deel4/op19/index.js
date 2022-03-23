const year = 2021;
const birthYears = [1988, 1982, 1922, 1990, 2000, 2020, 2033, 2001];
const birthYear = [];

for(let i = 0;i < birthYears.length; i++){
    birthYear.push(year-birthYears[i]);
}