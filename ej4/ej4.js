const DESCUENTO = 0.15;
const MONTOCOMPRAMINIMA = 100;

function montoNetoCompra (montoBruto,minimo,descuento) {
    return (montoBruto > minimo) ? (montoBruto*(1-descuento)) : montoBruto;
}

let montoBrutoCompra = Number(prompt("Monto Bruto de la compra: "));

console.log("el monto neto a abonar es de " + montoNetoCompra(montoBrutoCompra,MONTOCOMPRAMINIMA,DESCUENTO));