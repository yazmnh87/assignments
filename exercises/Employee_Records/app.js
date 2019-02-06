
var employee = [];


function Employee(name,jobtitle,salary,status){

    this.name =  name
    this.jobtitle = jobtitle
    this.salary =  salary
    this.status = status
    this.printEmployeeForm = function () {
        console.log(this.name + this.jobtitle + this.salary + this.status);
    }

}

var bill = new Employee("bill","mechanic","1M$","Cheiftain")

console.log(bill.printEmployeeForm());