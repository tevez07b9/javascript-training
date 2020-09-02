class Moment extends Date {  
    constructor() {  
      super();  
    }
}

var moment = new Moment();
console.log(`Today is: ${moment.getDay()}-${moment.getMonth()}-${moment.getFullYear()}`);

// Inherit Custom Class

class Bike  
{  
  constructor()  
  {  
    this.company="BMW";  
  }  
}  
class Vehicle extends Bike {  
  constructor(name,price) {  
   super();  
    this.name=name;  
    this.price=price;  
  }   
}  
var newbike = new Vehicle("K1300","70000000");  
console.log(newbike);

// Prototype base approach

function Bike1(company)  
{  
    this.company=company;   
}  
  
Bike1.prototype.getCompany=function()  
{  
  return this.company;  
}

function Vehicle1(name,price) {  
    this.name=name;  
    this.price=price;  
}   

var bike = new Bike1("Honda");  
Vehicle1.prototype = bike;

var vehicle =new Vehicle1("Shine",70000);
console.log({...vehicle, company: vehicle.getCompany()});  