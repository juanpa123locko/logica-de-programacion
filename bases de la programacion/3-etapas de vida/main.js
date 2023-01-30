// variantes
let valor = prompt('proporciona tu edad');
let valorint = parseInt(valor);
// 
if (valorint > 0 && valorint < 11) { document.write(`felicidades tienes ${valorint} estas en edad temprana`) }
else if (valorint > 9 && valorint < 20) { document.write(`felicidades tienes ${valorint} estas en edad de escuela`) }
else if (valorint > 19 && valorint < 31) { document.write(`felicides tienes ${valorint} estas en edad de disfrutar y trabajar`) }
else { document.write(`No especific coment for this`) }