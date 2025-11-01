document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modales = document.querySelectorAll(".modal");
  const cierres = document.querySelectorAll(".modal__close");
  const abrirModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active");
      modal.style.display = "flex";
    }
  };
  const cerrarModal = (modal) => {
    modal.classList.remove("active");
    modal.style.display = "none";
  };
  cards.forEach((card) => {
    const modalId = card.getAttribute("data-modal");
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("card__btn")) return;
      abrirModal(modalId);
    });
    const boton = card.querySelector(".card__btn");
    boton.addEventListener("click", (e) => {
      e.stopPropagation();
      abrirModal(modalId);
    });
  });
  cierres.forEach((cerrar) => {
    cerrar.addEventListener("click", () => {
      const modal = cerrar.closest(".modal");
      cerrarModal(modal);
    });
  });
  modales.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) cerrarModal(modal);
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modales.forEach((modal) => {
        if (modal.classList.contains("active")) cerrarModal(modal);
      });
    }
  });
});
