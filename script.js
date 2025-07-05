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
    e.preventDefault(); // evita recargar la página
    mensaje.style.display = "block";
    formulario.reset();
  });
});
