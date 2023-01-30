// ?declare a variable to use to put a number
let var1 = prompt("Please enter a number of two digits: ");
// ? makes the variable a number instead of a string
let varint1 = parseInt(var1);
if (varint1 >= 10 && varint1 <= 99) {
    console.log(`your number is ${varint1} and it is pair`)
}
loop:
while (varint1 <= 9 || varint1 >= 100) {
    var1 = prompt("Please enter a number between 10 and 99")
    if (var1 >= 10 && var1 <= 99) {
        console.log(`your number is ${var1} and it is pair`)
        break loop
    }
}