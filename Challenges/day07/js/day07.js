// let food = ["apple", "orange", "sandwich"];
// let food2 = food.slice(1,2);

// console.log(food);
// console.log(food2);

// food2.push("pie");
// console.log(food2);

function fizzBuzz(num) {

    for (i = 0; i <= num; i++) {
        switch(true){
            case (i % 15 === 0): 
                console.log("FizzBuzz");
                break;
            case i % 3 === 0:
                console.log("Fizz");
                break;
            case i % 5 === 0:
                console.log("Buzz");
                break;
            default:
                console.log(i);
                break;
        }
    }    
}

fizzBuzz(100);