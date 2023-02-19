function fibonacci() {
    var n = parseInt(prompt("Ingrese la cantidad de números de la serie de Fibonacci que quiere generar:"));
    var a = 0, b = 1, temp;
    var result = [a, b];
    
    while (n > 2) {
    temp = a + b;
    a = b;
    b = temp;
    result.push(temp);
    n--;
    }
    
    return result;
}

// Ejemplo de uso
console.log(fibonacci());
