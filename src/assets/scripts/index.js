document.addEventListener("DOMContentLoaded", () => {
  const flechaArriba = document.querySelector(".flecha__arriba");

  if (flechaArriba) flechaArriba.style.display = "none";

  if (flechaArriba) {
    flechaArriba.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        flechaArriba.style.display = "block";
      } else {
        flechaArriba.style.display = "none";
      }
    });
  }
});
