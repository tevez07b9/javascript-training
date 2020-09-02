function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.fullName=function()  
{  
    return this.firstName+" "+this.lastName;  
}  
  
var employee1=new Employee("Martin","Roy");  

console.log(employee1);

function EmployeeAlter(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}

EmployeeAlter.prototype.company="Coruscate";  

var employee2 = new EmployeeAlter("Duke", "William");  
console.log(employee2.company);

