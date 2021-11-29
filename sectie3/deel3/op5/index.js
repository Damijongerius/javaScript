const objectOne = {
    firstName: 'piet',
    lastName: 'janssens',
    job: 'Fighter',
    getJobAndName: function(name, job){
        return `My name is ${name} and I am a ${job}.`;
    }
}
console.log(objectOne['getJobAndName'](objectOne.firstName, objectOne.job));