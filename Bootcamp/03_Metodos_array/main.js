/* Ejercicio 1 

Crea una función que reciba un array de strings 
y devuelva un array con las strings que empiecen por "a" o "A */


// const strings = ['a', 'b', 'c', 'A', 'B', 'C'];

// const empiezanPorA = (strings) =>
// strings.filter((string) => string.toLowerCase() === "a");

// console.log(empiezanPorA(strings));

// // para palabras 

// const palabrasEmpiezanPorA = ["Casa" , "alba", "cajero","amor","AParrales"] ;
// function filtradoPalabrayLetras(word,letter){
//     return word.filter((word) => word[0].toLowerCase() === letter.toLowerCase());
// }
// console.log(filtradoPalabrayLetras(palabrasEmpiezanPorA, "c"));

// Ejercicio 2
/* Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.
Puedes usar este código para obtener el PIN de entrada del usuario: */


// const pinCorrecto = "1234"
// let pin = prompt("Introduce el PIN:")
// let intentos = 0;

// while (intentos < 3) {
//     if (pin === pinCorrecto) {
//         console.log ("¡Es correcto!");
//         break //esto rompe el while
//     } else {
//         console.log ("lo siento, esta mal");
//         intentos++;
//         pin = prompt (`te quedan ${4 - intentos} intentos`);
//     } 


// }


// ejercicio 2.1 
/*Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba salir.*/

// const pinCorrecto2 = "6789"
// let pin2 = prompt("Introduce el PIN:")

// while (pin2 !== "salir") {
//     if (pin2 === pinCorrecto2){
//         console.log ("¡Es correcto!");
//         break
//     } else {
//         console.log ("lo siento, esta mal") ; 

//      pin2 = prompt (`introduce el pin o escribe salir`)
    
//     }
// }

// ejercicio 3
// Crea una función que permita comprobar si un string es un palíndromo.

// const esPalindromo = (string) => {
//     const stringSinEspacios = string.split(" ").join("");
//     console.log(stringSinEspacios)
//     const stringReverse = stringSinEspacios.split("").reverse().join("");
//     console.log(stringReverse)
//     return stringSinEspacios === stringReverse;
// };

// console.log(esPalindromo("anita lava la tina"));
// console.log(esPalindromo("Juan pelotilla cucu"));



// const esPalindromo = (string) => {
//     const stringSinEspacios = string.split(' ').join('');
//     console.log(stringSinEspacios)
//     const stringRevere = stringSinEspacios.split('').reverse().join('');
//     console.log(stringRevere)
//     return stringSinEspacios === stringRevere;
//   };
  
//   console.log(esPalindromo('anita lava la tina'));
//   console.log(esPalindromo('juan cachirullo tutu'));
  


// const esPalindromoArray = (arrayToCheck) => {
//     const arraySinEspacios = arrayToCheck.map((string) =>
//       string.split(' ').join('')
//     );
//     const arrayReverse = arraySinEspacios.map((string) =>
//       string.split('').reverse().join('')
//     );
//     return arraySinEspacios.map((string, index) => {
//       return {
//         string: arrayToCheck[index],
//         esPalindromo: string === arrayReverse[index],
//       };
//     });
//   };
  
//   const arrayPalindromo = ['anita lava la tina', 'anita lava la tinaa'];
  
//   console.log(esPalindromoArray(arrayPalindromo));
/* Ejercicio 4 */

// // Si nadie ha dado like
// const likes = [];

// 'Nadie ha dado like'

// // Si solo ha dado like una persona
// const likes = ['Juan'];

// 'Juan ha dado like'

// // Si han dado like dos personas

// const likes = ['Juan', 'María'];

// 'Juan y María han dado like'

// // Si han dado like tres personas

// const likes = ['Juan', 'María', 'Pedro'];

// 'Juan, María y Pedro han dado like'

// // Si han dado like más de tres personas

// const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];

// 'Juan, María y 3 personas más han dado like'


//---------------------//

// function whoLikes(nombres) {
//   let mensajeFinalSingular = "ha dado like";
//   let mensajePluralSingular = "han dado like";

//   const [primero, segundo, tercero, resto] = nombres;


