class A  
{  
    display()  
    {  
        return "A is invoked<br>";  
    }  
}  
class B extends A  
{  
    display()  
    {  
      return "B is invoked";  
    }  
}

let newPoly = new B();
console.log(newPoly.display());

// Prototype base approach

function BaseClass () {};
BaseClass.prototype.display = function() {
    return "BaseClass is invoked!";
}

function ChildClass() {};
ChildClass.prototype = Object.create(BaseClass.prototype);

ChildClass.prototype.display = function () {
    return "ChildClass is Invoked!";
}

let child = new ChildClass();
console.log(child.display());