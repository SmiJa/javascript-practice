const p = document.createElement('p');

let dog = {
    name: "Ivy",
    legs: 4,
    furColor: "Gray",
    size: "small",
    speak() {
        alert("woof!");
    },
    sit() {
        alert(`${this.name} sits for a treat.`);
    }
}

let dog2 = {
    name: "Harley",
    legs: 4,
    furColor: "Tan",
    size: "small",
    speak() {
        alert("woof!");
    },
    sit() {
        alert(`${this.name} sits for a treat.`);
    }
}

let dog3 = {
    name: "Rex",
    legs: 4,
    furColor: "Black",
    size: "medium",
    speak() {
        alert("woof!");
    },
    sit() {
        alert(`${this.name} sits for a treat.`);
    }
}

p.innerHTML = `My dog ${dog.name} is a good dog. She has ${dog.legs} legs. He fur is ${dog.furColor}`;
document.body.appendChild(p);


dog.speak();
dog.sit();