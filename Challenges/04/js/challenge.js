// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number


// const pro = parseInt(prompt("Enter a number"));
// const pro2 = parseInt(prompt("Enter another number"));

// if (pro > pro2) {
//     alert(pro + " is the larger number");
// } else {
//     alert(pro2 + " is the larger number");
// }
















// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number

// function numCompare() {
//     let pro = prompt("Enter a number")
//     let pro2 = parseInt(prompt("Enter another number"));

//     // console.log(typeof pro);
//     // console.log(typeof pro2);
//     pro = parseInt(pro);
//     // console.log(pro);
//     // if (typeof pro != "number") {
//     //     pro = parseInt(prompt("You did not enter a number. Please enter a number."));
//     // }

//     // if (pro > pro2) {
//     //     alert(pro + " is the larger number");
//     // } else {
//     //     alert(pro2 + " is the larger number");
//     // }

//     // let n = prompt("Check your number", "Type your number here");
//     // n = parseInt(n);
//     if (isNaN(pro))
//     {
//         pro = parseInt(prompt("You did not enter a number. Please enter a number."));
//     } else if (isNaN(pro2)) {
//         pro2 = parseInt(prompt("You did not enter a number. Please enter a number."));
//     }

//     function checkNumber(number){

//         if (number <= 100 && number >= 1) {
//             document.write("Your number (" + number + ")  matches requirements", "");
//         } else if (isNaN(number)) {
//             promptForNumber("It is not a number. Please enter a number from 1 to 100", "");
//         } else {
//             promptForNumber("Your number (" + number + ") is not between 1 and 100", "");
//         }
    
//     }
    
    
// }

let pro = parseInt(prompt("Enter a number"));
let pro2 = parseInt(prompt("Enter another number"));

while(isNaN(pro) || isNaN(pro2)) {
    

    if (isNaN(pro)) {
        pro = prompt("Enter A number");
        // alert(pro + " is the larger number");
    } else if (isNaN(pro2)){
        pro2 = parseInt(prompt("Enter Another number"));
        // alert(pro2 + " is the larger number");
    }  
}

    if (pro > pro2) {
        alert(pro + " is the larger number");
    } else {
        alert(pro2 + " is the larger number");
    }