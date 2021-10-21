let arrayNombres=["Agustín", "Alan", "Alejandro", "Ana", "Analía", "Andrea", "Andrés", "Angeles", "Ariel", "Leandro"];
let arrayApellidos=["Vargas", "Cuellar", "Zapata", "López", "Pedicino", "Nuniez", "Azcurra", "Perroud", "Martucci", "Echevarria"];

console.log("10 Compañeros de C2164");
for (var i=0 ; i < arrayApellidos.length ; i++) {
    console.log("Nombre y Apellido del compañero nro. " + (i+1) + ": " + arrayNombres[i] + " " + arrayApellidos[i]);
}