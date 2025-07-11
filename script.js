const imagenes = [
  { src: "img/cinna.jpeg", descripcion: "Este es un retrato rápido que explora expresiones faciales en estilo cartoon." },
  { src: "img/cinna1.jpeg", descripcion: "Sketch anatómico con enfoque en manos." },
  { src: "img/cinna2.jpeg", descripcion: "Diseño de personaje con base en formas geométricas." },
  { src: "img/cinna3.jpeg", descripcion: "Estudio de luces y sombras con lápices de grafito digital." },
  { src: "img/cinna4.jpeg", descripcion: "Exploración de perspectiva urbana en 3 puntos de fuga." }
];

let indice = 0;

const imagen = document.getElementById("imagen-carrusel");
const descripcion = document.getElementById("descripcion-carrusel");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

function mostrarImagen(index) {
  imagen.src = imagenes[index].src;
  descripcion.textContent = imagenes[index].descripcion;
}

anterior.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
});

siguiente.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
});

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contacto");
  const mensaje = document.getElementById("mensaje-confirmacion");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    mensaje.style.display = "block";
    formulario.reset();
  });

  // LIGHTBOX
  const lightbox = document.getElementById("lightbox");
  const imgLightbox = document.querySelector(".lightbox-img");
  const cerrar = document.querySelector(".cerrar-lightbox");

  // Habilitar zoom-in al cursor y abrir imagen en lightbox
  document.querySelectorAll(".tarjeta-proyecto img").forEach(imagen => {
    imagen.style.cursor = "zoom-in";
    imagen.addEventListener("click", () => {
      imgLightbox.src = imagen.src;
      lightbox.style.display = "flex";
    });
  });

  // Cerrar al hacer clic en la "X"
  cerrar.addEventListener("click", () => {
    lightbox.style.display = "none";
    imgLightbox.src = "";
  });

  // Cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      imgLightbox.src = "";
    }
  });
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav-menu");
  const banner = document.querySelector(".banner");
  const bannerBottom = banner.getBoundingClientRect().bottom;

  if (bannerBottom <= 0) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});
