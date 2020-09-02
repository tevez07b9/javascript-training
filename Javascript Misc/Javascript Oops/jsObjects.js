// Create Objects

// Object literal

let emp={id:102,name:"Shyam Kumar",salary:40000};
console.log(emp);

// Object Instance

let emp2=new Object();  
emp2.id=101;  
emp2.name="Ravi Malik";  
emp2.salary=50000;
console.log(emp2);

// Object Constructor

function empMaker(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
}  
let emp3 = new empMaker(103,"Vimal Jaiswal",30000);  
console.log(emp3);

// Defining Methods

function empMaker2(id,name,salary){  
    this.id = id;  
    this.name = name;  
    this.salary = salary;  
      
    function changeSalary(otherSalary){  
        this.salary = otherSalary;  
    }
    
    this.changeSalary = changeSalary;  
}  


let emp4 = new empMaker2(103,"Sonoo Jaiswal",30000);  
console.log(emp4);
emp4.changeSalary(45000);
console.log(emp4);  