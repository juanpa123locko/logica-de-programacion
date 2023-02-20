// * EL OBJETIVO ES CREAR UN ARRAY CON 5 NUMEROS Y SABER CUAL ES EL MAYOR Y EL MENOR
// * Y MOSTRARLO EN PANTALLA
let array = [];
let pregunta = prompt("¿Cuantos numeros quieres introducir?");
let numero = 0;
for (let i = 0; i < pregunta; i++) {
    numero = prompt("Introduce un numero");
    array.push(numero);
}
console.log(array);

// quiero saber el mayor 
let mayor = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
        mayor = array[i];
    }
}
console.log("El mayor es: " + mayor);

let num_min = array[0];

// Recorrer el array con un ciclo for
for (let i = 1; i < array.length; i++) {
    const num = array[i];
    // Actualizar la variable num_min si se encuentra un número menor
    if (num < num_min) {
        num_min = num;
    }
}
console.log("El menor es: " + num_min);