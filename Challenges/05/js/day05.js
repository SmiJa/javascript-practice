let evenOrOdd = function(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

console.log(evenOrOdd(13));
console.log(evenOrOdd(30));
console.log(evenOrOdd(66));


function validPassword(password) {

    password = password.toString();

    if (password.length >= 6 && password.length <= 20 && isNaN(parseInt(password[0]))) {
        alert("You password(" + password + ") has been accepted");
    } else if (password.length < 6) {
        alert("Your password(" + password + ") is too short.");
    } else if (password.length > 20) {
        alert("Your password(" + password + ") is too long.");
    } else if (!isNaN(parseInt(password[0]))) {
        alert("Your password(" + password + ") must start with a letter.");
    }
}

validPassword("b41865sb56");
validPassword("a234");
validPassword("a1fa56f43f456sdf4ws34fa3v4sa56fa456");
validPassword("21fa56f43");