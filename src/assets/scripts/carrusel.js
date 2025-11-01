document.addEventListener("DOMContentLoaded", () => {
  const carruselCaja = document.querySelector("#carrusel__caja");
  const elementos = document.querySelectorAll(".carrusel__elemento");
  const indicadoresContainer = document.querySelector(".indicadores");

  let index = 0;
  const total = elementos.length;
  const intervalTime = 5000;

  elementos.forEach((_, i) => {
    const indicador = document.createElement("div");
    indicador.classList.add("indicador");
    if (i === 0) indicador.classList.add("activo");
    indicador.addEventListener("click", () => {
      index = i;
      actualizarCarrusel();
      reiniciarAuto();
    });
    indicadoresContainer.appendChild(indicador);
  });

  const indicadores = document.querySelectorAll(".indicador");

  function actualizarCarrusel() {
    carruselCaja.style.transform = `translateX(-${index * 100}%)`;
    indicadores.forEach((dot, i) =>
      dot.classList.toggle("activo", i === index)
    );
  }

  function siguiente() {
    index = (index + 1) % total;
    actualizarCarrusel();
  }

  let auto = setInterval(siguiente, intervalTime);

  function reiniciarAuto() {
    clearInterval(auto);
    auto = setInterval(siguiente, intervalTime);
  }
});
