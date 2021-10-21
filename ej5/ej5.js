let cantPersonas=Number(prompt("Cantidad de personas del grupo?"));

function calcularPago(limite) {
    let PRECIO=1.5;
    let PRECIOPROMOCIONAL=0.5;

    if (limite < 8) {
        return limite * PRECIO;
    } else {
        return limite * PRECIOPROMOCIONAL;
    }
}

console.log("el grupo debe abonar: " + calcularPago(cantPersonas));