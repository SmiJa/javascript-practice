class Car {
    constructor(make, model, color, year) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class FourWheel extends Car {
    constructor (make, model, color, year, fourWheel) {
        super(make, model, color, year);
        this.fourW = fourWheel;
    }
}

let cars = [
    new Car("Ford", "fusion", "red", 2016),
    new Car("Toyota", "Prius", "White", 2020),
    new Car("Nissan", "Sentra", "Blue", 2021),
    new Car("Honda", "Civic", "White", 2020)
];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    document.body.innerHTML += `
    <div>
        <ul>
            <li>${cars[i].make}</li>
            <li>${cars[i].model}</li>
            <li>${cars[i].color}</li>
            <li>${cars[i].year}</li>
        </ul>
    </div>
    `;
}

// let car1 = new Car("Ford", "fusion", "red", 2016);
// let car2 = new Car("Ford", "fusion", "red", 2016);
// let car3 = new Car("Nissan", "Sentra", "Blue", 2021);
// let car4 = new Car("Honda", "Prius", "White", 2020);
// console.log(car4);
// let car5 = new FourWheel("fhdsa");
// console.log(car5);