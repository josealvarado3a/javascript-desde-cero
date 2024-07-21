// Declaracion y asignacion de variables
// En JavaScript, las variables se pueden declarar y asignar en la misma línea de código.
// Las variables se pueden usar en diferentes partes del código.

// Utilizando var
//----------------------------------------------------------------
// Es la forma antigua de declarar variables en JavaScript.
// Se puede reasignar y redeclarar.
// Tiene un alcance de función. Es decir, si se declara una variable dentro de una función, solo se puede acceder a ella dentro de esa función. Si la declaras fuera de cualquier función, estará disponible globalmente.
var nombre = "Juan";
console.log(nombre); // Imprime Juan

// Reasignación de la variable nombre
nombre = "Pedro";
console.log(nombre); // Imprime Pedro

// Declaración global de la variable miEdad
var miEdad = 25;
function imprimirEdad() {
    // Redecalaración de la variable miEdad
    var miEdad = 30;
    console.log(miEdad); // Imprime 30
}
console.log(miEdad); // Imprime 25

// Declaración  en ambito de función
function saludar() {
    var saludo = "Hola Mundo";
    console.log(saludo); // Imprime Ana
}
saludar();
// console.log(saludo); // Error: saludo is not defined


// Utilizando let
//----------------------------------------------------------------
// Es la forma moderna de declarar variables en JavaScript.
// No se puede redeclarar la variable en el mismo ámbito.
// Si puedes reasignar el valor de la variable.
// Tiene alcance de bloque, lo que significa que la variable solo es accesible dentro del bloque en el que fue declarada (por ejemplo, dentro de un par de llaves {}).

// Declaración y asignación de la variable apellido
let apellido = "Pérez";
console.log(apellido); // Imprime Pérez

// Reasignación de la variable apellido
apellido = "Gómez";
console.log(apellido); // Imprime Gómez

// Redeclaración en diferentes ambitos de bloque
let edad = 25;
if (true) {
    let edad = 30;
    console.log(edad); // Imprime 30 (dentro del bloque)
}

console.log(edad); // Imprime 25 (fuera del bloque)

//  **Nota: puedes redeclarar con let en diferentes bloques, pero no en el mismo bloque.

// Declaración y asignación con const
//----------------------------------------------------------------
// Se utiliza para declarar variables constantes, es decir, cuyo valor no cambiará durante la ejecución del programa.
// No se puede reasignar ni redeclarar.
// Tiene alcance de bloque.

// Declaración y asignación de la constante PI
const PI = 3.1416;
console.log(PI); // Imprime 3.1416

const SERVE_PORT = 3000;
console.log(SERVE_PORT); // Imprime 3000