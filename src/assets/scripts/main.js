/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav__menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navMenu.classList.toggle("activo");
  });

  document.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("activo");
      hamburger.classList.remove("is-active");
    })
  );

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
