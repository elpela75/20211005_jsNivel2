let arrayParam=[];
let actual=0;

function imprimir(array) {
    for (var i=0; i < array.length ; i++) {
        console.log("en la posición " + i + " se encuentra el valor " + array[i]);
    }
}

for (var i=0 ; i < 1000 ; i++) {
    actual = Number(prompt("ingrese el número " + (i+1)));

    if (actual == -1) {
        imprimir(arrayParam);
        break;
    } else {
        arrayParam[i] = actual;
    }
}

