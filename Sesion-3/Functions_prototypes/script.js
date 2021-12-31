//Functions and prototypes

function Employee(name,dest,DOB){
    this.name = name
    this.dest=dest
    this.DOB = DOB
}
Employee.prototype.calculate = function(){
    console.log("current age "+ (2021-this.DOB))
}

let emp1 = new Employee('Raghu',"sofwate developer",1999);

console.log(emp1)

emp1.calculate();