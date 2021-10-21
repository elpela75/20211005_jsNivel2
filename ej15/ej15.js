let significadoDeLosNros = ["los huevos","el agua","el niño","san cono","la cama","el gato", "el perro", "el revólver", "el incendio", "el arroyo", "la leche", "el palito", "el soldado", "la yeta", "el borracho", "la niña bonita", "el anillo", "la desgracia", "la sangre", "el pescado", "la fiesta", "la mujer", "el loco", "la mariposa", "el caballo", "la gallina"];

let nroIngresado=Number(prompt("Ingrese un nro. entre 0 y 25"));

if (nroIngresado > 25) {
    alert("El nro. debía estar entre 0 y 25 !");
} else {
    console.log("UD. eligió " + significadoDeLosNros[nroIngresado]);
}

