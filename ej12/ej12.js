let arrayParam=[];
let actual=0;

function Promedio(array) {
    let acum=0;
    for (var i=0; i < array.length ; i++) {
        acum = acum + array[i];
    }
    return acum / array.length;
}

for (var i=0 ; i < 10000 ; i++) {
    actual = Number(prompt("ingrese un número " + (i+1)));

    if (actual == -1) {
        Promedio(arrayParam);
        console.log("el promedio de los nros ingresados es: " + Promedio(arrayParam));
        break;
    } else {
        arrayParam[i] = actual;
    }
}

