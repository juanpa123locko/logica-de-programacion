//declare variables for 3 digits
let var1 = prompt("Please enter a number1: ");
let var2 = prompt("Please enter a number2: ");
let var3 = prompt("Please enter a number3: ");

// * MAKE THOSE 3 VARIABLES INTO INT STRING
let int1 = var1;
let int2 = var2;
let int3 = var3;
console.log(int1, int2, int3);
// ?DECLARANDO VALOR 1 ES MAYOR A LOS DEMAS
if (int1 > int2 && int1 > int3) {
    console.log('el PRIMER valor es mayor a los demas')
}
else if (int1 == null || int2 == null || int3 == null || int1 == null && int2 == null || int3 == null && int1 == null || int2 == null && int3 == null) {
    console.log('por favor introduce valores');
}
else if (int1 == int2 && int3 == int1 && int2 == int3) {
    console.log("los TRES VALORES SON IGUALES")
}

// ?DECLARANDO VALOR 2 ES MAYOR A LOS DEMAS
else if (int2 > int1 && int2 > int3) {
    console.log('el SEGUNDO valor es mayor a los demas')
}

// ?DECLARANDO VALOR3 ES MAYOR A LOS DEMAS
else if (int3 > int1 && int3 > int2) {
    console.log('el TERCER valor es mayor a los demas')
}

// *DECLARANDO VALOR 1 Y 2 SON IGUAL 
else if (int1 === int2) {
    console.log('el PRIMER valor y el SEGUNDO valor son iguales')
}

// *DECLARANDO VALOR 2 Y 3 SON IGUAL 
else if (int2 == int3) {
    console.log('el SEGUNDO valor y el TERCER valor son iguales')
}

// *DECLARANDO VALOR 1 Y 3 SON IGUAL 
else if (int1 == int3) {
    console.log('el PRIMER valor y el TERCER valor son iguales')
}
else {
    console.log('seran los tres ?')
}