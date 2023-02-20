const sumBtn = document.getElementById('sum-btn');
sumBtn.addEventListener('click', sumNumbers);

function sumNumbers() {
  const num1 = parseInt(prompt('Ingrese el primer número:'));
  const num2 = parseInt(prompt('Ingrese el segundo número:'));
  const sum = num1 + num2;
  console.log('La suma de los dos números es:', sum);
}
