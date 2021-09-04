class Dog {
    constructor(name, legs, color, size) {
        this.name = name;
        this.legs = legs;
        this.color = color;
        this.size = size;
    }

    speak() {
        alert("woof!");
    }

    sit() {
        alert(`${this.name} sits for a treat.`);
    }
}

const ivy = new Dog("Ivy", 4, "Gray", "small");
const div = document.createElement("div");
const h1 = document.createElement("h1");

document.body.appendChild(div);
div.classList.add("card");

div.appendChild(h1);
h1.innerHTML = "Facts about my dog.";


// console.log(typeof ivy.legs);

for (let key in ivy) {
    console.log(key);
    const p = document.createElement("p");
    p.innerHTML = `${key}: ${ivy[key]}`;
    div.appendChild(p);
}

// ivy.forEach(key => {
//     const p = document.createElement("p");
//     if (typeof key === String || typeof key === Number) {
//         console.log(key);
//         p.innerHTML = `${key}: ${ivy[key]}`;
//         div.appendChild(p);
//     }
// });



// ivy.speak();
// ivy.sit();