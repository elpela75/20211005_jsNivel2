let arrayProductos=[];
const CANTIDADPRODUCTOS = 5;

let producto = {
    nombre : "",
    precio : 0
}

for (var i=1 ; i <= CANTIDADPRODUCTOS ; i++) {
    producto.nombre = prompt("ingrese el nombre del producto nro " + i + ": ");
    producto.precio = Number(prompt("ingrese el precio del producto nro" + i + ": "));
    arrayProductos[i] = producto;
}

console.log("La lista de productos ingresada es: ");
for (var i=1 ; i <= CANTIDADPRODUCTOS ; i++) {
    console.log("producto: " + arrayProductos[i].nombre + " - precio: " + arrayProductos[i].precio);
}

