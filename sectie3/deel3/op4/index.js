const informatie = {
    firstName: 'Henk',
    lastName: 'de vries',
    age: 2021 - 1988,
    job: 'teacher',
    timeJob: 8,
    friends: ['koe', 'vos'],
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(`${information.timeJob}`);
