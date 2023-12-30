function student(name, age, grade){
    this.name=name, 
    this.age=age,
    this.grade=grade   
}

function Updategrade(newGrade){
    details.grade=newGrade
}

const details = new student('sanjay', 20, 'A')

console.log(details)

Updategrade('B')
console.log(details)

