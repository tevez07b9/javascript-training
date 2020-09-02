class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
}

console.log(Test.display());

// Invoking methods with same names

class Test1  
{  
  static display()  
  {  
    return "static method is invoked 1st one"  
  }  
  static display()  
  {  
    return "static method is invoked again last one"  
  }  
}

console.log(Test1.display());

// Calling static methods inside constructor

class Test2 {  
    constructor() {  
        console.log(Test2.display()+"\n");   
        console.log(this.constructor.display());   
    }  
    
    static display() {  
        return "static method is invoked from constructor!"; 
    }  
}  
var t = new Test2();  
