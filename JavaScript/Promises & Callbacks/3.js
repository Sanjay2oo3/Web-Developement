let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

function ageInDays(person, logResult){
    const fullName = person.firstName + " "+  person.lastName;
    const ageDays = person.age * 365;
    logResult(fullName, ageDays)
}

function logResult(fullName, ageDays){
    console.log(`The person's full name is ${fullName} and their age in days is ${ageDays}`)
}

ageInDays(person, logResult)