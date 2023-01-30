let calificacion = prompt('proporciona tu calificacion');
let calificacionint = parseFloat(calificacion);
console.log(calificacionint);

//

if (calificacionint <= 10 && calificacionint >= 8) { console.log(`felicidades pasaste con ${calificacionint}`) }
else if (calificacionint <= 7 && calificacionint >= 6.5) { console.log(`muy bien pero le puedes hechar mas ganas`) }
else if (calificacionint <= 6.4 && calificacionint >= 6) { console.log(`pasaste de panzaso puedes mejorar mucho`) }
else { console.log(`ya te la pelaste no pasaste`) }