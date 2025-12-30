document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".speaker-card-image-wrapper");
  const closes = document.querySelectorAll(".modal__close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const modalId = card.dataset.modal;
      document.getElementById(modalId).classList.add("show");
    });
  });

  closes.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".speaker-modal-wrapper").classList.remove("show");
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("speaker-modal-wrapper")) {
      e.target.classList.remove("show");
    }
  });
});