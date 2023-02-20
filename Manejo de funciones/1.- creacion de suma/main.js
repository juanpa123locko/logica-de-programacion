// quiero preguntarle al usuario dos digitos y quiero crear una funcion que me sume esos dos digitos
// y me devuelva el resultado
// 1.- pedirle al usuario dos digitos
// 2.- crear una funcion que me sume esos dos digitos
// 3.- mostrar el resultado
function preguntar(pregunta, pregunta2) {
    pregunta = prompt("ingrese numero 1");
    pregunta2 = prompt("ingrese numero 2");
    return parseInt(pregunta) + parseInt(pregunta2);
}
respuesta = preguntar();





let button = document.createElement("button");
button.innerHTML = "click";
document.body.appendChild(button);


button.addEventListener("click", function () {
    preguntar();
    console.log(respuesta)
}
    );