import { imagenesPlatos } from "./images";

function barajarArray(array) {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

document.addEventListener("DOMContentLoaded", () => {
  const preguntasOriginales = [
    {
      imagen: imagenesPlatos[0],
      alt: "sopa castellana",
      correcta: "Sopa Castellana",
      opciones: ["Guiso de la Abuela", "Sopa Castellana", "Pan de Pueblo"],
    },
    {
      imagen: imagenesPlatos[1],
      alt: "guiso de la abuela",
      correcta: "Guiso de la Abuela",
      opciones: ["Guiso de la Abuela", "Tortilla de Patatas", "Sopa de Ajo"],
    },
    {
      imagen: imagenesPlatos[2],
      alt: "gazpacho",
      correcta: "Gazpacho",
      opciones: ["Croquetas", "Gazpacho", "Pan de Pueblo"],
    },
    {
      imagen: imagenesPlatos[3],
      alt: "arroz al horno",
      correcta: "Arroz al horno",
      opciones: ["Sopa de Ajo", "Cordero al ajillo", "Arroz al horno"],
    },
    {
      imagen: imagenesPlatos[4],
      alt: "cordero al ajillo",
      correcta: "Cordero al ajillo",
      opciones: ["Guiso de la Abuela", "Cordero al ajillo", "Pan de Pueblo"],
    },
    {
      imagen: imagenesPlatos[5],
      alt: "tortilla de patatas",
      correcta: "Tortilla de Patatas",
      opciones: ["Tortilla de Patatas", "Tortilla Francesa", "Gazpacho"],
    },
    {
      imagen: imagenesPlatos[6],
      alt: "puchero valenciano",
      correcta: "Puchero Valenciano",
      opciones: ["Tortilla de Patatas", "Gazpacho", "Puchero Valenciano"],
    },
    {
      imagen: imagenesPlatos[7],
      alt: "rollets d'anis",
      correcta: "Rollets d'anís",
      opciones: ["Tiramisú", "Fartons", "Rollets d'anís"],
    },
  ];

  let indice = 0;
  let preguntas = barajarArray(preguntasOriginales);

  const imagen = document.getElementById("imagen-plato");
  const opcionesContenedor = document.querySelector(".opciones");
  const resultado = document.getElementById("resultado");
  const reiniciar = document.getElementById("reiniciar");

  function cargarPregunta() {
    const pregunta = preguntas[indice];

    imagen.classList.remove("sin-blur");

    imagen.src = pregunta.imagen;
    imagen.alt = pregunta.alt;

    resultado.textContent = "";
    reiniciar.style.display = "none";

    opcionesContenedor.innerHTML = "";

    const opcionesBarajadas = barajarArray([...pregunta.opciones]);
    opcionesBarajadas.forEach((op) => {
      const btn = document.createElement("button");
      btn.classList.add("opcion");
      btn.textContent = op;
      btn.addEventListener("click", () => comprobarRespuesta(op));
      opcionesContenedor.appendChild(btn);
    });
  }

  function comprobarRespuesta(opcionElegida) {
    const pregunta = preguntas[indice];

    if (opcionElegida === pregunta.correcta) {
      resultado.textContent = "¡Correcto!";
      resultado.style.color = "var(--color-acierto)";
      imagen.classList.add("sin-blur");

      if (indice === preguntas.length - 1) {
        resultado.textContent = "¡Gracias por jugar con nosotros!";
        opcionesContenedor.innerHTML = "";
        reiniciar.textContent = "Volver a jugar";
      } else {
        reiniciar.textContent = "Siguiente plato";
      }
    } else {
      resultado.textContent = "Incorrecto… prueba otra vez.";
      resultado.style.color = "var(--color-error)";
    }

    reiniciar.style.display = "inline-block";
  }

  reiniciar.addEventListener("click", () => {
    if (indice < preguntas.length - 1) {
      indice++;
      cargarPregunta();
    } else {
      preguntas = barajarArray(preguntasOriginales);
      indice = 0;
      cargarPregunta();
    }
  });

  cargarPregunta();
});
