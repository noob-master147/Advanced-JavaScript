var createStudent = function(name, age, rollNo, marks) {
    var student = {};
    student.name = name
    student.age = age 
    student.rollNo = rollNo
    student.marks = marks

    student.details = function(){
        console.log(`Student name is ${this.name}`)
        console.log(`age:${this.age}`)
        console.log(`roll number:${this.rollNo}`)
        console.log(`marks:${this.marks}`)
    }
    return student
}

let john = new createStudent('john',18,21,98)
john.details()