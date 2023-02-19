// * QUIERO HACER UN ARRAYPUSH Y USAR EL .FOREACH PARA RECORRERLO Y MOSTRARLO EN PANTALLA
// * AL IGUAL QUE QUIERO USAR UN FOR CON EL METODO .LENGTH PARA RECORRERLO Y MOSTRARLO EN PANTALLA

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function loop() {
    for (let i = 1; i < array.length; i++) {
        array.forEach(element => {
            console.log(`El elemento es: ${element}`)
        });
        console.log(array[i]);
    }
}loop();

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', () => {
    array.push(20);
    console.log(array);
    loop();
});

// quiero hacer un arraypush y usar el .foreach para recorrerlo y mostrarlo en pantalla al igual que quiero usar un for con el metodo .length para recorrerlo y mostrarlo en pantalla

make a http request with node 