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

console.log(`my friends are ${informatie.friends[0]} and ${informatie.friends[1]}`);
