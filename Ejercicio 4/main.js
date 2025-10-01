const titulo = document.getElementById("titulo");
const parrafo1 = document.getElementsByClassName("parrafo")[0];
const parrafo2 = document.getElementsByClassName("parrafo")[1];
const nombre = document.getElementsByName("nombre");
const apellido = document.getElementsByName("apellido");
const elemento1 = document.getElementsByTagName("li")[0];
const elemento2 = document.getElementsByTagName("li")[1];
const elemento3 = document.getElementsByTagName("li")[2];
const otroTitulo = document.querySelector("h1");
const parrafos = document.querySelectorAll("p.parrafo")


console.log(titulo.innerText + "-> get via getElementById");
console.log(parrafo1.innerText + " -> get via getElementsByClassName");
console.log(parrafo2.innerText + "-> get via getElementsByClassName");
console.log(nombre[0].placeholder + "-> get via getElementsByName");
console.log(apellido[0].placeholder + "-> get via getElementsByName");

//Array.from(elemento).forEach((item) => console.log(item.textContent, " -> get via getElementsByTagName")); De un NodeList a un Array para poder aplicar un forEach.
//elemento si hubiera cogido eso en vez de hacer elemento1, elemento2, elemento3
console.log(elemento1.innerText + "-> get via getElementsByTagName");
console.log(elemento2.innerText + "-> get via getElementsByTagName");
console.log(elemento3.innerText + "-> get via getElementsByTagName");
console.log(otroTitulo.innerText + "-> get via querySelector");
//Array.from(parrafos).forEach((item) => console.log(item.textContent, " -> get via querySelectorAll")); Exactamente lo mismo que antes.
console.log(parrafos[0].innerText + "-> get via querySelectorAll");
console.log(parrafos[1].innerText + "-> get via querySelectorAll");

