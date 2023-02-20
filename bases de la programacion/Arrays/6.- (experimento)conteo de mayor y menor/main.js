// hacer que el usuario ingrese 10 numeros y que el programa diga cual es el mayor y cual es el menor usando .foreach e imprimirlo en consola
// 1.- pedir al usuario que ingrese 10 numeros
// 2.- hacer un array con esos numeros
// 3.- hacer un foreach para recorrer el array
// 4.- hacer un if para comparar los numeros
// 5.- imprimir en consola el numero mayor y el numero menor
// Pedir al usuario la cantidad de números que desea ingresar
const cantidadNumeros = parseInt(prompt("¿Cuántos números desea ingresar?"));

// Crear un array vacío donde se almacenarán los números ingresados
const array = [];

// Pedir al usuario que ingrese cada número y almacenarlo en el array
for (let i = 0; i < cantidadNumeros; i++) {
    const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    array.push(numero);
}

// Función para encontrar el número con mayor y menor cantidad de dígitos
function encontrarMayorYMenorDigito(array) {
    let mayorDigito = -Infinity;
    let menorDigito = Infinity;
    
    for (let i = 0; i < array.length; i++) {
    const numero = array[i];
    const cantidadDigitos = numero.toString().length;
    
    if (cantidadDigitos > mayorDigito) {
    mayorDigito = cantidadDigitos;
    }
    
    if (cantidadDigitos < menorDigito) {
    menorDigito = cantidadDigitos;
    }
    } 

return { mayorDigito, menorDigito };
}

// Encontrar el número con mayor y menor cantidad de dígitos en el array
const { mayorDigito, menorDigito } = encontrarMayorYMenorDigito(array);

// Mostrar el número con mayor y menor cantidad de dígitos
console.log(`El número con mayor cantidad de dígitos es: ${array.find(numero => numero.toString().length === mayorDigito)}`);
console.log(`El número con menor cantidad de dígitos es: ${array.find(numero => numero.toString().length === menorDigito)}`);


















// Path: bases de la programacion\Arrays\7.- (experimento)conteo de mayor y menor\main.js