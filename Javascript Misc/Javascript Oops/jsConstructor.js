class Employee {  
    constructor() {  
      this.id=101;  
      this.name = "Martin Roy";  
    }   
}  
var emp = new Employee();  
console.log(emp);

// Calling Super()

class CompanyName  
{  
  constructor()  
  {  
    this.company="Coruscate";  
  }  
}  
class EmployeeAlter extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}

var emp1 = new EmployeeAlter(1,"John");  
console.log(emp1);
