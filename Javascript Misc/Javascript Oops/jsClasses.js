class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    detail() {
        return `Emp Id: ${this.id}, Emp Name: ${this.name}`;
    }
}

let employee1 = new Employee(101, 'Talmeez Ahmed');
console.log(employee1);


// Name class expression
const car = class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    detail() {
        return `Car Name: ${this.name}, Car Type: ${this.type}`;
    }
};

console.log("getting name of class...", car.name);
let car1 = new car("Jeep Wrangler", "SUV");
console.log(car1);

// Unamed class expression
const secretCar = class {
    constructor(agentName, carName) {
        this.name = agentName;
        this.carName = carName;
    }

    detail() {
        return `Car Name: ${this.carName}, Agent Name: ${this.name}`;
    }
};

let bondCar = new secretCar("James Bond", "Aston Martin");
console.log(bondCar.detail());