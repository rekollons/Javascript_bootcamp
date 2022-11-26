/* Ejercicio 1 */
console.log("hola mundo!")

/* Ejercicio 2 */

const Nombre = "Manuel";
console.log(Nombre)

const Edad= "50";
console.log(Edad)

const mayorDeEdad = 50
if (Edad >= 18) {
console.log("soy Mayor de edad")
}

const direccion = {
calle: "xilxes",
numero: 14,
Piso: 5,
Puerta: 18,
codigo_postal: 12530,
Poblacion: "Burriana"
};
console.log (direccion)

const lenguajesFavoritos = ["python", "javascript", "java", "c++"];
console.log (lenguajesFavoritos)

const mejorLenguaje = lenguajesFavoritos[0];
console.log (mejorLenguaje)

let peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1];
console.log (peorLenguaje)

/* ejercicio 3*/

const numero_1 = 5 ;
const numero_2 = 15689650 ;

const suma = numero_1 + numero_2;
console.log (suma);

const cifra_01 = 655
const cifra_02 = 5

const multiplicacion = cifra_01 * cifra_02 ;
const division = cifra_01 / cifra_02 ;
const potenccia = cifra_01 ** cifra_02 ;
const resta = cifra_01 - cifra_02 ;

console.log (multiplicacion, division, potenccia, resta)

/* Ejercicio 4 */

const saludo = ("hola") ;
if (saludo == "hola") {
    console.log ("He Saludado")
}

/* Ejercicio 5 */

const pokemons  = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander"] 
console.log (pokemons)

console.log (pokemons[0])
console.log (pokemons[1])
console.log (pokemons[2])
console.log (pokemons[3])

console.log ("--metodo bucle---")

for(var i=0; i<pokemons.length; i++) {
    console.log (pokemons[i]); 
}

console.log ("-----que tipo de pokemon es----")

const pokemonsLista = [
    {nombre:"bulbasaur", tipo:"agua"},
    {nombre:"Ivysaur", tipo:"piedra"},
    {nombre:"Venusaur", tipo:"fuego"},
    {nombre:"Charmander", tipo:"Puto amo"},
] ;


pokemonsLista.forEach(pokemonsLista => {
    if(pokemonsLista.tipo ==="fuego")
    console.log(`${pokemonsLista.nombre} es un pokemons de fuego!`);
});

