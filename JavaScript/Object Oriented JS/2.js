class Admission{
    constructor(){
        this.listStudent = [];
    }

    enrollStudent(student){
        this.listStudent.push(student);
        console.log(`${student.name} has enrolled`)
    }

    assignCourse(student, course){
        student.enrollCourse(course)
        console.log(`${student.name} has enrolled in ${student.course}`)
    }

    showEnrolledStudents(){
        console.log("Enrolled Students:")
        this.listStudent.map((std)=>{
            console.log(`-${std.name} (${std.email})`)
        })
    } 

}

class Student{
    constructor(name , email){
        this.name = name;
        this.email = email;
        this.course = [];
    }
    enrollCourse(course){
        this.course.push(course)
    }
    showCourses(){
        console.log(`${Student.name} enrolled courses : ${this.course}`)
    }
}


const admissionOffice = new Admission();

const student1 = new Student("Sanjay", "sanjay.temp@gmail.com")
const student2 = new Student("Shiv", "shiv.temp@gmail.com")

admissionOffice.enrollStudent(student1)
admissionOffice.enrollStudent(student2)

admissionOffice.assignCourse(student1, "Full Stack Web Development")
admissionOffice.assignCourse(student2, 'Data Science Masters')

student1.showCourses()
student2.showCourses()

admissionOffice.showEnrolledStudents()
