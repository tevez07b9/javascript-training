function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}

Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}

//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  

//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  

var bike=new Bike("Honda");  
console.log(bike.display());

// Instance of

//Creating a constructor function  
function Vehicle1()  
{  
    this.vehicleName=vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
}  
//Creating a constructor function  
function Bike1(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
Bike1.prototype=Object.create(Vehicle1.prototype);  
var bike=new Bike1("Honda");  
console.log(bike instanceof Vehicle1);  
console.log(bike instanceof Bike1);  