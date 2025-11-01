document.addEventListener("DOMContentLoaded", () => {
  const sugerencias = document.querySelectorAll(".sugerencia");
  const modales = document.querySelectorAll(".modal");

  sugerencias.forEach((card) => {
    card.addEventListener("click", () => {
      const modalId = card.dataset.modal;
      document.getElementById(modalId).style.display = "block";
    });
  });

  modales.forEach((modal) => {
    modal.querySelector(".modal__close").addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
});
