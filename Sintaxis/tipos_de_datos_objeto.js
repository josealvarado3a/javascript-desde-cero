// Tipos de datos objeto - Colección
// En JavaScript, los tipos de dato objeto o colecciones son estructuras de datos que permiten almacenar y organizar grupos de valores relacionados.
// A diferencia de los tipos de datos primitivos, que solo almacenan valores simples, las colecciones pueden almacenar varios valores y definir relaciones entre ellos.
// Los dos tipos principales de colecciones en JavaScript son:
// Object 
// Array

// Object
//----------------------------------------------------------------
// Los objetos son colecciones de pares clave-valor.
// Las claves son cadenas de texto que se utilizan para acceder a los valores.
// Los valores pueden ser de cualquier tipo de dato, incluidos otros objetos.
// Ejejmplo de objeto
let persona = {
    nombre: "Juan",
    edad: 25,
    casado: false,
    hijos: ["Ana", "Luis"]
};

console.log(persona.nombre); // Imprime Juan
console.log(persona[hijos][1]); // Imprime Luis

// Array
//----------------------------------------------------------------
// Los arrays son colecciones ordenadas de valores.
// Los valores se almacenan en índices numéricos.
// Los arrays pueden contener cualquier tipo de dato, incluidos otros arrays y objetos.
// Ejemplo de array
let frutas = ["Manzana", "Banana", "Fresa"];
console.log(frutas[0]); // Imprime Manzana
console.log(frutas[2]); // Imprime Fresa
console.log(frutas.length); // Imprime 3 (longitud del array)

// Los objetos y los arrays son tipos de datos compuestos (No primitivos) en JavaScript.

// Operaciones comunes con arrays
//----------------------------------------------------------------
// Agragar elementos a un array
let numeros = [1, 2, 3];
numeros.push(4); // Agrega el número 4 al final del array
console.log(numeros); // Imprime [1, 2, 3, 4]

// Agregar elementos con unshift
numeros.unshift(0); // Agrega el número 0 al inicio del array

// Eliminar elementos de un array
numeros.pop(); // Elimina el último elemento del array
console.log(numeros); // Imprime [1, 2, 3]

// Eliminar elementos con shift
numeros.shift(); // Elimina el primer elemento del array

// Eliminar elementos con splice
numeros.splice(1, 1); // Elimina el elemento en la posición 1

// Iterar sobre un array
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Operaciones comunes con objetos
//----------------------------------------------------------------
// Agregar propiedades a un objeto
let auto = {
    marca: "Toyota",
    modelo: "Corolla"
};
auto.color = "Rojo"; // Agrega la propiedad color al objeto auto

// Acceder a las propiedades de un objeto
console.log(auto.marca); // Imprime Toyota

// Eliminar propiedades de un objeto
delete auto.modelo; // Elimina la propiedad modelo del objeto auto

// Verificar si una propiedad existe en un objeto
console.log("color" in auto); // Imprime true
console.log("conductor" in auto); // Imprime false

// Iterar sobre las propiedades de un objeto
for (let key in auto) {
    console.log(key + ": " + auto[key]);
}