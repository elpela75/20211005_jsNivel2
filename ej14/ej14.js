let arrayParam=[];
let actual=0;
let cantElementos=Number(prompt("Cuántas alturas va a ingresar?"));

function Promedio(array) {
    let acum=0;
    for (var i=0; i < array.length ; i++) {
        acum = acum + array[i];
    }
    return acum / array.length;
}

for (var i=0 ; i <= cantElementos ; i++) {
    if (i == cantElementos) {
        Promedio(arrayParam);
        console.log("el promedio de los nros ingresados es: " + Promedio(arrayParam));
        break;
    } else {
        arrayParam[i] = Number(prompt("ingrese una altura..."));
    }
}

