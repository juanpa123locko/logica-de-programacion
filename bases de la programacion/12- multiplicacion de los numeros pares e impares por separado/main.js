let pares = [];
let impares = [];

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    } else {
        impares.push(i);
    }
}

let resultadoPares = pares.reduce((acum, actual) => acum * actual, 1);
let resultadoImpares = impares.reduce((acum, actual) => acum * actual, 1);

console.log("Números pares: ", pares);
console.log("Resultado pares: ", resultadoPares);
console.log("Números impares: ", impares);
console.log("Resultado impares: ", resultadoImpares);
