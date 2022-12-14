//Muestra en la consola el texto de cada uno de los párrafos.

// const p = document.querySelectorAll("p");
// for (let i=0; i<p.length; i++) {
//     console.log(p[i].textContent)
// }


//con foreach

console.log("---------------")
const p =document.querySelectorAll("p");
p.forEach((p)=>{
    console.log(p.textContent)
})

// con for of

console.log("-------------------------");
const todosParrafos = document.querySelectorAll("p");
for (const todoParrafo of todosParrafos){
    console.log(todoParrafo.textContent);
}


//Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.

// 
// console.log("-------------------------");
// const claseParrafo = document.querySelectorAll(".parrafo");
// for (let i=0; i < claseParrafo.length ; i++) {
//     console.log(claseParrafo[i].textContent);

// }

// con forEach
// console.log("-------------------------");
// const claseParrafo2 = document.querySelectorAll(".parrafo");
// claseParrafo2.forEach((parrafo)=>{
//     console.log(parrafo.textContent)
// })

//con for of
// console.log("-------------------------");
// const claseParrafo3 = document.querySelectorAll(".parrafo");
// for (const claseParrafo1 of claseParrafo3){
//     console.log(claseParrafo1.textContent)
// }

// 3️⃣ Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".

// console.log("-------------------------");
const cambioParrafo = document.querySelectorAll(".parrafo");
// for(let i=0; i<cambioParrafo.length ; i++){
//     cambioParrafo[i].textContent = "Hola Mundo";
// }

// // // con for Each
// console.log("-------------------------");
// cambioParrafo.forEach((cambio)=>{
//     cambio.textContent ="Hola Mundo";
// })


// con for of
// console.log("-------------------------");
// for (const cambio of cambioParrafo){
//     cambio.textContent = "Hola Mundo"
// }


// 4️⃣ Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.

// const cambioColorFondo = document.querySelectorAll(".parrafo");
// for (let i=0; i < cambioColorFondo.length ; i++){
//     cambioColorFondo[i].style.backgroundColor = "red";
// }

//con forEach y cssText

// const cambioColorFondo = document.querySelectorAll(".parrafo");
// cambioColorFondo.forEach((cambio)=> {
//     cambio.style.cssText = "background-color: red";
// })

//con for of y cssText

// const cambioColorFondo = document.querySelectorAll(".parrafo");
// for (const cambio of cambioColorFondo){
//     cambio.style.cssText = "background-color:blue";
// }


// 5️⃣ Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo

// const cambioTexto = document.querySelectorAll(".parrafo");
// for ( let i=0; i<cambioTexto.length; i++){
//     cambioTexto[i].innerHTML +="<span> Infiltrado</span>";
// }

// con forEach y cssText

// const cambioTexto = document.querySelectorAll(".parrafo");
// cambioTexto.forEach((cambio)=>{
//     cambio.innerHTML += "<span> Manuel Llobat </span>";
// })


//con for of y cssText

const cambioTexto = document.querySelectorAll(".parrafo")
for (const cambio of cambioTexto) {
    cambio.innerHTML += "<span> Rekollons Pandereta </span>"
}
