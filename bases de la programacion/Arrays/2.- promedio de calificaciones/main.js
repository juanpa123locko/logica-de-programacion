let calificacion1 = prompt("Ingrese la primera calificacion");
let calificacion2 = prompt("Ingrese la segunda calificacion");
let calificacion3 = prompt("Ingrese la tercera calificacion");
let arraycalificaciones = [calificacion1, calificacion2, calificacion3];
let promedio = (parseInt(calificacion1) + parseInt(calificacion2) + parseInt(calificacion3)) / 3;
alert("El promedio de las calificaciones es: " + promedio);