// if (!primero) return `Nadie ${mensajeFinalSingular}`;
// if (!segundo) return `${primero} ${mensajeFinalSingular}`;
// if (!tercero) return `${primero} y ${segundo} ${mensajePluralSingular}`;
// if (!resto) return `${primero}, ${segundo} y ${tercero} ${mensajePluralSingular}`;
// if (resto)
//     return `${primero}, ${segundo} y ${nombres.lenght - 2} personas más ${mensajePluralSingular}`;
//   }


//     console.log(whoLikes([]));
//     console.log(whoLikes(['Juan']));
//     console.log(whoLikes(['Juan', 'María']));
//     console.log(whoLikes(['Juan', 'María', 'Pedro']));
//     console.log(whoLikes(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));


// function whoLikes2(nombres){
//  if (nombres.length  === 0) {
//   return "Nadie le ha dado like";
//  } else if (nombres.length ===1){
//   return `${nombres[0]} ha dado like`;
//  }else if (nombres.length === 2){
//   return `${nombres[0]} y ${nombres[1]} has dado like`;
//  }else if (nombres.length === 3){
//   return `${nombres[0]} , ${nombres[1]} y ${nombres[2]} han dado like`;
//  }else {
//   return `${nombres[0]} , ${nombres[1]} y ${nombres.length-2} personas, han dado like}`;
//  }
// }

// console.log(whoLikes2([]));
// console.log(whoLikes2(['Juan']));
// console.log(whoLikes2(['Juan', 'María']));
// console.log(whoLikes2(['Juan', 'María', 'Pedro']));
// console.log(whoLikes2(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));


function whoLikes3 (nombres) {
    switch (nombres.length) {

        case 0:
        return `nadie ha dado like`;
        case 1 :
        return `${nombres[0]} ha dado like`;
        case 2 :
        return `${nombres[0]} y ${nombres[1]} han dado like`;
        case 3:
        return `${nombres[0]}, ${nombres[1]} y ${nombres[2]} han dado like`;
        default:
        return `${nombres[0]}, ${nombres[1]} y ${nombres.length -2} han dado like`;

    }

}

console.log(whoLikes3([]));
console.log(whoLikes3(['Juan']));
console.log(whoLikes3(['Juan', 'María']));
console.log(whoLikes3(['Juan', 'María', 'Pedro']));
console.log(whoLikes3(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));

// EJERCICIO 5

const users = [
  {
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 27,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
];

function genteQueViveEnMadrid(users){
    return users
    .filter((user=>user.city ==="Madrid"))
    .map((user) => user.name);
}

console.log(genteQueViveEnMadrid(users));

// con funcion flecha

console.log ("..................")
const genteMadrid = (users) => {
    return users 
    .filter((users)=>users.city ==="Madrid")
    .map((users)=> users.name)
}

console.log(genteMadrid(users))

/**
 * 2️⃣ Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.
 */

console.log("---ejercicio 6.2----")
function mayor25 (users){
    return (users)
    .filter((user)=>user.age > 25).map((user)=>user.name)
}
console.log(mayor25(users))

// con funcion flecha

console.log ("6.2 con funcion flecha")
const mayorDe25 = (users) => {
    return users
    .filter((users)=>users.age>25) .map((users)=>users.name)

}

console.log(mayor25(users))

/* 3️⃣ Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.
*/


console.log("---ejercicio 6.3----")
const vivoMadridYmas25 = (users) => {
  return users
  .filter((users)=>users.age>25 && users.city === "Madrid") .map((users)=>users.name)
}
console.log(vivoMadridYmas25(users))


// Encuentra la primera persona que le guste programar.

console.log("---ejercicio 6.4----");

function leGustaProgramar (users) {
 return users.find((user)=>user.hobbies.includes("programar"));

}
console.log(leGustaProgramar(users));

// con funcion flecha

console.log ("xxxxxxxxxxxxxxxxxxxxx")

const gustaProgramar = (users) => {
  return users
  .find((users)=>users.hobbies.includes("programar"))

}
console.log(gustaProgramar(users))

/**
 * 5️⃣ Haz la suma de todas las edades de las personas.
 */

