// el objetivo es que el usuario introduzca 5 numeros y que el programa cuente cuantos son positivos, negativos y ceros
let array = [];
let pregunta = prompt("¿Cuantos numeros quieres introducir?");
let numero = 0;
for (let i = 0; i < pregunta; i++) {
    numero = prompt("Introduce un numero");
    array.push(numero);
}
console.log(array);
// quiero saber cuantos son positivos
let positivos = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positivos++;
    }
}
console.log("Hay " + positivos + " numeros positivos");
// quiero saber cuantos son negativos
let negativos = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativos++;
    }
}
console.log("Hay " + negativos + " numeros negativos");
// quiero saber cuantos son ceros
let ceros = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
        ceros++;
    }
}
console.log("Hay " + ceros + " numeros ceros");
