// *variable definition of prompt
let var1 = prompt("Please enter 1rst character");
let var2 = prompt("Please enter 2rst character");
// convert to numbers
let var1int = parseInt(var1);
let var2int = parseInt(var2);

if (var1int > var2int) {
    console.log(`el primer valor: ${var1} es mayor al segundo valor: ${var2}`);
}
else {
    console.log(`el valor 1 ${var1} es menor al valor 2 ${var2}`);
}
