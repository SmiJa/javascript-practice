class Car {
    constructor(make, model, year, color, mileage, stockNum) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.stockNum = stockNum;
    }

    buildInventory(arr) {
        for (let i = 0; i < arr.length; i++) {
            const carWrap = `
            <div class="car">
                <p>Make:    ${arr[i].make}</p>
                <p>Model:   ${arr[i].model}</p>
                <p>Year:    ${arr[i].year}</p>
                <p>color:   ${arr[i].color}</p>
                <p>Mileage: ${arr[i].mileage}</p>
                <p>Stock#:  ${arr[i].stockNum}</p>
            </div>
            `;
    
            carList += carWrap;
        }
        inventory.innerHTML = carList;
    }

    clearFields() {
        make.value = "";
        model.value = "";
        year.value = "";
        color.value = "";
        mileage.value = "";
        stock.value = "";
    }

    
}

let car;

let btn = document.querySelector("button");
let inventory = document.querySelector("#inventory-wrap");
let carList = "";

let cars = [];

const make = document.querySelector("#make");
const model = document.querySelector("#model");
const year = document.querySelector("#year");
const color = document.querySelector("#color");
const mileage = document.querySelector("#mileage");
const stock = document.querySelector("#stock-num");


btn.addEventListener("click", addCar);

function getCarInfo(make, model, year, color, mileage, stock) {

    make = make.value;
    model = model.value;
    year = year.value;
    color = color.value;
    mileage = mileage.value;
    stock = stock.value;

    car = new Car(make, model, year, color, mileage, stock);
    
    cars.push(car);
    console.log(cars);
}



function addCar() {
    getCarInfo(make, model, year, color, mileage, stock);
    car.buildInventory(cars);
    car.clearFields();   
    
    // setInterval(buildInventory, 1000, cars);
}