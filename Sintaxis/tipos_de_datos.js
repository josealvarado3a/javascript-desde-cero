// Tipos de datps en JavaScript
// En JavaScript, los tipos de datos se dividen en dos categorías: primitivos y compuestos (No primitivos).
// Los tipos de datos primitivos son los tipos de datos más básicos y fundamentales en JavaScript.
// Los tipos de datos compuestos (No primitivos) son aquellos que se crean a partir de los tipos de datos primitivos.
// Existen 7 tipos de datos primitivos en JavaScript:
/*
String: Cadena de texto.
Number: Números.
Boolean: Valor verdadero o falso.
undefined: Valor indefinido.
null: Valor nulo.
Symbol: Valor único.
BigInt: Números enteros grandes.
*/

// Los principales tipos de datos son: Number, String y Boolean.

// Number
//----------------------------------------------------------------
// Los números en JavaScript pueden ser enteros o decimales.
// Ejemplos de números enteros
let numero1 = 5;
let numero2 = 10;

// Con typeof podemos saber el tipo de dato de una variable.
console.log(typeof numero1); // Imprieme number
console.log(typeof numero2); // Imprime number

// Strings
//----------------------------------------------------------------
// Los strings son cadenas de texto.
// Ejemplos de strings
let nombre = "Juan";
let apellido = "Pérez";

console.log(typeof nombre); // Imprime string
console.log(typeof apellido); // Imprime string

// Los strings se pueden escribir con comillas simples (''), comillas dobles ("") o con comillas invertidas (``).

// Boolean
//----------------------------------------------------------------
// Los booleanos son valores verdaderos o falsos.
// Ejemplos de booleanos
let verdadero = true;
let falso = false;

console.log(typeof verdadero); // Imprime boolean
console.log(typeof falso); // Imprime boolean

// Undefined
//----------------------------------------------------------------
// Undefined es un valor que se asigna a una variable que no tiene valor.
// Ejemplo de undefined
let sinValor;
console.log(sinValor); // Imprime undefined

// ---------------------------------------------------------------
// ¿Qué valor crees que se imprimirá en la consola en el siguiente código?
console.log(typeof false); // ?
console.log(typeof "True"); // ?
console.log(typeof 12.3); // ?
console.log(typeof x); // ?