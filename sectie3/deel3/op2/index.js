const informatie = {
    firstName: 'Henk',
    lastName: 'de vries',
    age: 2021 - 1988,
    job: 'teacher',
    friends: ['koe', 'vos'],
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(`my job is being a ${informatie.job} and I am ${informatie.age} years old`);
