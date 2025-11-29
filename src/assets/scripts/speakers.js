document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".speakers__card");
  const closes = document.querySelectorAll(".modal__close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const modalId = card.dataset.modal;
      document.getElementById(modalId).classList.add("show");
    });
  });

  closes.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".speakers__modal").classList.remove("show");
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("speakers__modal")) {
      e.target.classList.remove("show");
    }
  });
});