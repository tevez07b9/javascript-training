class Student {
    constructor()  
    {  
       var name;  
       var marks;  
    }
    
    getName()  
    {  
        return this.name;  
    }
    
    setName(name)  
    {  
        this.name=name;  
    }
    
    getMarks()  
    {  
    return this.marks;  
    }

    setMarks(marks)  
    {  
      this.marks=marks;  
    }
}

var student=new Student();  
student.setName("John");  
student.setMarks(80);  
console.log(student);

// Validation with encapsulation

class StudentAlter {
    constructor()  
    {  
       var name;  
       var marks;  
    }
    
    getName()  
    {  
        return this.name;  
    }
    
    setName(name)  
    {  
        this.name=name;  
    }
    
    getMarks()  
    {  
    return this.marks;  
    }

    setMarks(marks)  
    {  
        if(marks < 0 || marks > 100)  
        {  
          console.log("Invalid Marks");
          return;  
        }  
        else  
        {  
          this.marks=marks;  
        }  
    }  
}

var student1=new StudentAlter();  
student1.setName("John");  
student1.setMarks(110);  
console.log(student1);

// Prototype-based approach
// It is important to set enumerable to true explictly

function StudentNew(name, marks) {
    var s_name = name;  
    var s_marks = marks;

    Object.defineProperty(this,"name",{  
        get:function()  
        {  
          return s_name;  
        },  
        set:function(s_name)  
        {  
            this.s_name=s_name;  
        },
        enumerable: true  
        
    }); 

    Object.defineProperty(this,"marks",{  
        get:function()  
        {  
          return s_marks;  
        },  
        set:function(s_marks)  
        {  
            this.s_marks=s_marks;  
        },
        enumerable: true  
        
    });
}

var studnew = new StudentNew("Talmeez",100);  
console.log(`name: ${studnew.name}, marks: ${studnew.marks}`);

