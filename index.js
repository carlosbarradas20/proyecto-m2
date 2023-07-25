
let inicioDiv = document.createElement("div");
inicioDiv.setAttribute("id", "inicio");


mensajeInicio.textContent = "Ciudades en las que estamos";
mensajeInicio.style.color = "#000000";
mensajeInicio.style.textAlign = "center";
inicioDiv.appendChild(mensajeInicio);


let header = document.querySelector("header.header");
header.insertAdjacentElement("afterend", inicioDiv);


let seccion2 = document.querySelector(".section2");


async function cargarImagen(src) {
  try {
    const img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
    return img;
  } catch (error) {
    console.error("Error al cargar imagen:", error.message);
  }
}


ciudades.forEach(async (ciudad) => {
  const article = document.createElement("article");
  article.className = "postcard dark blue";

  const link = document.createElement("a");
  link.className = "postcard__img_link";
  link.href = `./secciones/${ciudad.nombre.toLowerCase()}.html`;

  try {
    const img = await cargarImagen(ciudad.imagenSrc);
    img.className = "postcard__img";
    img.alt = "Image Title";
    link.appendChild(img);
  } catch (error) {
    console.error("Error al cargar imagen:", error.message);
  }

  article.appendChild(link);
  seccion2.appendChild(article);
});

