
var inicioDiv = document.createElement("div");
inicioDiv.setAttribute("id", "inicio");

var header = document.querySelector("header.header");
header.insertAdjacentElement("afterend", inicioDiv);

localStorage.setItem("empresa", "Inmobiliaria Metros Cuadrados");

let empresa = localStorage.getItem("empresa");
console.log("Empresa:", empresa);

// // Eventos
// var navLinks = document.querySelectorAll(".nav-link");

// navLinks.forEach(function(link) {
//   link.addEventListener("click", function(event) {
//     event.preventDefault();
//     var href = this.getAttribute("href");
//     console.log("Has hecho clic en:", href="inmobiliaria metros cuadrados");
//   });
// });


var inicioDiv = document.createElement("div");
inicioDiv.setAttribute("id", "inicio");

var mensajeInicio = document.createElement("h1");
mensajeInicio.textContent = "Ciudades en las que estamos";


mensajeInicio.style.color = "#000000";
mensajeInicio.style.textAlign = "center";

inicioDiv.appendChild(mensajeInicio);

var header = document.querySelector("header.header");
header.insertAdjacentElement("afterend", inicioDiv);
