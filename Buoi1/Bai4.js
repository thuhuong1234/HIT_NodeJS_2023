//obj_constructor
function User(studentCode, password,firstName,lastName,age,faculty,role){
    this.studentCode=studentCode;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.faculty=faculty;
    this.role=role;
}

var A1=new User('2020605518','123','Hung','Truong',17,'information technology',['admin','user'])
console.log(A1)
class User1{
    constructor(studentCode, password,firstName,lastName,age,faculty,role){
        this.studentCode=studentCode;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.faculty=faculty;
        this.role=role;
    }
} 
var A2=new User1('2020605518','123','Hung','Truong',17,'information technology',['admin','user'])
console.log(A2)