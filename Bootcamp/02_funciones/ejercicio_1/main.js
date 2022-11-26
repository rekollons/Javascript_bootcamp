
//Ejercicio 1 

function dobleNumero (numero_1){
    return (numero_1 * 2)
}

console.log(dobleNumero (3))


// Ejercicio 2

function factorNumero (num_1) {
    return (num_1**2)
}

console.log(factorNumero (6))

//Ejercicio 3

function areaRectangulo (base, altura) {
    return (base*altura);
}
console.log(areaRectangulo(6,5));

//Ejercicio 4

function parImpar (num_1) {
 if (num_1%2== 0) {
     console.log (`${num_1} es par`);
} else {console.log (`${num_1} es impar`)}

}
console.log(parImpar(3)) //

// // Ejercicio 4.1

// const parImpar2 = prompt ("dime un numero del 0 al 9")
// if (parImpar%2==0){
//     console.log (`${parImpar2} es par`)
// } else {
//     console.log (`${parImpar2} es impar`)
// }

//Ejercicio 5

const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];

 function mayoresDeEdad(personas) {

  const mayores = [] ; 
  for (let i=0; i<personas.length; i++) {
    if (personas[i].edad >= 18) {
      mayores.push(personas[i]);

    }

  }
  return mayores;
 }
 console.log(mayoresDeEdad(personas));

// usando for of

function mayoresDeEdad2(personas) {
  const mayores = [] ; 
  for (const persona of personas){
    if (persona.edad >= 18){
      mayores.push(persona);

    }
  }
  return mayores;
}

console.log (mayoresDeEdad2(personas))

// cual es la persona mas joven


function masJoven(personas){
  let masJoven = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad < masJoven.edad) {

      masJoven = personas [i];

    }
  }
 return masJoven;

}

console.log (masJoven(personas))

// cual es la persona mas vieja


function masVieja(personas){
  let masVieja = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad > masVieja.edad) {

      masVieja = personas [i];

    }
  }
 return masVieja;

}

console.log (masVieja(personas))


// Ejercicio 6

const pokemons = [
  {
    nombre: 'Squirtle',
    tipo: 'agua',
  },
  {
    nombre: 'Bulbasaur',
    tipo: 'planta',
  },
  {
    nombre: 'Charmander',
    tipo: 'fuego',
  },
];

function mostrarNombre(pokemons){
  for (const pokemon of pokemons){
    console.log(pokemon.nombre);
  }

}
console.log(pokemons);

mostrarNombre(pokemons);

// tipo fuego

function fuego(pokemons){
  for (const pokemon of pokemons){
    if (pokemon.tipo === "fuego") {
    console.log(pokemon.nombre)}
  }
}
console.log(pokemons);

fuego(pokemons);

// Ejercicio 7 - todo a funciones flecha.

//doble
const doble = (num_1) => (num_1*2)
console.log(doble(6));

// cuadrado

const cuadrado = (num_2) =>(num_2**2)
console.log(cuadrado(3))

//area areaRectangulo

const areaRect = (base,altura) => (base*altura)
console.log(areaRect(8,5))

// par o imprar

 const parImpar2 = (numero) => (numero%2===0 ? "es par" : "es impar");

 console.log (parImpar2(12))
 
 // array personas mayores de edad

 const personas3 = [
  { nombre: 'Juan', edad: 18 },
  { nombre: 'María', edad: 16 },
  { nombre: 'Pedro', edad: 20 },
  { nombre: 'Pablo', edad: 15 },
  { nombre: 'Laura', edad: 19 },
];

 const mayoresDeEdad4 = (personas3) =>
 personas3.filter((persona) => persona.edad >= 18);

console.log(mayoresDeEdad4(personas3));

// persona más joven

const personas10 = [
  { nombre: 'Juan', edad: 18 },
  { nombre: 'María', edad: 16 },
  { nombre: 'Pedro', edad: 20 },
  { nombre: 'Pablo', edad: 15 },
  { nombre: 'Laura', edad: 19 },
];

const masJoven2 = (personas10) =>
personas10.reduce((personaAnterior, personaActual) => 
personaAnterior.edad < personaActual.edad ? personaAnterior : personaActual);

console.log(masJoven2(personas10));

//persona mas vieja

const personas11 = [
  { nombre: 'Juan', edad: 18 },
  { nombre: 'María', edad: 16 },
  { nombre: 'Pedro', edad: 20 },
  { nombre: 'Pablo', edad: 15 },
  { nombre: 'Laura', edad: 19 },
];

const masJoven3 = (personas11) =>
personas10.reduce((personaAnterior, personaActual) => 
personaAnterior.edad > personaActual.edad ? personaAnterior : personaActual);

console.log(masJoven3(personas11));

// persona mas vieja usando arrow functions y for of

const masJoven4 = (personas11) => {
  let masJoven = personas11[0];
  for (const persona of personas11){
    if (persona.edad > masJoven.edad){
      masJoven = persona
    }
  }
  return masJoven;
}

console.log(masJoven4(personas11))

// Ejercico de pokemons

const pokemons3 = [
  {
    nombre: 'Squirtle',
    tipo: 'agua',
  },
  {
    nombre: 'Bulbasaur',
    tipo: 'planta',
  },
  {
    nombre: 'Charmander',
    tipo: 'fuego',
  },
];

const mostrarPokemons = (pokemons2) => {
  for (const pokemon of pokemons2) {
    console.log(pokemon.nombre);
  }
};

mostrarPokemons(pokemons2);

//pokemons 3

const mostrarPokemonsFuego = (pokemons) => {
  for (const pokemon of pokemons3) {
    if (pokemon.tipo === "fuego"){
      console.log(pokemon.nombre)
    }
  }
}

mostrarPokemonsFuego(pokemons3)